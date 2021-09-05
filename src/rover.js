class Rover {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.N = 1;
    this.E = 2;
    this.S = 3;
    this.W = 4;
    this.facing = this.N;
  }

  //Change the rover position according to passed arguments
  setPosition(x, y, dir) {
    this.x = x;
    this.y = y;
    if (dir == 'N') {
      this.facing = 1;
    } else if (dir == 'E') {
      this.facing = 2;
    } else if (dir == 'S') {
      this.facing = 3;
    } else if (dir == 'W') {
      this.facing = 4;
    }
  }

  //Print the rover's position along with direction
  printPosition() {
    var direction;
    if (this.facing == 1) {
      direction = 'N';
    } else if (this.facing == 2) {
      direction = 'E';
    } else if (this.facing == 3) {
      direction = 'S';
    } else if (this.facing == 4) {
      direction = 'W';
    }
    return this.x + ' ' + this.y + ' ' + direction;
  }

  //handle positions
  turnLeft() {
    this.facing = this.facing - 1 < this.N ? this.W : this.facing - 1;
  }

  turnRight() {
    this.facing = this.facing + 1 > this.W ? this.N : this.facing + 1;
  }

  move() {
    if (this.facing == this.N) {
      this.y++;
    } else if (this.facing == this.E) {
      this.x++;
    } else if (this.facing == this.S) {
      this.y--;
    } else if (this.facing == this.W) {
      this.x--;
    }
  }

  processRover(commands) {
    for (var idx = 0; idx < commands.length; idx++) {
      this.process(commands.charAt(idx));
    }
  }

  //processing the movements
  process(command) {
    if (command == 'L') {
      this.turnLeft();
    } else if (command == 'R') {
      this.turnRight();
    } else if (command == 'M') {
      this.move();
    } else {
      console.log('comand invalid');
    }
  }
}

module.exports = Rover;
