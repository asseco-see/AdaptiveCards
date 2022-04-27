// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
"use strict";

var typedschema = require("ac-typed-schema");
const { marked } = require('marked');
var fs = require("fs");
var path = require("path");

hexo.extend.helper.register('properties_details_md', function (properties, elementVersion, isSpec) {
	const codeAndCard = hexo.extend.helper.get('code_and_card').bind(hexo);

	var md = "";

	properties.forEach((property, name) => {
		md += typedschema.markdown.createPropertyDetails(property, 3, null, false, true, elementVersion);
		md += "\n";
	});

	return md;
});
