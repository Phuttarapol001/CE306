let students = [
    {name: "Susy", score: "70"},
    {name: "Alice", score: "80"},
    {name: "Mia", score: "65"},
    {name: "Karen", score: "75"},
    {name: "John", score: "85"},
    {name: "Mark", score: "60"}

];

function filterPassedStudents(passedscore){
    students.forEach(function(student){
        if (student.score >= passedscore){
            console.log("Student:"+student.name,"passed with score:"+student.score);
        }
    });
}
filterPassedStudents(50);