var Vector3 = require('./vector3');
var nMath = require('../nmath');

nMath.Vector3 = function Vector3()
{
	this.X = 0;
	this.Y = 0;
	this.Z = 0;
}

nMath.Vector3 = function Vector3(x,y,z)
{
	this.X = x;
	this.Y = y;
	this.Z = z;
}


exports.Vector3 = Vector3;

Vector3.prototype = {
	Length: function()
	{
		return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
	},
	LengthSquared: function()
	{
		return this.X * this.X + this.Y * this.Y + this.Z * this.Z; 
	},
	Normalise: function()
	{
		var scale = 1.0 / this.Length;
        this.X *= scale;
        this.Y *= scale;
        this.Z *= scale;
	}
}
