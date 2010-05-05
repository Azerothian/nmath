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
	},
	Xy: function()
	{
		return new nMath.Vector2(this.X, this.Y);
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
	return new Vector3(
		a.X < b.X ? a.X : b.X,
		a.Y < b.Y ? a.Y : b.Y,
		a.Z < b.Z ? a.Z : b.Z);
}

/// <summary>
/// Calculate the component-wise maximum of two vectors
/// </summary>
/// <param name="a">First operand</param>
/// <param name="b">Second operand</param>
/// <returns>The component-wise maximum</returns>
Vector3.ComponentMax = function(a, b)
{
	return new Vector3(
		a.X > b.X ? a.X : b.X,
		a.Y > b.Y ? a.Y : b.Y,
		a.Z > b.Z ? a.Z : b.Z);
}

/// <summary>
/// Returns the Vector3 with the minimum magnitude
/// </summary>
/// <param name="left">Left operand</param>
/// <param name="right">Right operand</param>
/// <returns>(Vector3)The minimum Vector3</returns>
Vector3.Min = function(left, right)
{
	return left.LengthSquared() < right.LengthSquared() ? left : right;
}

/// <summary>
/// Returns the Vector3 with the maximum magnitude
/// </summary>
/// <param name="left">Left operand</param>
/// <param name="right">Right operand</param>
/// <returns>(Vector3)The maximum Vector3</returns>
Vector3.Max = function(left, right)
{
	return left.LengthSquared() >= right.LengthSquared() ? left : right;
}

/// <summary>
/// Clamp a vector to the given minimum and maximum vectors
/// </summary>
/// <param name="vec">Input vector</param>
/// <param name="min">Minimum vector</param>
/// <param name="max">Maximum vector</param>
/// <returns>(Vector3)The clamped vector</returns>
Vector3.Clamp = function(vec, min, max)
{
	return new Vector3(vec.X < min.X ? min.X : vec.X > max.X ? max.X : vec.X,
		vec.Y < min.Y ? min.Y : vec.Y > max.Y ? max.Y : vec.Y,
		vec.Z < min.Z ? min.Z : vec.Z > max.Z ? max.Z : vec.Z);
}

