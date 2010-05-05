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

puts("Vector1:"+inspect(vec1));
puts("Vector2:"+inspect(vec2));
puts("Vector1.Length:" + vec1.Length());
puts("nMath.Vector3.Add(vec1,vec2): "+inspect(nMath.Vector3.Add(vec1,vec2)));
puts("nMath.Vector3.Divide(vec1, vec2): "+inspect(nMath.Vector3.Divide(vec1, vec2)));
puts("nMath.Vector3.DivideByInt(vec1, 2): "+inspect(nMath.Vector3.DivideByInt(vec1, 2)));

//vec.Normalise();
//debugObj(vec);