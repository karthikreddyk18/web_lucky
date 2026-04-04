//callback function
const greet = () => {
  console.log("Hello World");
};

const greet1 = () => {
  console.log("Good Morning");
};

const greet2 = () => {
    console.log("Good Evening")
}

const greet3 = () => {
    console.log("Good Afternoon")
}


const main = (f) => {
  f();
};

main(greet);
main(greet1);
main(greet2);
main(greet3);
