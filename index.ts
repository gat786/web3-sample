import express from "express";
import { Web3Storage } from "web3.storage";

const app = express();
const port = process.env.PORT || 3000;

app.post("/post", (req,res) => {
    res.send("Creating a web3.storage file")
})

app.get("/", (req, res) => {
    res.send("Welcome to the api base")
})

app.listen(port, () => {
    console.log(`express app started on ${port}`);
})