/// <summary>
/// Calculate the dot (scalar) product of two vectors
/// </summary>
/// <param name="left">First operand</param>
/// <param name="right">Second operand</param>
/// <returns>(float) The dot product of the two inputs</returns>
Vector3.Dot = function(left, right)
{
	return left.X * right.X + left.Y * right.Y + left.Z * right.Z;
}
/// <summary>
/// Caclulate the cross (vector) product of two vectors
/// </summary>
/// <param name="left">First operand</param>
/// <param name="right">Second operand</param>
/// <returns>The cross product of the two inputs</returns>
/// <param name="result">The cross product of the two inputs</param>
Vector3.Cross = function(left, right)
{
	return new Vector3(left.Y * right.Z - left.Z * right.Y,
		left.Z * right.X - left.X * right.Z,
		left.X * right.Y - left.Y * right.X);
}
/// <summary>
/// Returns a new Vector that is the linear blend of the 2 given Vectors
/// </summary>
/// <param name="a">First input vector</param>
/// <param name="b">Second input vector</param>
/// <param name="blend">The blend factor. a when blend=0, b when blend=1.</param>
/// <returns>a when blend=0, b when blend=1, and a linear combination otherwise</returns>
Vector3.Lerp = function(a, b, blend)
{
	return new Vector3(
		blend * (b.X - a.X) + a.X, 
		blend * (b.Y - a.Y) + a.Y, 
		blend * (b.Z - a.Z) + a.Z);
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
Vector3.BaryCentric = function(a, b, c, u, v)
{
	var t1 = Vector3.MultiplyByInt(Vector3.Subtract(b,a), u);
	var t2 = Vector3.MultiplyByInt(Vector3.Subtract(c,a), v);
	return Vector3.Add(a,Vector3.Add(t1,t2));
	
}

/// <summary>Transform a direction vector by the given Matrix
/// Assumes the matrix has a bottom row of (0,0,0,1), that is the translation part is ignored.
/// </summary>
/// <param name="vec">The vector to transform</param>
/// <param name="mat">The desired transformation</param>
/// <returns>The transformed vector</returns>
Vector3.TransformVector = function(vec, mat)
{
	return new Vector3(Vector3.Dot(vec, new Vector3(mat.Column0.X,mat.Column0.Y, mat.Column0.Z)),
		Vector3.Dot(vec, new Vector3(mat.Column1.X,mat.Column1.Y, mat.Column1.Z)),
		Vector3.Dot(vec, new Vector3(mat.Column2.X,mat.Column2.Y, mat.Column2.Z)));
}

/// <summary>Transform a Normal by the given Matrix</summary>
/// <remarks>
/// This calculates the inverse of the given matrix, use TransformNormalInverse if you
/// already have the inverse to avoid this extra calculation
/// </remarks>
/// <param name="norm">The normal to transform</param>
/// <param name="mat">The desired transformation</param>
/// <param name="result">The transformed normal</param>
Vector3.TransformNormal = function(norm, mat)
{
	var Inverse = Matrix4.Invert(mat);
	return Vector3.TransformNormalInverse(norm, Inverse);
}

/// <summary>Transform a Normal by the (transpose of the) given Matrix</summary>
/// <remarks>
/// This version doesn't calculate the inverse matrix.
/// Use this version if you already have the inverse of the desired transform to hand
/// </remarks>
/// <param name="norm">The normal to transform</param>
/// <param name="invMat">The inverse of the desired transformation</param>
/// <returns>The transformed normal</returns>
Vector3.TransformNormalInverse = function(norm, invMat)
{
	return new Vector3(
		(norm.X * invMat.Row0.X + norm.Y * invMat.Row0.Y + norm.Z * invMat.Row0.Z),
		(norm.X * invMat.Row1.X + norm.Y * invMat.Row1.Y + norm.Z * invMat.Row1.Z),
		(norm.X * invMat.Row2.X + norm.Y * invMat.Row2.Y + norm.Z * invMat.Row2.Z)
		);
}
		
/// <summary>Transform a Position by the given Matrix</summary>
/// <param name="pos">The position to transform</param>
/// <param name="mat">The desired transformation</param>
/// <param name="result">The transformed position</param>
Vector3.TransformPosition = function(pos, mat)
{
	return new Vector3(
		(pos.X * mat.Row0.X + pos.Y * mat.Row1.X + pos.Z * mat.Row2.X + mat.Row3.X),
		(pos.X * mat.Row0.Y + pos.Y * mat.Row1.Y + pos.Z * mat.Row2.Y + mat.Row3.Y),
		(pos.X * mat.Row0.Z + pos.Y * mat.Row1.Z + pos.Z * mat.Row2.Z + mat.Row3.Z)
		);
}
		
/// <summary>Transform a Vector by the given Matrix</summary>
/// <param name="vec">The vector to transform</param>
/// <param name="mat">The desired transformation</param>
/// <param name="result">The transformed vector</param>
Vector3.Transform = function(v, mat)
{
	var v4 = new nMath.Vector4(v.X, v.Y, v.Z, 1.0);
    return nMath.Vector4.Transform(v4, mat).Xyz();
}

/// <summary>
/// Transforms a vector by a quaternion rotation.
/// </summary>
/// <param name="vec">The vector to transform.</param>
/// <param name="quat">The quaternion to rotate the vector by.</param>
/// <param name="result">The result of the operation.</param>
Vector3.TransformByQuat = function(vec,quat)
{
    // Since vec.W == 0, we can optimize quat * vec * quat^-1 as follows:
    // vec + 2.0 * cross(quat.xyz, cross(quat.xyz, vec) + quat.w * vec)
	var xyz = quat.Xyz;
	var temp = Vector3.Cross(xyz, vec);
	var temp2 = Vector3.MultiplyByInt(vec, quat.W);
	var temp3 = Vector3.Add(temp, temp2);
	var temp4 = Vector3.Cross(xyz, temp3);
	var temp5 = Vector3.MultiplyByInt(temp4, 2);
	return Vector3.Add(vec, temp5);
}
		
/// <summary>Transform a Vector3 by the given Matrix, and project the resulting Vector4 back to a Vector3</summary>
/// <param name="vec">The vector to transform</param>
/// <param name="mat">The desired transformation</param>
/// <param name="result">The transformed vector</param>
Vector3.TransformPerspective = function(vec,mat)
{
	var v = new Vector4(vec.X,vec.Y,vec.Z);
	var t = Vector4.Transform(v, mat);
	return new Vector3(v.X / v.W,v.Y / v.W, v.Z / v.W);
}
		
/// <summary>
/// Calculates the angle (in radians) between two vectors.
/// </summary>
/// <param name="first">The first vector.</param>
/// <param name="second">The second vector.</param>
/// <returns>Angle (in radians) between the vectors.</returns>
/// <remarks>Note that the returned angle is never bigger than the constant Pi.</remarks>
Vector3.CalculateAngle = function(first, second)
{
	return Math.acos((Vector3.Dot(first, second)) / (first.Length() * second.Length()));
}

