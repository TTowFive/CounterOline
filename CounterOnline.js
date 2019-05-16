/**/
var InValue; //用来判断行为的值
var Num = []; //存放用户输入数字
var InsertNum; //用户输入时要插入Num的数字
var Symbol_store; //符号储存
var Numout; //用于数据显示
var BeforeNum = 0; //被数
var AlterNum = 0;

function checkNumLenth(InsertNum) { //检查用户输入数字个数
  var Text = document.getElementById('result').innerHTML;
  Text = parseInt(Text);
  Text = Text.toString();
  var TextLength = Text.length;

  if (TextLength < 10) { //小于10个数字自动添加数字
    Num.push(InsertNum);
    Numout = Num.join('');
    Numout = parseFloat(Numout);
    document.getElementById('result').innerHTML = Numout;
  }

  if (TextLength > 10) { //如果大于10个字符自动缩小
    alert(TextLength);
    document.getElementById('result').style['font-size'] = 75 + 'px';
  }

}

function Clear() {
  document.getElementById('result').innerHTML = 0;
  Num = [];
  Numout = [];
}

function Calculate(SYM) {
  var SUM = 0;
  if (SYM == '+') {
    SUM = BeforeNum + AlterNum;
  } else if (SYM == '-') {
    SUM = BeforeNum - AlterNum;
  } else if (SYM == 'X') {
    SUM = BeforeNum * AlterNum;
  } else if (SYM == '/') {
    SUM = BeforeNum / AlterNum
  }
  document.getElementById('result').innerHTML = SUM;
  BeforeNum = SUM;
}

function GetValue(InValue) { //按键判断
  if (InValue == 0) {
    // document.getElementById('result').innerHTML = 0;
    checkNumLenth(0);
  } else if (InValue == 1) {
    checkNumLenth(1);
  } else if (InValue == 2) {
    checkNumLenth(2);
  } else if (InValue == 3) {
    checkNumLenth(3);
  } else if (InValue == 4) {
    checkNumLenth(4);
  } else if (InValue == 5) {
    checkNumLenth(5);
  } else if (InValue == 6) {
    checkNumLenth(6);
  } else if (InValue == 7) {
    checkNumLenth(7);
  } else if (InValue == 8) {
    checkNumLenth(8);
  } else if (InValue == 9) {
    checkNumLenth(9);
  } else if (InValue == 'dot') {
    checkNumLenth('.');
  } else if (InValue == '+') {
    BeforeNum = Numout;
    Symbol_store = InValue;
    Clear();
  } else if (InValue == '-') {
    BeforeNum = Numout;
    Symbol_store = InValue;
    Clear();
  } else if (InValue == 'X') {
    BeforeNum = Numout;
    Symbol_store = InValue;
    Clear();
  } else if (InValue == '/') {
    BeforeNum = Numout;
    Symbol_store = InValue;
    Clear();
  } else if (InValue == 'AC') {
    document.getElementById('result').innerHTML = 0;
    Num = [];
    Numout = [];
    Symbol_store = '';
  } else if (InValue == 'equal') {
    AlterNum = Numout;
    Calculate(Symbol_store);
  }
}
