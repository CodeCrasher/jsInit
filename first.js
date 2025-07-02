// const product = {
//     productName : "Parker Jotter Standard CT Ball Pen",
//     price : 270,
//     rating : 4,
//     isDealAvailable : true,
//     offer: 5,
// };

// const profile = {
//     profileName : "Shradha",
//     posts : 195,
//     followers : 595000,
//     following : 4,
// };

// console.log(product);

/* First lecture Done for JavaScript which is about variables and data types */

// arithmetic operators
// let a = 10;
// let b = 20;

// console.log("a = ", a," & b = ", b); // a and b
// console.log("a + b = ", a + b); // addition
// console.log("a - b = ", a - b); // subtraction
// console.log("a * b = ", a * b); // multiplication
// console.log("a / b = ", a / b); // division
// console.log("a % b = ", a % b); // modulous
// console.log("a ** b = ", a ** b); // exponentiation
// console.log("a++ = ", a++); // post-increment
// console.log("++a = ", ++a); // pre-increment
// console.log("a-- = ", a--); // post-decrement
// console.log("--a = ", --a); // pre-decrement

//console.log("a==b",a == b);   //conditionals
//console.log("a===b",a === b); //strict conditionals


// let a,b;
// for (let i=0;i<=5;i++){
//     console.log("Hi from",i);
// }

// while(let i=0;i<=5;i++){
//     console.log("Hi from",i);
// }

// let str = "Hello";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log(size);


// let profile = {
//     name : "ambhoj",
//     age : 18,
//     isFollow : true};

// for(let i in profile){
//     console.log("key = ",i,"value = ", profile[i]);
// }
//Even number print
// for(let i=1;i<=100;i++){
//     if(i%2===0){
//         console.log("The even numbers are:", i);
//     }
// }

//Guess_game
// let guess_num = 25;
// let user_num = prompt("Enter the your guess:");
// console.log(user_num);
// while(user_num!=guess_num){
//     user_num = prompt("You have entered the wrong guess, Enter the your guess again:");
// }
// console.log("Congratulations you've guessed the correct number");


// let str="Hello";
// console.log(str);
// console.log(str.length);
// console.log(str[2]);

const profile = {
    profileName : "Shradha",
    posts : 195,
    followers : 595000,
    following : 4,
};

let specialString = `This is ${profile.profileName}'s profile with ${profile.posts} posts.`;
console.log(specialString);