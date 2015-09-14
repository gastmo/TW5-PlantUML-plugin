/*\
title: $:/plugins/gastmo/plantuml/plantuml.js
type: application/javascript
module-type: macro

\*/
(function() {

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";


var CONFIG_TID = "$:/plugins/gastmo/plantuml/config";
var DEFAULT_PLANTUML_URL = "http://www.plantuml.com/plantuml/img/";

function getPlantUmlURL() {
  var oPlantUmlConfig = $tw.wiki.getTiddlerData(CONFIG_TID, {});
  if (!!oPlantUmlConfig && !!oPlantUmlConfig.txtPlantUmlUrl && oPlantUmlConfig.txtPlantUmlUrl != "") {
    return oPlantUmlConfig.txtPlantUmlUrl;
  } else {
    return DEFAULT_PLANTUML_URL;
  }
}

/*
  remove pipe character which breaks TW img syntax
*/
function cleanTitle(title) {
  return title.replace('|', '!');
}

var deflate = require("$:/plugins/gastmo/plantuml/deflate.js").deflate;
var encodeBase64 = require("$:/plugins/gastmo/plantuml/encode64.js").encodeBase64;


exports.name = "plantuml";

exports.params = [{
  name: "source"
}, {
  name: "alttext"
}];

/*
Run the macro
*/
exports.run = function(source, alttext) {
  var raw = source;
  var src = raw.indexOf('@start') >= 0 ? raw : '@startuml\n' + raw + '\n@enduml';
  var enc = encodeBase64(deflate(unescape(encodeURIComponent(src))));
  var url = getPlantUmlURL();

  var title = alttext;
  switch (alttext) {
    case "raw":
      title = cleanTitle(raw);
      break;
    case "src":
      title = cleanTitle(src);
      break;
    case "enc":
      title = enc;
      break;
    case "url":
      title = url;
      break;
    default:
      title = cleanTitle(alttext);
  }
  return ("[img[" + title + "|" + url + enc + "]]");
}


})();
