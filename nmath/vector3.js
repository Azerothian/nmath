//var Vector3 = require('./vector3');
var nMath = require('../nmath');

module.exports = Vector3;

nMath.Vector3 = Vector3;

function Vector3(x,y,z)
{
	this.X = x || 0;
	this.Y = y || 0;
	this.Z = z || 0;
}

Vector3.prototype = {
	/// <summary>
	/// Gets the length (magnitude) of the vector.
	/// </summary>
	/// <see cref="LengthSquared"/>
	Length: function()
	{
		return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
	},
	
	/// <summary>
	/// Gets the square of the vector length (magnitude).
	/// </summary>
	/// <remarks>
	/// This property avoids the costly square root operation required by the Length property. This makes it more suitable
	/// for comparisons.
	/// </remarks>
	/// <see cref="Length"/>
	LengthSquared: function()
	{
		return this.X * this.X + this.Y * this.Y + this.Z * this.Z; 
	},	
	
	/// <summary>
	/// Scales the Vector3 to unit length.
	/// </summary>
	Normalise: function()
	{
		var scale = 1.0 / this.Length;
		this.X *= scale;
		this.Y *= scale;
		this.Z *= scale;
	}

}
/// <summary>
/// Defines a unit-length Vector3 that points towards the X-axis.
/// </summary>
Vector3.UnitX = new Vector3(1, 0, 0);

/// <summary>
/// Defines a unit-length Vector3 that points towards the Y-axis.
/// </summary>
Vector3.UnitY = new Vector3(0, 1, 0);

/// <summary>
/// Defines a unit-length Vector3 that points towards the Z-axis.
/// </summary>
Vector3.UnitZ = new Vector3(0, 0, 1);

/// <summary>
/// Defines a zero-length Vector3.
/// </summary>
Vector3.Zero = new Vector3(0, 0, 0);

/// <summary>
/// Defines an instance with all components set to 1.
/// </summary>
Vector3.One = new Vector3(1, 1, 1);

/// <summary>
/// Adds two vectors.
/// </summary>
/// <param name="a">Left operand.</param>
/// <param name="b">Right operand.</param>
/// <param name="result">Result of operation.</param>
Vector3.Add = function(v1,v2)
{
	return new Vector3(v1.X+v2.X,v1.Y+v2.Y,v1.Z+v2.Z);
}

/// <summary>
/// Subtract one Vector from another
/// </summary>
/// <param name="a">First operand</param>
/// <param name="b">Second operand</param>
/// <param name="result">Result of subtraction</param>
Vector3.Subtract = function(v1,v2)
{
	return new Vector3(v1.X-v2.X,v1.Y-v2.Y,v1.Z-v2.Z);
}
/// <summary>
/// Multiplies a vector by the components a vector (scale).
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <returns>Result of the operation.</returns>
Vector3.Multiply = function(v,scale)
{
	return new Vector3(v.X * scale.X, v.Y * scale.Y, v.Z * scale.Z);
}

/// <summary>
/// Multiplies a vector by the components a vector (scale).
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <returns>Result of the operation.</returns>
Vector3.MultiplyByInt = function(vector,scale)
{
	return new Vector3(vector.X * scale, vector.Y * scale, vector.Z * scale);
}

/// <summary>
/// Divides a vector by the components of a vector (scale).
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <returns>Result of the operation.</returns>
Vector3.Divide = function(vector,scale)
{
	return new Vector3(vector.X / scale.X, vector.Y / scale.Y, vector.Z / scale.Z);
}

/// <summary>
/// Divides a vector by a scalar.
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <param name="result">Result of the operation.</param>
Vector3.DivideByInt = function(v1,scale)
{
	return Vector3.MultiplyByInt(v1, 1/scale);
}

/// <summary>
/// Calculate the component-wise minimum of two vectors
/// </summary>
/// <param name="a">First operand</param>
/// <param name="b">Second operand</param>
/// <returns>The component-wise minimum</returns>
Vector3.ComponentMin = function(a, b)
{
	a.X = a.X < b.X ? a.X : b.X;
	a.Y = a.Y < b.Y ? a.Y : b.Y;
	a.Z = a.Z < b.Z ? a.Z : b.Z;
	return a;
}

/// <summary>
/// Calculate the component-wise maximum of two vectors
/// </summary>
/// <param name="a">First operand</param>
/// <param name="b">Second operand</param>
/// <returns>The component-wise maximum</returns>
Vector3.ComponentMax = function(a, b)
{
	a.X = a.X > b.X ? a.X : b.X;
	a.Y = a.Y > b.Y ? a.Y : b.Y;
	a.Z = a.Z > b.Z ? a.Z : b.Z;
	return a;
}

/// <summary>
/// Returns the Vector3 with the minimum magnitude
/// </summary>
/// <param name="left">Left operand</param>
/// <param name="right">Right operand</param>
/// <returns>The minimum Vector3</returns>
Vector3.Min = function(left, right)
{
	return left.LengthSquared() < right.LengthSquared() ? left : right;
}

