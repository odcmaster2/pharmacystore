import express from "express"
import cors from "cors"
import { sample_drugs, sample_tags } from "./data";

const app = express();
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

const port = 5000;

app.listen(port, () => {
    console.log("Website served on http://localhost:"+port)
})