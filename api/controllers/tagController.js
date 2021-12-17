const mongoose = require('mongoose'),
    Tag = mongoose.model('Tag'),
    Tenant = mongoose.model('Tenant');


    // lits all tags to show
exports.list_all_tags = (req, res) => {
    Tag.find({}, (err, tag) => {
      if (err)
        res.send(err);
      res.json(tag);
    });
  };

  // create a tag
  exports.create_a_tag = (req, res) => {
    let new_tag = new Tag(req.body);
    new_tag.save((err, tag) => {
      if (err)
        res.send(err);
      res.json(tag);
    });
  };

  // get specific tag by id
  exports.get_a_tag = (req, res) => {
    Tag.findById(req.params.tagId, (err, tag) => {
      if (err)
        res.send(err);
      res.json(tag);
    });
  };

  // updates a tag with new information
  exports.update_a_tag = (req, res) => {
    Tag.findOneAndUpdate({_id: req.params.tagId}, req.body, {new: true}, (err, tag) => {
       if (err)
         res.send(err);
       res.json(tag);
     });
   };

   // remove a tag
   exports.delete_a_tag = (req, res) => {
    Tag.remove({
      _id: req.params.tagId
    }, (err, tag) => {
      if (err)
        res.send(err);
      res.json({ message: `Tag ${tag} has successfully been deleted` });
    });
  };


  
  



