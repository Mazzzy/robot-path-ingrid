var RobotWalk = {
  grid: [],
  empMine: 0,
  height: 0,
  init: function (height, empMine) {
    this.height = height;
    this.grid = createSquareGrid(height);
    this.empMine = empMine;
  },
  walk: function () {
    var gridArr = this.grid;
    var empMine = this.empMine;
    var height = this.height;

    var result = {
      msg: "visted all",
      cords: { x: height, y: height },
      mineFound: false,
    };

    for (var x = 0; x < height; x++) {
      var row = gridArr[x];
      for (var y = 0; y < height; y++) {
        var slot = row[y];
        var sum = sumDigits(slot.row) + sumDigits(slot.col);
        console.log("SUM ", sum);
        if (sum <= empMine) {
          slot.visited = true;
        } else {
          result = {
            msg: "EMP Mine",
            cords: { x: slot.row, y: slot.col },
            mineFound: true,
          };
          return result;
        }
      }
    }
    return result;
  },
  accessibleArea: function () {
    // start walk
    var res = this.walk();
    if (res.mineFound) {
      console.log("==== Mine was Found ==== ");
      console.log("Accessible area for robot is upto", res.cords);
    } else {
      console.log("==== Mine not Found ==== ");
      console.log("Full given grid is accessible");
    }
  },
};
document.addEventListener("DOMContentLoaded", function () {
  RobotWalk.init(12, 17);
  RobotWalk.accessibleArea();
});
