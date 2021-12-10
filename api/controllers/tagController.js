const mongoose = require('mongoose'),
    Tag = mongoose.model('Tag'),
    Tenant = mongoose.model('Tenant');

exports.list_all_tags = (req, res) => {
    Tag.find({}, (err, tag) => {
      if (err)
        res.send(err);
      res.json(tag);
    });
  };

  exports.create_a_tag = (req, res) => {
    let new_tag = new Tag(req.body);
    new_tag.save((err, tag) => {
      if (err)
        res.send(err);
      res.json(tag);
    });
  };

  exports.get_a_tag = (req, res) => {
    Tag.findById(req.params.tagId, (err, tag) => {
      if (err)
        res.send(err);
      res.json(tag);
    });
  };

  exports.update_a_tag = (req, res) => {
    Tag.findOneAndUpdate({_id: req.params.tagId}, req.body, {new: true}, (err, task) => {
       if (err)
         res.send(err);
       res.json(tag);
     });
   };

   exports.delete_a_tag = (req, res) => {
    Tag.remove({
      _id: req.params.tagId
    }, (err, tag) => {
      if (err)
        res.send(err);
      res.json({ message: 'Tag successfully deleted' });
    });
  };

exports.look_up_tag = (req, res) => 
  Tenant.aggregate([{
    $lookup: {
      from: "tags",
      localField: "tagNumber",
      foreignField: "firstName",
      as: "tag",
    }   
         
  }], function(err, data) {
    return res.json(data)
  })

  
  



