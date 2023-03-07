const User = require('../models/User');


const index = async(req, res) =>{
    try {
    const user = await User.findAll();
    return res.status(200).json({user});
  }catch(err){
    return res.status(500).json({err});
  }
};

const show = async(req, res) => {
  const {id} = req.params;
  try {
    const user = await User.findByPk(id);
    return res.status(200).json({user});
  }catch(err){
    return res.status(500).json({err});
  }
};

const create = async(req, res) => {
 try {
    const user = await User.create(req.body);
    return res.status(201).json({message:"User created", User: user});
  } catch(err){
    return res.status(500).json({error:err})
  }
};

const update = async(req, res) => {
  const {id} = req.params;
  try {
    const user = await User.update({where: {id: id}});
    return res.status(200).json({user});
  }catch(err){
    return res.status(500).json({err});
  }
};


const destroy = async(req, res) => {
  const {id} = req.params;
  try {
    const user = await User.destroy({where: {id: id}});
    return res.status(200).json({user});
  }catch(err){
    return res.status(500).json({err});
  }
};


module.exports = {
  index, 
  show,
  create,
  update,
  destroy
};
