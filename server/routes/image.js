var express = require('express');
var router = express.Router();
var Image = require ("../db/models/image");

/* GET survey listing. */
router.get('/',async (req, res, next)  => {
  try {
    Image.find({} , (err,result) => {
        if (err)  return res.json(err); 
        else return res.json(result);
    });
  }catch(err){
    console.error("Hey look, Error!", err);
  }
});

// Get by id 
router.get('/:id',async (req, res, next)  => {
    try {
        const image = await Image.findOne( { _id: req.params.id } ).orFail("Image not found");
        return res.json(image);
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
      const image = new Image({
        url : data.url,
        tag : data.tag,
        asso: data.asso
      })
      await image.save();
      return res.json(image);
    }catch(err){
      return res.json(err);
    }
  });


//Delete new survey
router.delete("/:id", async (req, res, next) => {
  const {id} = req.params;
  if(id){
    const response = await Image.findByIdAndDelete(id)
    return res.json(response)
  }

});

//Update new survey
router.patch("/:id", async (req, res, next) => {

  const {id} = req.params;
    Image.findOneAndUpdate({ _id: id }, req.body , (err, image) => {
    if(err) return res.json(err);
    return res.json(image);
  });
});

module.exports = router;
