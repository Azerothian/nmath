var nMath = require('../nmath');

module.exports = Vector4;

nMath.Vector4 = Vector4;

function Vector4(x,y,z,w)
{
	this.X = x || 0;
	this.Y = y || 0;
	this.Z = z || 0;
	this.W = w || 0;
}

Vector4.prototype = {
	/// <summary>
	/// Gets the length (magnitude) of the vector.
	/// </summary>
	/// <see cref="LengthSquared"/>
	Length: function()
	{
		return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W);
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
		return this.X * this.X + this.Y * this.Y + this.Z * this.Z + this.W * this.W; 
	},	
	
	/// <summary>
	/// Scales the Vector4 to unit length.
	/// </summary>
	Normalise: function()
	{
		var scale = 1.0 / this.Length;
		this.X *= scale;
		this.Y *= scale;
		this.Z *= scale;
		this.W *= scale;
	},
	Xy: function()
	{
		return new nMath.Vector2(this.X, this.Y);
	},
	Xyz: function()
	{
		return new nMath.Vector3(this.X, this.Y, this.Z);
	}
}
/// <summary>
/// Defines a unit-length Vector4 that points towards the X-axis.
/// </summary>
Vector4.UnitX = new Vector4(1, 0, 0, 0);

/// <summary>
/// Defines a unit-length Vector4 that points towards the Y-axis.
/// </summary>
Vector4.UnitY = new Vector4(0, 1, 0, 0);

/// <summary>
/// Defines a unit-length Vector4 that points towards the Z-axis.
/// </summary>
Vector4.UnitZ = new Vector4(0, 0, 1, 0);

/// <summary>
/// Defines a unit-length Vector4 that points towards the W-axis.
/// </summary>
Vector4.UnitW = new Vector4(0, 0, 0, 1);

/// <summary>
/// Defines a zero-length Vector4.
/// </summary>
Vector4.Zero = new Vector4(0, 0, 0, 0);

/// <summary>
/// Defines an instance with all components set to 1.
/// </summary>
Vector4.One = new Vector4(1, 1, 1, 1);

/// <summary>
/// Adds two vectors.
/// </summary>
/// <param name="a">Left operand.</param>
/// <param name="b">Right operand.</param>
/// <param name="result">Result of operation.</param>
Vector4.Add = function(v1,v2)
{
	return new Vector4(v1.X+v2.X,v1.Y+v2.Y,v1.Z+v2.Z,v1.W+v2.W);
}

/// <summary>
/// Subtract one Vector from another
/// </summary>
/// <param name="a">First operand</param>
/// <param name="b">Second operand</param>
/// <param name="result">Result of subtraction</param>
Vector4.Subtract = function(v1,v2)
{
	return new Vector4(v1.X-v2.X,v1.Y-v2.Y,v1.Z-v2.Z,v1.W+v2.W);
}
/// <summary>
/// Multiplies a vector by the components a vector (scale).
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <returns>Result of the operation.</returns>
Vector4.Multiply = function(v,scale)
{
	return new Vector4(v.X * scale.X, v.Y * scale.Y, v.Z * scale.Z, v.W * scale.W);
}

/// <summary>
/// Multiplies a vector by the components a vector (scale).
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <returns>Result of the operation.</returns>
Vector4.MultiplyByInt = function(vector,scale)
{
	return new Vector4(vector.X * scale, vector.Y * scale, vector.Z * scale, vector.W * scale);
}

/// <summary>
/// Divides a vector by the components of a vector (scale).
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <returns>Result of the operation.</returns>
Vector4.Divide = function(vector,scale)
{
	return new Vector4(vector.X / scale.X, vector.Y / scale.Y, vector.Z / scale.Z, vector.W / scale.W);
}

/// <summary>
/// Divides a vector by a scalar.
/// </summary>
/// <param name="vector">Left operand.</param>
/// <param name="scale">Right operand.</param>
/// <param name="result">Result of the operation.</param>
Vector4.DivideByInt = function(v1,scale)
{
	return Vector4.MultiplyByInt(v1, 1/scale);
}
/// <summary>
/// Calculate the component-wise minimum of two vectors
/// </summary>
/// <param name="a">First operand</param>
/// <param name="b">Second operand</param>
/// <returns>The component-wise minimum</returns>
Vector4.ComponentMin = function(a, b)
{
	return new Vector4(
		a.X < b.X ? a.X : b.X,
		a.Y < b.Y ? a.Y : b.Y,
		a.Z < b.Z ? a.Z : b.Z,
		a.W < b.W ? a.W : b.W);
}

