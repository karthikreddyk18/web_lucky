//Promise
const f1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
      //   reject("Something went wrong");
    }, 3000);
  });
};

const f2 = (x) => {
  console.log(x + 10);
};

f1()
  .then((a) => f2(a))
  .catch((err) => console.log(err));


//Practical Scenario
//1. Place Order
//2. Send Email confirming the order