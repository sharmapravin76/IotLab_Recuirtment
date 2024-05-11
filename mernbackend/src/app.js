const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")
require("./db/conn.js");
const Registration = require("./models/registrations")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",template_path)
hbs.registerPartials(partials_path);

app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/registration" ,(req,res) =>{
    res.render("registration")
})

app.post("/registration" ,async(req,res) =>{
    try{
        const registrationStudent = new Registration({
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            RollNo: req.body.rollno,
            Email: req.body.email,
            Year: req.body.year,
            Domain:req.body.domain,
        })
        const registered = await registrationStudent.save();
        res.status(201).render("index");
    }
    catch(e){
        res.status(400).send(e);
    }
})



app.listen(port, () =>{
    console.log(`server is running at port no ${port}`)
}) 