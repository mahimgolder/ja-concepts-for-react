//1.  How to declare a variable using let and const
const fatherName ='Arnord';
let season = 'winter';
season = 'summer';


// 2. conditions
// 6 basic condition : >, <, ===, !==, <=, >=
// multipol condition: &&, ||

if(fatherName === 'arnord' || season === 'winter'){

}
else if(fatherName === 'Arnord'){

}
else{

}
// 3. array declare
// index,
// length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for (let i = 0; i < numbers.length; i++ ){
    const number = numbers[i]
    console.log(number)
}

// 5. function
    function multiply(num1, num2){
        const result = num1 * num2;
        return result;
    }

    const output = multiply(53, 34)
    console.log(output)

    
//6. object
// 3 ways to acces proparty by name
const student={
    name: 'sakib',
    age: 32,
    movies: ['king', 'dhaka mastan', ]
}
const myVariable = 'age'
console.log(student.age)//direct by proparty
console.log(student['age']);//acces via proparty name string
console.log(myVariable);//acces via proparty name ina variable