#!/usr/bin/env node
// nMath Testing 
// Matthew Mckenzie aka Azeroth
// v0.1a

var sys = require('sys');
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
var vec = new nMath.Vector3(12,1,2);
var vec2 = new nMath.Vector3(1,1,2);
debugObj(vec);