/// <summary>
/// Calculate the component-wise maximum of two vectors
/// </summary>
/// <param name="a">First operand</param>
/// <param name="b">Second operand</param>
/// <returns>The component-wise maximum</returns>
Vector4.ComponentMax = function(a, b)
{
	return new Vector4(
		a.X > b.X ? a.X : b.X,
		a.Y > b.Y ? a.Y : b.Y,
		a.Z > b.Z ? a.Z : b.Z,
		a.W > b.W ? a.W : b.W);
}

/// <summary>
/// Clamp a vector to the given minimum and maximum vectors
/// </summary>
/// <param name="vec">Input vector</param>
/// <param name="min">Minimum vector</param>
/// <param name="max">Maximum vector</param>
/// <returns>(Vector4)The clamped vector</returns>
Vector4.Clamp = function(vec, min, max)
{
	return new Vector4(vec.X < min.X ? min.X : vec.X > max.X ? max.X : vec.X,
		vec.Y < min.Y ? min.Y : vec.Y > max.Y ? max.Y : vec.Y,
		vec.Z < min.Z ? min.Z : vec.Z > max.Z ? max.Z : vec.Z,
		vec.W < min.W ? min.W : vec.W > max.W ? max.W : vec.W);
}

/// <summary>
/// Calculate the dot (scalar) product of two vectors
/// </summary>
/// <param name="left">First operand</param>
/// <param name="right">Second operand</param>
/// <returns>(float) The dot product of the two inputs</returns>
Vector4.Dot = function(left, right)
{
	return left.X * right.X + left.Y * right.Y + left.Z * right.Z+ left.W * right.W;
}
/// <summary>
/// Returns a new Vector that is the linear blend of the 2 given Vectors
/// </summary>
/// <param name="a">First input vector</param>
/// <param name="b">Second input vector</param>
/// <param name="blend">The blend factor. a when blend=0, b when blend=1.</param>
/// <returns>a when blend=0, b when blend=1, and a linear combination otherwise</returns>
Vector4.Lerp = function(a, b, blend)
{
	return new Vector4(
		blend * (b.X - a.X) + a.X, 
		blend * (b.Y - a.Y) + a.Y, 
		blend * (b.Z - a.Z) + a.Z, 
		blend * (b.W - a.W) + a.W);
}
/// <summary>
/// Interpolate 3 Vectors using Barycentric coordinates
/// </summary>
/// <param name="a">First input Vector</param>
/// <param name="b">Second input Vector</param>
/// <param name="c">Third input Vector</param>
/// <param name="u">First Barycentric Coordinate</param>
/// <param name="v">Second Barycentric Coordinate</param>
/// <returns>a when u=v=0, b when u=1,v=0, c when u=0,v=1, and a linear combination of a,b,c otherwise</returns>
Vector4.BaryCentric = function(a, b, c, u, v)
{
	var t1 = Vector4.MultiplyByInt(Vector4.Subtract(b,a), u);
	var t2 = Vector4.MultiplyByInt(Vector4.Subtract(c,a), v);
	return Vector4.Add(a,Vector4.Add(t1,t2));
}

/// <summary>Transform a Vector by the given Matrix</summary>
/// <param name="vec">The vector to transform</param>
/// <param name="mat">The desired transformation</param>
/// <param name="result">The transformed vector</param>
Vector4.Transform = function(vec, mat)
{
	return new Vector4(
		vec.X * mat.Row0.X + vec.Y * mat.Row1.X + vec.Z * mat.Row2.X + vec.W * mat.Row3.X,
		vec.X * mat.Row0.Y + vec.Y * mat.Row1.Y + vec.Z * mat.Row2.Y + vec.W * mat.Row3.Y,
		vec.X * mat.Row0.Z + vec.Y * mat.Row1.Z + vec.Z * mat.Row2.Z + vec.W * mat.Row3.Z,
		vec.X * mat.Row0.W + vec.Y * mat.Row1.W + vec.Z * mat.Row2.W + vec.W * mat.Row3.W);
}
