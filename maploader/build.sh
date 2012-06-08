#!/bin/sh
interleave src/main.js -o _out.js
cat _out.js | java -jar /home/rico/apps/closure-compiler/compiler.jar  --compilation_level ADVANCED_OPTIMIZATIONS --formatting PRETTY_PRINT --js _out.js > out.js
