// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
"use strict";
const { BuildModelOptions } = require("ac-typed-schema");
var typedschema = require("ac-typed-schema");
var path = require("path");
var fs = require('fs');
const { loadExtendedDefinitions } = require("./utilities/schema-builder-extension-utilities");

hexo.extend.generator.register("generator-explorer", function (locals) {

    return new Promise(function (resolve, reject) {

		try {
			var schemaModel = typedschema.markdown.buildModel({
				schema: "../../../schemas/src",
				toc: "./schema-explorer-toc.yml",
				rootDefinition: "AdaptiveCard",
				examplesPath: "../../../samples",
			});
			
			var pages = [];
			let extensions = loadExtendedDefinitions("../../../schemas/extensions");

			// Extend schema model with loaded extensions
			schemaModel = buildExtensionModel(
				schemaModel, 
				extensions, 
				{
					schema: "../../../schemas/src",
				});

			schemaModel.forEach(function (root) {
				if (root.extensions && root.extensions.length > 0) {
					root.extensions.forEach(function (extension) {
						extension.htmlPath = "explorer/" + extension.name + ".html";
						var page = {
							path: extension.htmlPath,
							layout: "explorer",
							data: {
								title: "Schema Explorer",
								schema: schemaModel,
								element: extension,
								childPath: extension.htmlPath,
								isExtension: true,
								propertiesSummary: typedschema.markdown.createPropertiesSummary(extension.type, null, true, true, extension.version)
							}
						}

						pages.push(page);
					});
				}
				root.children.forEach(function (child) {
					child.htmlPath = "explorer/" + child.name + ".html";
					var page = {
						path: child.htmlPath,
						layout: "explorer",
						data: {
							title: "Schema Explorer",
							schema: schemaModel,
							element: child,
							childPath: child.htmlPath,
							isExtension: root.title === 'Feature Extensions',
							propertiesSummary: typedschema.markdown.createPropertiesSummary(child.type, null, true, true, child.version)
						}
					}

					pages.push(page);

					// Set the default root as the index
					if (child.name === "AdaptiveCard") {
						pages.push({
							path: "explorer/index.html",
							layout: "explorer",
							data: {
								title: "Schema Explorer",
								schema: schemaModel,
								element: child,
								childPath: child.htmlPath,
								isExtension: false,
								propertiesSummary: typedschema.markdown.createPropertiesSummary(child.type, null, false, true)
							}
						});
					}
				});
			});

			resolve(pages);
		} catch (err) {
			reject(err);
		}
    });

	function buildExtensionModel(schemaModels, extendedDefinitions, options) {

		// TODO: Implement existing elements extensions
		extendedDefinitions = extendedDefinitions.filter(d => d.elementPrefix);
		let items = [];

		if (!extendedDefinitions || extendedDefinitions.length < 1) {
			return schemaModels;
		}

		extendedDefinitions.forEach((extension) => {
			items.push(extension.definition);
			items[extension.definition.type] = extension.definition;
		});

		// Load adaptive-cards schemas for reusing types
		var files = typedschema.Schema.getAllFiles(options.schema);

		files.forEach((filePath) => {
			if (filePath.endsWith(".json")) {
				var fileTxt = fs.readFileSync(filePath, "utf8");
				var type = JSON.parse(fileTxt);

				// Infer type name from file name if not specified
				if (!type.type) {
					var stat = fs.statSync(filePath);
					if (stat) {
						type.type = path.basename(filePath, ".json");
					}
				}

				items.push(type);
				items[type.type] = type;
			}
		});

		// Generate schema with extensions
		var schema = new typedschema.Schema(items);
		
		// Iterate extended definitions and update schema model
		extendedDefinitions.forEach((extension) => {
			var schemaModelForUpdate = null;
			if (extension.definition.type.startsWith('Input.')) {
				schemaModelForUpdate = schemaModels.find(m => m.title == 'Inputs');
			} else if (extension.definition.type.startsWith('Action.')) {
				schemaModelForUpdate = schemaModels.find(m => m.title == 'Actions');
			} else {
				schemaModelForUpdate = schemaModels.find(m => m.title == 'Feature Extensions');
			}
	
			if (schemaModelForUpdate == null) {
				schemaModelForUpdate = {
					title: 'Feature Extensions',
					children: [],
					schema: schemaModels
				};
			}
	
			if (!schemaModelForUpdate.extensions) {
				schemaModelForUpdate.extensions = [];
			}

			let objSchema = schema.typeDictionary.get(extension.definition.type);
			if (objSchema === undefined) {
				console.warn("WARN: Unable to locate schema definition for " + extension.definition.type);
				return schemaModels;
			}

			var definition = {
				type: objSchema
			};
			definition.name = extension.definition.type;
			definition.version = extension.version;
			definition.extensionId = extension.id;

			// TODO: Fix this after renderer extension implementation
			definition.examples = [];
			if (options.examplesPath) {
				definition.examples = glob.sync("**/" + definition.name + ".json", { cwd: options.examplesPath, nocase: true, absolute: true })
			}

			definition.description = objSchema.description;
			if (objSchema instanceof typedschema.SchemaClass) {
				definition.properties = objSchema.getAllProperties();
			}

			var extendedProperties = objSchema.getAllExtendedProperties();

			if (definition.properties) {
				var properties = definition.properties;
				properties.forEach((property, properName) => {

					// Override version for properties that are not inherited
					if (!extendedProperties.find(p => p === properName)) {
						property._original.version = extension.version;
					}

					// TODO: Fix this after renderer extension implementation
					var anyProperty = property;
					anyProperty.cardExamples = [];
					if (options.examplesPath) {
						var globPattern = "**/" + definition.name + "." + properName + ".json";
						anyProperty.cardExamples = glob.sync(globPattern, { cwd: options.examplesPath, nocase: true, absolute: true });
					}
				});
			}

			if (schemaModelForUpdate.title == 'Feature Extensions') {
				schemaModelForUpdate.children.push(definition);
			} else {
				schemaModelForUpdate.extensions.push(definition);
			}

			if (schemaModelForUpdate.title == 'Feature Extensions' && !schemaModels.find(t => t.title == 'Feature Extensions')) {
				schemaModels.push(schemaModelForUpdate);
			}
		});
		return schemaModels;
	}
});
