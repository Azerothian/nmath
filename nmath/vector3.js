var vector3 = require('vector3');
var nmath = require('nmath');

function Vector3()
{
	this.X = 0;
	this.Y = 0;
	this.Z = 0;
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
