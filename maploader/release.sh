#!/bin/sh
interleave src/main.js -o _out.js
mv _out.js /tmp/

cat /tmp/_out.js | java -jar /home/rico/apps/closure-compiler/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --formatting PRETTY_PRINT > deploy/game.js

