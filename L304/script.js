var strng = +prompt('ჩაწერე რამდენი სტუდენტი გინდა შეიყვანო');

var students = [];
for (var i = 0; i < strng; i++) {
    var names = prompt('ჩაწერე სტუდენტის სახელი');
    students.push(names);
}

console.log(students);
var students = ['გურამი', 'ბადრი', 'ანრი', 'დენისი'];

students.sort();

console.log(students);