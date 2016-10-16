const router = require('express').Router();
const Tale = require('../db/Tale');

router.route('/')
  .get((req, res) => {
    Tale.find({})
      .then(tales => res.send(tales))
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    const taleToSave = new Tale(req.body);
    console.log(taleToSave)
    taleToSave.save()
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err.toString()));
  });

router.route('/:taleId')
  .get((req, res) => {
    Tale.findById(req.params.taleId)
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Tale.findByIdAndUpdate(req.params.taleId, req.body, { new: true })
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Tale.findByIdAndRemove(req.params.taleId)
      .then(tale => res.send(tale))
      .catch(err => res.status(400).send(err));
  });

module.exports = router;