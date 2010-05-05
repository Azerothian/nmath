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
puts("nMath.Matrix4.Identity():"+inspect(nMath.Matrix4.Identity()));
puts("nMath.Matrix4.Identity().M11():"+inspect(nMath.Matrix4.Identity().M11()));


var testm4 = nMath.Matrix4.Identity();

puts("testm4:"+inspect(testm4));
testm4.M11(12);
puts("testm4.M11(12);");
puts("testm4:"+inspect(testm4));