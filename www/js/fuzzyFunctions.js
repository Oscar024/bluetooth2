var obj = {
  crisp_input: [120, 10, 10],
  variables_input: [{
      name: "Distance to Target",
      setsName: ["Close", "Medium", "Far"],
      sets: [
        [0, 0, 25, 150],
        [25, 150, 150, 300],
        [150, 300, 400, 400]
      ]
    },
    {
      name: "Ammo Status",
      setsName: ["Low", "Okay", "Loads"],
      sets: [
        [0, 0, 0, 10],
        [0, 10, 10, 30],
        [10, 30, 40, 40]
      ]
    },
    {
      name: "Defense",
      setsName: ["Light", "Medium", "Heavy"],
      sets: [
        [0, 0, 0, 10],
        [0, 10, 10, 30],
        [10, 30, 40, 40]
      ]
    }
  ],
  variable_output: {
    name: "Desirability",
    setsName: ["Undesirable", "Desirable", "Very Desirable"],
    sets: [
      [0, 0, 25, 50],
      [25, 50, 50, 75],
      [50, 75, 100, 100]
    ]
  },
  inferences: [
    [0, 2, 0],
    [0, 1, 2],
    [2, 1, 0]
  ]
};


var obj2 = {
  crisp_input: [100, 10, 10],
  variables_input: [{
      name: "Distance to Target",
      setsName: ["Close", "Medium", "Far"],
      sets: [
        [0, 0, 25, 150],
        [25, 150, 150, 300],
        [150, 300, 400, 400]
      ]
    },
    {
      name: "Ammo Status",
      setsName: ["Low", "Okay", "Loads"],
      sets: [
        [0, 0, 0, 10],
        [0, 10, 10, 30],
        [10, 30, 40, 40]
      ]
    },
    {
      name: "Defense",
      setsName: ["Light", "Medium", "Heavy"],
      sets: [
        [0, 0, 0, 10],
        [0, 10, 10, 30],
        [10, 30, 40, 40]
      ]
    }
  ],
  variable_output: {
    name: "Desirability",
    setsName: ["Undesirable", "Desirable", "Very Desirable"],
    sets: [
      [0, 0, 25, 50],
      [25, 50, 50, 75],
      [50, 75, 100, 100]
    ]
  },
  inferences: [
    [0, 2, 0],
    [0, 1, 2],
    [2, 1, 0]
  ]
};
var fl = new FuzzyLogic();
var fl2 = new FuzzyLogic();

function valores() {
  obj.crisp_input[0] = parseFloat($("input#crispi1").val());
  obj.crisp_input[1] = parseFloat($("input#crispi2").val());
  obj.crisp_input[2] = parseFloat($("input#crispi3").val());
  obj2.crisp_input[0] = parseFloat($("input#crispi4").val());
  obj2.crisp_input[1] = parseFloat($("input#crispi5").val());
  obj2.crisp_input[2] = parseFloat($("input#crispi6").val());
}
