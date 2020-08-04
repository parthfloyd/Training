let temp = 65

//LOGICAL AND OPERATOR - True if both sides are true!

// if(temp >=60 && temp <= 90) {
//     console.log("It is pretty nice out");
// } else if (temp <=0 || temp>= 120 ){ // LOGICAL OR
//     console.log("DO NOT GO OUTSIDE!!!!");
// } else {
//     console.log("Do what you want ^~^");
// }


//Challenge Area
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options');
} else {
    console.log('Offer up anything on the menu!');
}