var strng = +prompt('ჩაწერე რამდენი სტუდენტი გინდა შეიყვანო');

var students1 = [];
for (var i = 0; i < strng; i++) {
    let names = prompt('ჩაწერე სტუდენტის სახელი');
    students1.push(names);
}

var strng2 = +prompt('ჩაწერე რამდენი სტუდენტი გინდა შეიყვანო');

var students2 = [];
for (var i = 0; i < strng; i++) {
    let names = prompt('ჩაწერე სტუდენტის სახელი');
    students2.push(names);
}

var newArr = [];

for (var i = 0; i < strng; i++) {
    if(newArr.indexOf(students1[i]) == -1) {
        newArr.push(students1[i]);
    }
}
for (var i = 0; i < strng2; i++) {
    if(newArr.indexOf(students2[i]) == -1) {
        newArr.push(students2[i]);
    }
}

console.log(newArr);