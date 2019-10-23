var strng = prompt('ჩაწერე რამე გრძელი წინადადება');

var newStr = strng;
if(strng.length > 15){
    var newStr = strng.substring(0,15) + '...';
}
alert(newStr