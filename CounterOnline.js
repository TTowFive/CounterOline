/**/
var InValue;
var Num = [];

// function COUNT() {
//   var count = 0;
//   for (){
//
//   }
// }

function checkNumLenth() {
  var Text = document.getElementById('result').innerHTML;
  Text = parseInt(Text);
  Text = Text.toString();
  var TextLength = Text.length;

  if (TextLength > 10) {
    alert(TextLength);
    document.getElementById('result').style['font-size'] = 75 + 'px';
  }
}

function GetValue(InValue) {
  if (InValue == 0) {
    // document.getElementById('result').innerHTML = 0;
    checkNumLenth();
    // document.getElementById('result').style['font-size'] = '75px';

  } else if (InValue == 1) {
    alert(1);
  } else if (InValue == 2) {
    alert(2);
  } else if (InValue == 3) {
    alert(3);
  } else if (InValue == 4) {
    alert(4);
  } else if (InValue == 5) {
    alert(5);
  } else if (InValue == 6) {
    alert(6);
  } else if (InValue == 7) {
    alert(7);
  } else if (InValue == 8) {
    alert(8);
  } else if (InValue == 9) {
    alert(9);
    // } else if (InValue == 1) {
    //   alert(0);
    // } else if (InValue == 1) {
    //   alert(0);
    // } else if (InValue == 1) {
    //   alert(0);
    // } else if (InValue == 1) {
    //   alert(0);
    // } else if (InValue == 1) {
    //   alert(0);
  } else if (InValue == 'equal') {
    alert("Result is xxx");
  }
}
