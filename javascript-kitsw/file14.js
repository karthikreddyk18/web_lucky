//create an object to store
//order details
//orderID,customerName,ProductName,Price

const order = {
  orderId: "o1",
  customerName: "John",
  productName: "Laptop",
  price: 45000,
};
// console.log(order.customerName)
// console.log(order.productName)
// console.log(order.price)

//method 1
// order.status = "Pending"
// console.log(order)

//method 2 - spread operator
const obj = {...order,status:"Pending"}
console.log(newOrder)