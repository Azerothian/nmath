//var Vector3 = require('./vector3');
var nMath = require('../nmath');

exports.Vector3 = Vector3;

nMath.Vector3 = Vector3;

function Vector3(x,y,z)
{
	this.X = x || 0;
	this.Y = y || 0;
	this.Z = z || 0;
}


Vector3.prototype = {
	Normalise: function()
	{
		var scale = 1.0 / this.Length;
		this.X *= scale;
		this.Y *= scale;
		this.Z *= scale;
	},
	Length: function()
	{
		return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
	},
	LengthSquared: function()
	{
		return this.X * this.X + this.Y * this.Y + this.Z * this.Z; 
	}
}
Vector3.UnitX = new Vector3(1, 0, 0);
Vector3.UnitY = new Vector3(0, 1, 0);
Vector3.UnitZ = new Vector3(0, 0, 1);
Vector3.Zero = new Vector3(0, 0, 0);
Vector3.One = new Vector3(1, 1, 1);

Vector3.Add = function(v1,v2)
{
	return new Vector3(v1.X+v2.X,v1.Y+v2.Y,v1.Z+v2.Z);
}
Vector3.Subtract = function(v1,v2)
{
	return new Vector3(v1.X-v2.X,v1.Y-v2.Y,v1.Z-v2.Z);
}
Vector3.Multiply = function(v,scale)
{
	return new Vector3(v.X * scale.X, v.Y * scale.Y, v.Z * scale.Z);
}
Vector3.MultiplyByInt = function(v1,scale)
{
	return new Vector3(v1.X * scale, v1.Y * scale, v1.Z * scale);
}
Vector3.Divide = function(v,scale)
{
	return new Vector3(v.X / scale.X, v.Y / scale.Y, v.Z / scale.Z);
}
Vector3.DivideByInt = function(v1,scale)
{
	return Vector3.MultiplyByInt(v1, 1/scale);
}
Vector3.ComponentMin = function(a, b)
{
	a.X = a.X < b.X ? a.X : b.X;
	a.Y = a.Y < b.Y ? a.Y : b.Y;
	a.Z = a.Z < b.Z ? a.Z : b.Z;
	return a;
}

