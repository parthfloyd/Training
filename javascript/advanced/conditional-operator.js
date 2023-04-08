// const myAge = 27
// const message = myAge >=18 ? "You can vote" : "You cannot vote";

// console.log(message);

const myAge = 21;
const showPage = () => {
    return 'Showing the page';
};

const showErrorPage = () => {
    return "showing error page!";
};

console.log(myAge >= 21 ? showPage() : showErrorPage());

//challenge
const team = ['rth' , 'Uman', 'Kan', 'Gaen', 'Kal'];
console.log(team.length <=4 ? `Team size: ${team.length}` : "Too many people on your team");