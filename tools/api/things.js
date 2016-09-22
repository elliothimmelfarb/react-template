const router = require('express').Router();
const Thing = require('../db/thing');

router.route('/')
  .get((req, res) => {
    Thing.getAll({})
      .then(res.send)
      .catch(err => res.status(400).send(err));
  })
  .post((req, res) => {
    const thing = new Thing(req.body.thing);
    thing.save()
      .then(res.send)
      .catch(err => res.status(400).send(err));
  });

router.route('/:thingId')
  .get((req, res) => {
    Thing.getOne(req.params.thingId)
      .then(res.send)
      .catch(err => res.status(400).send(err));
  })
  .put((req, res) => {
    Thing.findByIdAndUpdate(req.params.thingId, req.body, { new: true })
      .then(res.send)
      .catch(err => res.status(400).send(err));
  })
  .delete((req, res) => {
    Thing.findByIdAndRemove(req.params.thingId)
      .then(res.send)
      .catch(err => res.status(400).send(err));
  });

module.exports = router;
