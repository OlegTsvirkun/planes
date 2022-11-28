const { response } = require('express');
const Plane = require('../models/plane');
const PORT = process.env.PORT

const getPlanes = async (req, res) => {
    try {
        const planes = await Plane.find();
        res.status(200).json(planes)
    } catch (error) {
        res.status(500).json({ message: "No planes in DB , please try again" })
    }
}

const getPlane = async (req,res)=>{
    try {
        const plane = await Plane.find({_id: req.params.id})
        res.status(200).json(plane)
    } catch (error) {
        res.status(400).json({ message: "No plane in DB , please try again" })
    }
}
const createPlane = async (req, res) => {
    const errors = {}
    if(!req.body.name)errors.name = {message: 'Required field "name": no data '}
    if(!req.body.price)errors.price = {message: 'Required field "price": no data '}
    if(!req.body.description)errors.description = {message: 'Required field "description": no data '}
    if(!req.body.capacity)errors.capacity = {message: 'Required field "capacity": no data '}
    if(!req.file)errors.planeImage = {message: 'Required field "file": please add an image '} 
  if(Object.keys(errors).length>0 ){
      
    return res.status(400).json(errors)
   }
  try {
        const { name, price, description, capacity } = req.body;
    
        const plane = await Plane.create({ name, price, description, capacity, planeImage: `http://localhost:${PORT}/static/${req.file.filename}` }); 
        res.status(201).json(plane)
    } catch (error) {

        res.status(500).json({
            message: "Can't create a plane, please try again",
            error: error
        })
    }
}
module.exports = {
    getPlanes,
    createPlane,
    getPlane
}