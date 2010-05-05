#!/usr/bin/env node
// nMath Testing 
// Matthew Mckenzie aka Azeroth
// v0.1a

var sys = require('sys');
//var nodeunit = require('nodeunit');
var nMath = require('./nmath');
puts = sys.puts;
inspect = sys.inspect;

function debug (m) {
	puts(m);
}

function debugObj (m) {
	puts(inspect(m));
}
puts('Starting nMath Testing ');
var vec1 = new nMath.Vector4(12,1,2,3);
var vec2 = new nMath.Vector4(1,2,1,5);
var vec3 = new nMath.Vector4(14,-10,7,8);


puts("vec1:"+inspect(vec1));
puts("vec2:"+inspect(vec2));
puts("vec1.Length:" + vec1.Length());
puts("nMath.Vector4.Add(vec1,vec2): "+inspect(nMath.Vector4.Add(vec1,vec2)));
puts("nMath.Vector4.Subtract(vec1,vec2): "+inspect(nMath.Vector4.Subtract(vec1,vec2)));
puts("nMath.Vector4.Multiply(vec1, vec2): "+inspect(nMath.Vector4.Multiply(vec1, vec2)));
puts("nMath.Vector4.MultiplyByInt(vec1, 2): "+inspect(nMath.Vector4.MultiplyByInt(vec1, 2)));
puts("nMath.Vector4.Divide(vec1, vec2): "+inspect(nMath.Vector4.Divide(vec1, vec2)));
puts("nMath.Vector4.DivideByInt(vec1, 2): "+inspect(nMath.Vector4.DivideByInt(vec1, 2)));
//puts("nMath.Vector4.Cross(vec1, vec2): "+inspect(nMath.Vector4.Cross(vec1, vec2)));
puts("nMath.Vector4.Dot(vec1, vec2): "+inspect(nMath.Vector4.Dot(vec1, vec2)));

//puts("nMath.Vector4.Min(vec1, vec2): "+inspect(nMath.Vector4.Min(vec1, vec2)));
//puts("nMath.Vector4.Max(vec1, vec2): "+inspect(nMath.Vector4.Max(vec1, vec2)));

puts("nMath.Vector4.ComponentMin(vec1, vec2): "+inspect(nMath.Vector4.ComponentMin(vec1, vec2)));
puts("nMath.Vector4.ComponentMax(vec1, vec2): "+inspect(nMath.Vector4.ComponentMax(vec1, vec2)));

puts("nMath.Vector4.Clamp(vec3 ,vec2, vec1): "+
	inspect(nMath.Vector4.Clamp(vec3, vec2, vec1)));
	
puts("nMath.Vector4.Lerp(vec1, vec2, 1): "+inspect(nMath.Vector4.Lerp(vec1, vec2, 1)));

puts("nMath.Vector4.BaryCentric(vec1, vec2, vec3, 3, 2): "+inspect(nMath.Vector4.BaryCentric(vec1, vec2, vec3, 3, 2)));

//vec.Normalise();
//debugObj(vec);