// Back-end code goes here

var calculation = [];
var current = "";
var running = "";
var operators = ["/", "+", "*", "-"];

function buttonClick(button) {
  if (operators.indexOf(button) < 0) {
    current += button;
    running += button;
    $(".display-output").html(current);
    $(".display-running").html(running);
  } else if (operators.indexOf(button) >= 0) {
    calculation.push(current);
    current = "";
    calculation.push(button);
    running += button;
    $(".display-running").html(running);
  }
}

function clearReset(num) {
  if (num === 0) {
    $(".display-output").html(0);
  }
  $(".display-running").html(0);
  current = "";
  calculation = [];
  running = "";
}

function clearEntry() {
  current = "";
  $(".display-output").html(0);
  running = calculation.join("");
  $(".display-running").html(running);
}

function buttonCalculate() {
  calculation.push(current);
  var temp = [];
  calculation.forEach(function(item) {
    if (operators.indexOf(item) < 0) {
      temp.push(Number(item));
    } else {
      temp.push(item);
    }
  });
  var answer = temp[0];
  for (i = 1; i < temp.length; i += 2) {
      switch (temp[i]) {
        case "+" : answer += temp[i + 1];
          break;
        case "-" : answer -= temp[i + 1];
          break;
        case "/" : answer /= temp[i + 1];
          break;
        case "*" : answer *= temp[i + 1];
          break;
      }
  }
  if (answer % 1 === 0) {
    $(".display-output").html(answer);
  } else {
    $(".display-output").html(answer.toFixed(2));
  }
  clearReset(1);
}

// Front-end code goes here

$(document).ready(function() {

  $(".b-ac").on("click", function() {
    clearReset(0);
  });
  $(".b-ce").on("click", function() {
    clearEntry();
  });
  $(".b-1").on("click", function() {
    buttonClick("1");
  });
  $(".b-2").on("click", function() {
    buttonClick("2");
  });
  $(".b-3").on("click", function() {
    buttonClick("3");
  });
  $(".b-4").on("click", function() {
    buttonClick("4");
  });
  $(".b-5").on("click", function() {
    buttonClick("5");
  });
  $(".b-6").on("click", function() {
    buttonClick("6");
  });
  $(".b-7").on("click", function() {
    buttonClick("7");
  });
  $(".b-8").on("click", function() {
    buttonClick("8");
  });
  $(".b-9").on("click", function() {
    buttonClick("9");
  });
  $(".b-0").on("click", function() {
    buttonClick("0");
  });
  $(".b-add").on("click", function() {
    buttonClick("+");
  });
  $(".b-min").on("click", function() {
    buttonClick("-");
  });
  $(".b-div").on("click", function() {
    buttonClick("/");
  });
  $(".b-mult").on("click", function() {
    buttonClick("*");
  });
  $(".b-dot").on("click", function() {
    buttonClick(".");
  });
  $(".b-equ").on("click", function() {
    buttonCalculate();
  });

});
