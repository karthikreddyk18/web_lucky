import express from "express";
const app = express();
app.listen(8080, () => console.log("Web Server has been started"));
app.get("/", (req, res) => {
console.log(req.url);
console.log(req.method)
console.log(req.body)
res.send("response from server");
});