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
var vec1 = new nMath.Vector3(12,1,2);
var vec2 = new nMath.Vector3(1,2,1);
var vec3 = new nMath.Vector3(14,-10,7);


puts("vec1:"+inspect(vec1));
puts("vec2:"+inspect(vec2));
puts("vec1.Length:" + vec1.Length());
puts("nMath.Vector3.Add(vec1,vec2): "+inspect(nMath.Vector3.Add(vec1,vec2)));
puts("nMath.Vector3.Subtract(vec1,vec2): "+inspect(nMath.Vector3.Subtract(vec1,vec2)));
puts("nMath.Vector3.Multiply(vec1, vec2): "+inspect(nMath.Vector3.Multiply(vec1, vec2)));
puts("nMath.Vector3.MultiplyByInt(vec1, 2): "+inspect(nMath.Vector3.MultiplyByInt(vec1, 2)));
puts("nMath.Vector3.Divide(vec1, vec2): "+inspect(nMath.Vector3.Divide(vec1, vec2)));
puts("nMath.Vector3.DivideByInt(vec1, 2): "+inspect(nMath.Vector3.DivideByInt(vec1, 2)));
puts("nMath.Vector3.Cross(vec1, vec2): "+inspect(nMath.Vector3.Cross(vec1, vec2)));
puts("nMath.Vector3.Dot(vec1, vec2): "+inspect(nMath.Vector3.Dot(vec1, vec2)));

puts("nMath.Vector3.Min(vec1, vec2): "+inspect(nMath.Vector3.Min(vec1, vec2)));
puts("nMath.Vector3.Max(vec1, vec2): "+inspect(nMath.Vector3.Max(vec1, vec2)));

puts("nMath.Vector3.ComponentMin(vec1, vec2): "+inspect(nMath.Vector3.ComponentMin(vec1, vec2)));
puts("nMath.Vector3.ComponentMax(vec1, vec2): "+inspect(nMath.Vector3.ComponentMax(vec1, vec2)));

puts("nMath.Vector3.Clamp(vec3 ,vec2, vec1): "+
	inspect(nMath.Vector3.Clamp(vec3, vec2, vec1)));
	
puts("nMath.Vector3.Lerp(vec1, vec2, 1): "+inspect(nMath.Vector3.Lerp(vec1, vec2, 1)));

puts("nMath.Vector3.BaryCentric(vec1, vec2, vec3, 3, 2): "+inspect(nMath.Vector3.BaryCentric(vec1, vec2, vec3, 3, 2)));

//vec.Normalise();
//debugObj(vec);