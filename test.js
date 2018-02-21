"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = celebs;

var _path = _interopRequireDefault(require("path"));

var _jsonfile = _interopRequireDefault(require("jsonfile"));

var _dirname = _interopRequireDefault(require("./dirname"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function celebs(views, cat) {
  var end;

  if (cat === 'all') {
    end = 'pantheon.json';
  } else {
    end = "individual/".concat(cat, ".json");
  }

  var file = _path.default.join(_dirname.default, "/data/json/".concat(views, "/").concat(end));

  return _jsonfile.default.readFileSync("".concat(file));
}
