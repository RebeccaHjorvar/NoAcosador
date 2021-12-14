const mongoose = require('mongoose'),
    Tenant = mongoose.model('Tag');


    // lits all tags to show
exports.list_all_tags = (req, res) => {
    Tenant.find({}, (err, tag) => {
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
    Tenant.findOneAndUpdate({_id: req.params.tagId}, req.body, {new: true}, (err, task) => {
       if (err)
         res.send(err);
       res.json(tag);
     });
   };

   // remove a tag
   exports.delete_a_tag = (req, res) => {
    Tenant.remove({
      _id: req.params.tagId
    }, (err, tag) => {
      if (err)
        res.send(err);
      res.json({ message: 'Tag successfully deleted' });
    });
  };