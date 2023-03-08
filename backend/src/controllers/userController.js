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
    const newUser = {   
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      cpf: req.body.cpf,
      address:req.body.address,
    };
    const user = await User.create(newUser);
    return res.status(201).json({message:"User created", user});
  } catch(err){
    return res.status(500).json({error:err})
  }
};

const update = async(req, res) => {
  const {id} = req.params;
  try {
    const [updated] = await User.update(req.body, {where: {id: id}});
    if (updated){
      const user = await User.findByPk(id); 
      return res.status(200).send(user);
    }
    throw new Error();
    
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
