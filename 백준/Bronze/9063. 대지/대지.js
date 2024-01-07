const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

input.shift();
const cubes = input.map((item) => item.map((cube) => Number(cube)));

const minX = Math.min(...cubes.map((item) => item[0]));
const maxX = Math.max(...cubes.map((item) => item[0]));
const minY = Math.min(...cubes.map((item) => item[1]));
const maxY = Math.max(...cubes.map((item) => item[1]));

const width = maxX - minX;
const height = maxY - minY;
console.log(width * height);
