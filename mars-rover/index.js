const fs = require('fs');
const rov = require('./src/rover');

//import comands
fs.readFile('./input.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  //prepare comands
  const comands = data.toString();
  let comandLines = comands.trim().split('\n');
  comandLines = comandLines.filter((comandLine) => {
    return comandLine.trim() !== '';
  });

  let output = [];

  //5 5
  let input = readLine(comandLines, 0);
  const rover = new rov(input[0], input[1]);

  //1 2 N
  input = readLine(comandLines, 1);
  rover.setPosition(input[0], input[1], input[2]);

  //LMLMLMLMM
  input = readLine(comandLines, 2);
  rover.processRover(input[0]);
  output.push(rover.printPosition());

  //3 3 E
  input = readLine(comandLines, 3);
  rover.setPosition(input[0], input[1], input[2]);

  //MMRMMRMRRM
  input = readLine(comandLines, 4);
  rover.processRover(input[0]);
  output.push(rover.printPosition());

  //result
  output.map((x) => {
    console.log(x.toString());
  });
});

function readLine(data, line) {
  return data[line].replace(/\n|\r/g, '').split(' ');
}
