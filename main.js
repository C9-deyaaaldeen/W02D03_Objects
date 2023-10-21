/* START CODE UNDER THIS LINE */
//pulse check
//Q1
//A
const human={
    age:40,
    Name:"khaled",
    Gender:"Male"
}
//B
const Move={
    Name:"trueDedactive",
    length:"2part",
    gener:"philosophical"
}
//C
const favFood={
     food:["UZi","Mansef"]
}
const Addr={
    MyName:"Mohammad",
    myAddr:["Jordan","Amman"]
}
//Q2
//A
const orderedSolarSystem={
    Mercury:"First",
    Venus:"Secaond",
    Eart:"third",
    Mars:"Forth"
}
console.log(orderedSolarSystem.Eart)
//Q2
//B
const orderedSolarSystem_1={
    Mercury:"First",
    Venus:"Secaond",
    Earth:"third",
    Mars:"Forth"
}
console.log(orderedSolarSystem["Earth"])//undifiend 
//Q2
//C
const animalDiet={
    mammals:{
        Cat:"carnivore",
        Dog:"Carnivore",
        Koala:"Herbivore",
    },
    Shark:"Carnivore"
}
console.log(animalDiet.mammals.Koala)
//Q3
//A
const stuOne={
    engGrade:80,
    sinGrade:90,
}

stuOne.MathGrade=90;
stuOne.engGrade=90;
stuOne.avg=(stuOne.engGrade+stuOne.sinGrade+stuOne.MathGrade)/3
console.log(stuOne)
//Q3
//B
const stu_2={
    engGrade:82,
    sinGrade:65,
}
stu_2["Math"]=90;
stu_2["engGrade"]=90;
stu_2["avg"]=(stu_2.engGrade+stu_2.sinGrade+stu_2.Math) /3
console.log(stu_2)

//C
/*const objectKey = "key";
const objectValue = "value";

const object = {,
 };*/

//Practice
//Q1
const person_1={
    Name:"john",
    Age:20,
};
const car={
   Brand :"Toyota",
    Model:2020,
};
const employee={
    Name:"jane",
    Position:"devloper",
};
//Q2
//A
const person_3={
    FirstName:"john",
    lastNmae:"Deo",
    age:24,
}
person_3.age=23
person_3.work=["devloper","450"]
console.log(person_3.work)
console.log(person_3.age)
//Q2
//B
const employee_1=[
    {
    id:1,
     name:{
        first:"john",
        Last:"Doe"
     },
     Position:"designer",
    },
     {
        id:2,
        name:{
            first:"jane",
            last:"Doe",
        },
        Position:"Engineer",

    },
    {
       id:3,
       name:{
        first:"Deyaa",
        last:"aldeen"

       },
       position:"FullStack"
    
    }
];
console.log("first:"+employee_1[0].name.first,"secaned:"+employee_1[1].name.first)

console.log(employee_1)
//Q2
//B
const cars ={
    toyota:{
        name:"prius",
        Model:2019,
        MotorCarrier:"Auto",

    },
    Nissan:{
        Name:"Leaf",
        Model:2020,
        MotorCarrier:"Auto",
    },
    marcedes:{
        name:"G-Class",
        Model:2022,
        MotorCarrier:"Auto",
    },

};
cars.toyota["Model"]=2020,
console.log(cars.toyota["Model"])
console.log(cars.Nissan["Model"])
//Q3
const createUser = function (FirstName,LastName){
    return  {FirstName: FirstName , LastName: LastName} 
         
}
//Q4
const createCar =function (Brand,Name,Color){
    return{ BrandCar:Brand, NameCar:Name, ColorCar:Color}
}

//Q5
const getFullName =function(person){
const first="";
const middle="";
const last="";
    const fullName ={ first:person.first,
     medel:person.middle,
     last:person.last,
}
    
     console.log(" ' "+ person.first+ " "+person.middle+" "+person.last +" ' ")
   
}
//Q6
const olderThan = function (personOne, personTwo) {
     Pers_one={
        name:"john",
        age:23,
    },
    Pers_two={
        name:"Jane",
        age:26,
    },
    Pers_three={
        name:"Mark",
        age:30,
    },
    Pers_Four={
        name:"Smith",
        age:25,
    },
    Pers_Five={
        name:"Marry",
        age:20,
    },
    Pers_Six={
        name:"Sarah",
        age:20,
    }
    if(personOne.age>personTwo.age)
    console.log(personOne.name+" "+"OlderThan"+" " +personTwo.name)
     else if(personOne.age<personTwo.age)
     console.log(personTwo.name+" "+"Older Than"+" "+personOne.name)
      else(console.log(personOne.name+" "+"as Older as"+" "+personTwo.name))
  };
  //Q7
  const isPropertyOf = function (string, object) {
    
    der ={

        string:string,
        object:"hello"
    }
    if(name===string)
    console.log(true)
     else(console.log(false))
  };
  //Q8
  const numberOfKeys = function (object) {
    
    num={
        name:object.name,
        age:object.age,
        fruit:object.fruit,
        vegetable:object.vegetable,
        animal:object.animal,

    }
    objectLength = Object.keys(object).length; 
    console.log(objectLength )
  };
  //Q9
  const valuesToString = function (object) {
    num={
        name:object.name,
        age:object.age,
        fruit:object.fruit,
        vegetable:object.vegetable,
        animal:object.animal,

    }
    objectVal = Object.values(object)
    console.log(objectVal)
  }
//Q10









