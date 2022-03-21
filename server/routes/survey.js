var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var Survey = require ("../db/models/survey");
var Image = require ("../db/models/image");

/* GET survey listing. */
router.get('/',async (req, res, next)  => {
  try {
    const servey = await Survey.find();
    return res.json(servey);
  }catch(err){
    console.error("Hey look, Error!", err);
    return res.json(err);
  }
  
});

router.get('/:category',async (req, res, next)  => {
  const {category} = req.params
  try {
  
    const servey = await Survey.findOne({category: category.toLowerCase()}).orFail("survey not found");
    const imageIds = servey.images;

    const images = await Image.find({_id: {$in: imageIds}});
    console.log(images);


    return res.json({servey, images});
  }catch(err){
    console.error("Hey look, Error!", err);
    return res.json(err);
  }
});

// Create new survey
router.post ("/", async (req,res,next) => {
  const data = req.body;
  try{
    // TODO : Add validation for data and check that images are valid
    const survey = new Survey({
      category : data.category.toLowerCase(),
      images : data.images,
      logo: data.logo
    })
    await survey.save();
    return res.json(survey);
  }catch(err){
    return res.json(err);
  }
});


//Delete new survey
router.delete("/:id", async (req, res, next) => {
  const {id} = req.params;
  if(id){
    const response = await Survey.findByIdAndDelete(id)
    return res.json(response)
  }

});

//Update new survey
router.patch("/:id", async (req, res, next) => {

  const {id} = req.params;
  if (!id) return res.status(400).json({ message: "No id provided" });
    var survey  = await Survey.findOne({ _id: id }).orFail("Survey not found"); 
    const images = req.body.images
    if(images){
      images.forEach(image => {
        survey.images.push(image)
      })
    }
    await survey.save();
    return res.json(survey);
});


module.exports = router;
