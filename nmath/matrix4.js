var nMath = require('../nmath');
var Vector4 = require('./vector4');
module.exports = Matrix4;

nMath.Matrix4 = Matrix4;

function Matrix4(row0,row1,row2,row3)
{
	this.Row0 = row0 || new Vector4(0,0,0,0);
	this.Row1 = row1 || new Vector4(0,0,0,0);
	this.Row2 = row2 || new Vector4(0,0,0,0);
	this.Row3 = row3 || new Vector4(0,0,0,0);
}

Matrix4.prototype = {
	/// <summary>
    /// The determinant of this matrix
    /// </summary>
	Determinant: function()
	{
		return
			this.Row0.X * this.Row1.Y * this.Row2.Z * this.Row3.W - this.Row0.X * this.Row1.Y * this.Row2.W * this.Row3.Z + this.Row0.X * this.Row1.Z * this.Row2.W * this.Row3.Y - this.Row0.X * this.Row1.Z * this.Row2.Y * this.Row3.W
            + this.Row0.X * this.Row1.W * this.Row2.Y * this.Row3.Z - this.Row0.X * this.Row1.W * this.Row2.Z * this.Row3.Y - this.Row0.Y * this.Row1.Z * this.Row2.W * this.Row3.X + this.Row0.Y * this.Row1.Z * this.Row2.X * this.Row3.W
            - this.Row0.Y * this.Row1.W * this.Row2.X * this.Row3.Z + this.Row0.Y * this.Row1.W * this.Row2.Z * this.Row3.X - this.Row0.Y * this.Row1.X * this.Row2.Z * this.Row3.W + this.Row0.Y * this.Row1.X * this.Row2.W * this.Row3.Z
            + this.Row0.Z * this.Row1.W * this.Row2.X * this.Row3.Y - this.Row0.Z * this.Row1.W * this.Row2.Y * this.Row3.X + this.Row0.Z * this.Row1.X * this.Row2.Y * this.Row3.W - this.Row0.Z * this.Row1.X * this.Row2.W * this.Row3.Y
            + this.Row0.Z * this.Row1.Y * this.Row2.W * this.Row3.X - this.Row0.Z * this.Row1.Y * this.Row2.X * this.Row3.W - this.Row0.W * this.Row1.X * this.Row2.Y * this.Row3.Z + this.Row0.W * this.Row1.X * this.Row2.Z * this.Row3.Y
            - this.Row0.W * this.Row1.Y * this.Row2.Z * this.Row3.X + this.Row0.W * this.Row1.Y * this.Row2.X * this.Row3.Z - this.Row0.W * this.Row1.Z * this.Row2.X * this.Row3.Y + this.Row0.W * this.Row1.Z * this.Row2.Y * this.Row3.X;
    },
	Column0: function()
	{
		return new Vector4(this.Row0.X, this.Row1.X, this.Row2.X, this.Row3.X);
	},
	Column1: function()
	{
		return new Vector4(this.Row0.Y, this.Row1.Y, this.Row2.Y, this.Row3.Y);
	},
	Column2: function()
	{
		return new Vector4(this.Row0.Z, this.Row1.Z, this.Row2.Z, this.Row3.Z);
	},
	Column3: function()
	{
		return new Vector4(this.Row0.W, this.Row1.W, this.Row2.W, this.Row3.W);
	},
    /// <summary>
    /// Gets or sets the value at row 1, column 1 of this instance.
    /// </summary>
    M11: function(i) {  if(i != undefined){ this.Row0.X = i; } return this.Row0.X;},

    /// <summary>
    /// Gets or sets the value at row 1, column 2 of this instance.
    /// </summary>
    M12: function(i) {  if(i != undefined){ this.Row0.Y = i; } return this.Row0.Y;},

    /// <summary>
    /// Gets or sets the value at row 1, column 3 of this instance.
    /// </summary>
    M13: function(i) {  if(i != undefined){ this.Row0.Z = i; } return this.Row0.Z;},

    /// <summary>
    /// Gets or sets the value at row 1, column 4 of this instance.
    /// </summary>
    M14: function(i) {  if(i != undefined){ this.Row0.W = i; } return this.Row0.W;},

    /// <summary>
    /// Gets or sets the value at row 2, column 1 of this instance.
    /// </summary>
    M21: function(i) {  if(i != undefined){ this.Row1.X = i; } return this.Row1.X;},

    /// <summary>
    /// Gets or sets the value at row 2, column 2 of this instance.
    /// </summary>
    M22: function(i) {  if(i != undefined){ this.Row1.Y = i; } return this.Row1.Y;},

    /// <summary>
    /// Gets or sets the value at row 2, column 3 of this instance.
    /// </summary>
    M23: function(i) {  if(i != undefined){ this.Row1.Z = i; } return this.Row1.Z;},

    /// <summary>
    /// Gets or sets the value at row 2, column 4 of this instance.
    /// </summary>
    M24: function(i) {  if(i != undefined){ this.Row1.W = i; } return this.Row1.W;},

    /// <summary>
    /// Gets or sets the value at row 3, column 1 of this instance.
    /// </summary>
    M31: function(i) {  if(i != undefined){ this.Row2.X = i; } return this.Row2.X;},

    /// <summary>
    /// Gets or sets the value at row 3, column 2 of this instance.
    /// </summary>
    M32: function(i) {  if(i != undefined){ this.Row2.Y = i; } return this.Row2.Y;},

    /// <summary>
    /// Gets or sets the value at row 3, column 3 of this instance.
    /// </summary>
    M33: function(i) {  if(i != undefined){ this.Row2.Z = i; } return this.Row2.Z;},

    /// <summary>
    /// Gets or sets the value at row 3, column 4 of this instance.
    /// </summary>
    M34: function(i) {  if(i != undefined){ this.Row2.W = i; } return this.Row2.W;},

    /// <summary>
    /// Gets or sets the value at row 4, column 1 of this instance.
    /// </summary>
    M41: function(i) {  if(i != undefined){ this.Row3.X = i; } return this.Row3.X;},

    /// <summary>
    /// Gets or sets the value at row 4, column 2 of this instance.
    /// </summary>
    M42: function(i) {  if(i != undefined){ this.Row3.Y = i; } return this.Row3.Y;},

    /// <summary>
    /// Gets or sets the value at row 4, column 3 of this instance.
    /// </summary>
    M43: function(i) {  if(i != undefined){ this.Row3.Z = i; } return this.Row3.Z;},

    /// <summary>
    /// Gets or sets the value at row 4, column 4 of this instance.
    /// </summary>
    M44: function(i) {  if(i != undefined){ this.Row3.W = i; } return this.Row3.W;}

	
}
/// <summary>
/// The identity matrix
/// </summary>
Matrix4.Identity = function(){ 
	return new Matrix4(Vector4.UnitX, Vector4.UnitY, Vector4.UnitZ, Vector4.UnitW);
}
