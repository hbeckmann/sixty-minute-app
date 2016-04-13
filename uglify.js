var NodeUglifier = require("node-uglifier");
var nodeUglifier = new NodeUglifier("source/app.js");
nodeUglifier.merge().uglify();

//exporting
nodeUglifier.exportToFile("build/app.js");
nodeUglifier.exportSourceMaps("build/app.js");
