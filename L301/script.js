var strng = prompt('არ ჩაწერო აკრძალული სიტყვა');

var akrdzaluli=["რეკლამა","მარკეტინგი","ვირუსი"];

var loser = 0;
for (var i=0; i<3; i++) {
    if(strng.indexOf(akrdzaluli[i]) >= 0){
        loser++;
    }
}

if(loser > 0) {
    alert('ბოდიში, წააგე');
}
else{
    alert('მაგარია, მოიგე');
}