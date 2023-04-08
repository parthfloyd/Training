//Lexical Scope (Static Scope)
//Global Scope -defined outside all code blocks
//Local Scope - defined inside a code block

//you can access variables defined in scope or in parent scopes
//Global scope var1
// var1 = 'varOne';

// if(true){
//     console.log(var1);
//     //Local Scope var2
//     let var2 = 'varTwo'; //the scope of this var is only till the end of this block!
//     if(true){
//         let varFour = 'varFour';
//     }
// }

// if(true){
//     let var3 = 'varThree';
// }

// console.log(var2);


//Global
    //local
        //local
    //local

// let name = "Parth";

// if(true){
//     let name = "PARTH"; // this will overshadow the global var name

//     if(true){
//         console.log(name);
//         name = 'Jen'; //this overshadows PARTH
//         console.log(name);
//     }
// }

// if(true){
//     console.log(name);
// }

//js autodeclaring check this out - also it is assigned as global!!!

if(true) {

    if(true) {
        name = 'Parth'; //this will declare name as global
        console.log(name);
    }

}

if(true) {
    console.log(name);
}