class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    printInfo(){
        console.log("First name:", this.firstName);
        console.log("Last name:", this.lastName);
        console.log("Age:", this.age);
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, specialty){
        super(firstName, lastName, age);
        this.specialty = specialty;
    }

    printStudentInfo(){
        this.printInfo();
        console.log("Specialty:", this.specialty);
    }
}

const student1 = new Student('Alex', 'Miller', 25, 'Web Development');
const student2 = new Student('Martha', 'Smith', 24, 'Software Engineering');

student1.printStudentInfo();
student2.printStudentInfo();

/*
console.log(student1.firstName, student1.lastName);

console.log(student2);

const student3 = {
    firstName : 'Roger',
    lastName : 'Anderson',
    age : 30,
    printInfo : function(){
        console.log(this.firstName, this.lastName);
    }
};

console.log(student3);
student3.printInfo();
*/