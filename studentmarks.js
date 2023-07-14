

let students = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];
  
// Sort the array by total marks
function compare(a, b , order='totalmarks')  {
   
   let comparison = 0
   if (a.biology + a.chemistry >  b.biology + b.chemistry ) {
     comparison = 1;
    } else if (a.chemistry + a.biology < b.chemistry + b.biology) {
     comparison = -1;
    } else {
    // If the students have the same total marks, sort them by biology marks
     comparison = a.biology - b.biology;
   }
}
// Print the sorted array
console.log(students.sort(compare));