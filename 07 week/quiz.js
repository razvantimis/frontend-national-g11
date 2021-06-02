/// 1

function whatDoesItDo(color) {
  if (color !== 'blue' || color !== 'green') {
    color = 'red';
  }

  return color;
}

whatDoesItDo('aaaa') // color=aaaa => if(aaaa !== blue || ...)
whatDoesItDo('blue') // color=aaaa => if(blue !== blue || blue != green) 
whatDoesItDo('green') // color=aaaa => if(green !== blue || green != green) 


  // 2

  (
    function f(f) {
      return typeof f(); // f() = 1  => typeof 1 = number
    }
  )(
    function () {
      return "1";
    }
  );

(function (f) {

})(1)