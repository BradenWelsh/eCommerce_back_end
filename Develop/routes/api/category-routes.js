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
  Category.create({
    categoryName: req.body.categoryName,
  }) .then((allData)=>res.json(allData))
  .catch((err) =>{
    res.status(500).json(err);
  });});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    categoryName: req.body.categoryName,
  },{
    where:{
      id: req.params.id,
    },})
  .then((allData) =>{
    if(!allData) {
      res.status(404).json({message: "No categories with the ID"});
      return;
    }
    res.json(allData);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where:{ id: req.params.id,},
  }) .then((allData) => {
    if(!allData) {
      res.status(404).json({message: "No category found with this ID"});
      return;
    } res.json(allData);
  }) .catch((err) =>{
      console.log(err);
      res.status(500).json(err);
  });});

module.exports = router;
