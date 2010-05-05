var nMath = require('../nmath');

module.exports = Matrix4;

nMath.Matrix4 = Matrix4;

function Matrix4(x,y,z,w)
{
	this.X = x || 0;
	this.Y = y || 0;
	this.Z = z || 0;
	this.W = w || 0;
}

Matrix4.prototype = {
	
}