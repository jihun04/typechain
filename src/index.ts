const name = "jihun",
    age = 17,
    gender = "male";


const sayHi = (name: string, age: number, gender: string): void => {
    console.log(`Hi ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);

export { };