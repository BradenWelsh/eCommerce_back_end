const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ["productName"]
    },})
    .then((allData) => res.json(allData))
    .catch((err) => {
      res.status(500).json(err);
    });});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.fineOne({
    where:{
      id: req.params.id,
    }, include: {
      model: Product,
      attributes: [categoryID]
    },})
    .then((allData) => res.json(allData))
    .catch((err) => {
      res.status(500).json(err);
    });});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
