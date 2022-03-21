var express = require('express');
var router = express.Router();
var Answer = require("../db/models/answer");

/* GET survey listing. */
router.get('/',async (req, res, next)  => {
  try {
    Answer.find({} , (err,result) => {
        if (err)  return res.json(err); 
        else return res.json(result);
    });
  }catch(err){
    console.error("Hey look, Error!", err);
  }
  
});

// Get by id 
router.get('/:id', async (req, res, next) => {
  try {
    const answer = await Answer.findOne({ _id: req.params.id }).orFail("answer not found");
    return res.json(answer);
  } catch (err) {
    console.error("Hey look, Error!", err);
    return res.json(err);
  }

});

// Get by date 
router.get('/:date', async (req, res, next) => {
  try {
    const answer = await Answer.findOne({ date: Answer.parse(req.body.date) }).orFail("answer not found");
    return res.json(answer);
  } catch (err) {
    console.error("Hey look, Error!", err);
    return res.json(err);
  }

});

// Post answer
router.post("/", async (req, res, next) => {
  const data = req.body;
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  console.log(data)
  try {
    // TODO : Add validation for data and check that images are valid
    const answer = new Answer({
      _id: data._id,
      tag: data.tag,
      url: data.url,
      asso: data.asso,
      isSelected: data.isSelected,
      date: year + "/" + month + "/" + day
    })
    await answer.save();
    return res.json(answer);
  } catch (err) {
    return res.json(err);
  }
});


//Delete new survey
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    const answer = await Answer.findByIdAndDelete(id)
    return res.json(answer)
  }

});

//Update new survey
router.patch("/:id", async (req, res, next) => {

  const { id } = req.params;
  Answer.findOneAndUpdate({ _id: id }, req.body, (err, answer) => {
    if (err) return res.json(err);
    return res.json(answer);
  });
});

module.exports = router;