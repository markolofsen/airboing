var axios = require('axios');

function DEMO(key) {
	this.key = key;
}

DEMO.prototype.start = function(text) {
  return `${this.key} : ${text}`;
};


module.exports = {
  DEMO,
  _
};
