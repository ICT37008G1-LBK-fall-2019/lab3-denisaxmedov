var strng = prompt('ჩაწერე ვალუტა რომელიც გინდა რომ დააკონვერტირო');

var kursi = 2.6;
var val = strng.substring(0,1);
var num = +strng.substring(1);
if(val == 'L'){
    alert('$'+num/kursi);
}
if(val == '$') {
    alert('L'+num*kursi);
}