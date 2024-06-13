import {Router} from 'express';
import { sample_drugs, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { DrugModel } from '../models/drug.model';

const router = Router();

router.get("/seed", asyncHandler(
   async (req,res) => {
    const drugsCount = await DrugModel.countDocuments();
    if(drugsCount> 0){
        res.send ("Seed is already been planted")
        return;
    }
        await DrugModel.create(sample_drugs);
        res.send("Seed is done!")
    }
))

router.get("/", asyncHandler(
    async (req,res) => {
        const drugs = await DrugModel.find();
        res.send(drugs);
    }
))

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {

        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const drugs = await DrugModel.find({name: {$regex:searchRegex}});
        res.send(drugs);
    }
))

router.get("/tags", asyncHandler(
    async(req,res) => {
        const tags = await DrugModel.aggregate([
            {
                $unwind:'$tags'
            },
            {
                $group:{
                    _id: '$tags',
                    count: {$sum: 1}
                }
            },
            {
                $project:{
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        const all = {
            name : 'All',
            count : await DrugModel.countDocuments()
        }

        tags.unshift(all);

    res.send(tags);
}))

router.get("/tag/:tagName", asyncHandler(
    async(req,res)=> {
    const drugs = await DrugModel.find({tags: req.params.tagName})
    res.send(drugs);
}))

router.get("/:drugId", asyncHandler(
    async(req,res)=> {
    const drug = await DrugModel.findById(req.params.drugId)
    res.send(drug);
}))

export default router;