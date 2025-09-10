let student = [
    {name: "Susy", grade: "B"},
    {name: "Alice", grade: "A"},
    {name: "Mia", grade: "C+"}
];

student.forEach(function(student, index) {
  console.log("Student " , index + ": " + student.name , ", Grade: " , student.grade);
});

function showStudentCount() {
    console.log("Total students:",[student.length]);
}

showStudentCount();