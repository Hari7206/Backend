let a:number = 10;
console.log(a);

// a = "Hello World";

let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

// tuple so this is where we have a fixed length array and we can have different types of data in it
let tuple: [number, string] = [1, "Hello"];
console.log(tuple);

//  theen we have any and unknown types so any type is a type that can be anything and unknown is a type that can be anything but we have to check the type before we can use it


// any type can be anything and we can assign any value to it and we can use it without any type checking
let b: any = 10;
b = "Hello World";
console.log(b);


//  unkown type is a type that can be anything but we have to check the type before we can use it
let c : unknown = 10;
c = "Hello World";
console.log(c);



// union types are a type that can be one of many types and we can use it without any type checking
let d: number | string = 10;
d = "Hello ";
console.log(d);