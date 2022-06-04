const asyncHandler = require('express-async-handler');

const newsModel = require('../models/newsModel')

//GET all news,
//route, GET api/news
//access, public
const getAllNews = asyncHandler(async (req, res) => {
    const news = await newsModel.find();
    //console.log("getAllNews "+req.path);
    res.json(news);
   
})

//POST new news,
//route, POST api/news
//access, private
const setNews = asyncHandler(async (req, res) => {
    if(! req.body.title){
        res.status(400);
        throw new Error("message: invalid request");
        
    }
    res.json({message: "Set news"});
    console.log(req.body);
})


//PUT  news,
//route, PUT api/news/:id
//access, private
const updateNews = asyncHandler(async (req, res) => {
    res.json({message: `Update news ${req.params.id}`});
})

//Delete  news,
//route, DELETE api/news/:id
//access, private
const deleteNews = asyncHandler(async (req, res) => {
    res.json({message: `Delete news ${req.params.id}`});
})

module.exports = {
    getAllNews, 
    setNews,
    updateNews,
    deleteNews
}