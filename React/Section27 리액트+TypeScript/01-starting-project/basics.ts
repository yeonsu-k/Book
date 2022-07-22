// Primitives

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports','Cooking'];

//let person; // 객체 타입. 따로 타입을 명시하지 않아도 any라는 타입으로 지정 실행됨
// 객체타입 명시하는 법
let person:{
    name: string;
    age: number;
};
person={
    name:'Max',
    age:32
};
// 객체 배열
let people:{
    name: string;
    age: number;
}[];

// Type inference
let course = 'React - The Complete Guide'
//course = 12341; // 오류발생! => string타입에 숫자가 들어갈 수 없기 때문

let union: string | number = 'React - The Complete Guide'
union = 12341; // 오류 발생X, 유니온 타입으로 해 타입을 명시해줬기 때문

// 타입 별칭(Type Alias)
type Person = {
    name: string;
    age: number;
};

let per : Person;
person = {
    name:'Max',
    age: 32
};
let peoples: Person[];

// Functions & types

function adds(a: number,b: number) {
    return a+b;
}

function printOutput(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning(array: any[], value: any){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray =[1,2,3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
updateArray[0].split(''); // 코드 오류는 안나지만 숫자형식에서는 불가능한 선언이기때문에 실행하면 오류 발생