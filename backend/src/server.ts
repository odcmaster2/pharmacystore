import express from "express"
import cors from "cors"
import { sample_drugs, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/drugs", (req,res) => {
    res.send(sample_drugs);
})

app.get("/api/drugs/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const drugs = sample_drugs
    .filter(drug => drug.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(drugs);
})

app.get("/api/drugs/tags", (req,res) => {
    res.send(sample_tags);
})

app.get("/api/drugs/tag/:tagName", (req,res)=> {
    const tagName = req.params.tagName;
    const drugs = sample_drugs
    .filter(drug => drug.tags?.includes(tagName));
    res.send(drugs);
})

app.get("/api/drug/:drugId", (req,res)=> {
    const drugId = req.params.drugId;
    const drug = sample_drugs.find(drug => drug.id == drugId);
    res.send(drug);
})

app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email &&
        user.password === password);

        if(user){
            res.send(generateTokenResponse(user))
        }else{
            res.status(400).send("Username or password is not valid");        }
})

const generateTokenResponse = (user:any) =>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"SomeRandomText", {
        expiresIn:"30d"
    });

    user.token =token;
    return user;
}

const port = 5000;

app.listen(port, () => {
    console.log("Website served on http://localhost:"+port)
})