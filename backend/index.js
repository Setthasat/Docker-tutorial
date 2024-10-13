const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const fakedb = [];

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.post("/user", (req, res) => {
    const { name, surname, age } = req.body;
    if (age <= 10) {
        res.status(400).json({ message: "not allow" });
    }

    const lengthDb = fakedb.push(req.body);
    const currentIndex = lengthDb - 1;
    const newUser = {
        id: currentIndex,
        ...req.body
    };

    res.status(200).json({ message: req.body });
});

app.get("/user/:id", (req, res) => {
    const user = fakedb[id];
    if (!user) {
        return res.status(400).json({ message: "not found user" });
    }
    return res.status(200).json({ message: user });
});

app.get("/alluser", (req, res) => {
    res.status(200).json({ message: fakedb });
});

app.listen(process.env.PORT ?? 8888, () => {
    console.log(`app start at port ${process.env.PORT}`);
});