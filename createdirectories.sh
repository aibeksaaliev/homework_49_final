#!/bin/bash
mkdir project
cd project
git init
mkdir directory1 directory2 directory3
cd directory1
mkdir subdirectory1
cd ..
cd directory2
echo 'Hello from JS' > hello.txt
cd ..
cd directory3
mkdir subdirectory2
cd ..
cd ..
git add ./
git commit -m "Задание 1"
git log



