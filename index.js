const express = require('express');
const app = express();
const port = 5000
const students = [
    {
        id: 1,
        name: "Festus",
        age: 28,
        course: "Cybersecurity",
    },

    {
        id: 2,
        name: "Felix",
        age: 18,
        course: "Wed development",
    },

    {
        id: 3,
        name: "Ade",
        age: 17,
        course: "Wed development"
    },

    {
        id: 4,
        name: "Sola",
        age: 22,
        course: "Mobile App"
    },

    {
        id: 5,
        name: "Ajala",
        age: 24,
        course: "Cybersecurity"
    },

    {
        id: 6,
        name: "Isaac",
        age: 22,
        course: "Hardware"
    },

    {
        id: 7,
        name: "Mercy",
        age: 24,
        course: "Web-Development"
    }
]

app.get('/home', (req, res)=>{
    res.send('Welcome to my Express server!')
})

app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
})

app.get('/dashboard', (req, res) =>{
    res.sendFile(__dirname + '/ade.html');
    console.log(__dirname);
})

app.get('/api',(req, res)=>{
    res.json(students)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})