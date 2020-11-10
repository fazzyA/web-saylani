//
var arr = [18,19,20]

var student1 = {
    name: 'tooba',
    joiningDate: new Date('17 feb, 2020'),
    age: 18,
    course: 'Web Saylani',
    showJoinDate: function(){
        console.log(student1.joiningDate)
    }
}
function Student(name, age,rollnum, course) {
    this.name = name;
    this.age = age;
    this.rollnum = rollnum;
    this.course = course;
    this.joiningDate = new Date();
    this.showJoinDate = function(){
        console.log(this.joiningDate)
    }

}
 function Employee(name, salary, absent){
    this.name = name;
    this.salary = salary;
    this.absent = absent;
    // this.salaryCalc = function(){
    //     if(this.absent > 2){
    //         this.salary = this.salary * 0.2;
    //         //return this.salary
    //         console.log(this.salary+'is your salary')
    //     }
    // }
 }
 Employee.prototype.bonus = 0;
Employee.prototype.salaryCalc = function(){
    if(this.absent > 2){
        this.salary = this.salary * 0.2;
        //return this.salary
        console.log(this.salary+'is your salary')
    }
}
var employee1 = new Employee('faiza', 5000, 4);
console.log(employee1.salary);
employee1.salaryCalc();
console.log(employee1.salary);
var employee2 = new Employee('raza', 4000, 2);
var employee3 = new Employee('xyz', 3000, 2);
var employee4 = new Employee('abc', 1000, 0);
console.log(employee1.bonus);
employee1.bonus = 2000;
console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);


student1  = new Student('tooba','18','34','web saylani')
student2  = new Student('ramsha','18','35','web saylani')
student3  = new Student('aiman','18','36','web saylani')
// console.log(student1.showJoinDate())
// console.log(student2.showJoinDate())
// console.log(student3.showJoinDate())

// student1.showJoinDate()
// for(var i in student1){
//     console.log(student1[i]) // for values
//     console.log(i)  // for key
// }
// console.log(student1['name'])

var library =  [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

    // for (let i = 0; i < library.length; i++) {
    //     console.log(library[i].author)
    // }










// function Plan(name, price,  pages) {
//      this.name = name;
//      this.price = price;
//      this.pages = pages;
//     //  this.show = function(){
//     //      console.log(this.name)
//     //  }
// }
// plan1 = new Plan('plane1', 50,3)
// plan2 = new Plan('plane2', 50,3)
// Plan.prototype.show = function(){
//           console.log(this.name)
//       }

//       plan1.show()
// plan2.show()