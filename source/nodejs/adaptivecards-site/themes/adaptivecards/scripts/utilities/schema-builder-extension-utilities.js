'use strict';
var fs = require('fs');

function loadExtendedDefinitions(extensionsPath) {
	const readDirMain = fs.readdirSync(extensionsPath);
	let extensions = [];
	let ids = []
	readDirMain.forEach((dirNext) => {
		if (!fs.lstatSync(extensionsPath + "/" + dirNext).isDirectory() && dirNext.endsWith('.json')) {
			var extension = JSON.parse(fs.readFileSync(extensionsPath + "/" + dirNext, "utf8"));

			ids.push(extension.id);
			for (const definitionName in extension.contributes.definitions)
				if (Object.hasOwnProperty.call(extension.contributes.definitions, definitionName)) {
					let definition = extension.contributes.definitions[definitionName];
					definition.type = definitionName;
					extensions.push({ 
						id: extension.id,
						file: dirNext,
						version: extension.version,
						elementPrefix: extension.elementPrefix,
						propertyPrefix: extension.propertyPrefix,
						hostConfig: extension.hostConfig,
						definition
					 })
				}
			}
	});

	let seen = new Set();
	var hasDuplicates = ids.some(function(current) {
    	return seen.size === seen.add(current).size;
	});

	if (hasDuplicates) {
		console.warn("WARN: Multiple extensions with same `id` found.");
		return [];
	}

	let valid = validateExtensions(extensions);
	return valid ? extensions : [];
}

function validateExtensions(extensions) {
	var extensionsWithoutId = extensions.filter(e => !e.id);

	if (extensionsWithoutId.length > 0) {
		extensionsWithoutId.forEach((extension) => {
			console.warn("WARN: Extension defined in " + extension.file + " is missing required preporty `id`.");
		});
		return false;
	}

	var extensionsWithoutVersion = extensions.filter(e => !e.version);

	if (extensionsWithoutVersion.length > 0) {
		extensionsWithoutVersion.forEach((extension) => {
			console.warn("WARN: Extension defined in " + extension.file + " is missing required preporty `version`.");
		});
		return false;
	}
	var extensionsWithoutPrefixes = extensions.filter(e => !e.elementPrefix && !e.propertyPrefix);
	
	if (extensionsWithoutPrefixes.length > 0) {
		extensionsWithoutPrefixes.forEach((extension) => {
			console.log(extension.elementPrefix, extension.propertyPrefix)
			console.warn("WARN: Extension with id " + extension.id + " is missing both `elementPrefix` and `propertyPrefix` fields. One is required");
		});
		return false;
	}
	return true;
}

module.exports = { loadExtendedDefinitions: loadExtendedDefinitions }