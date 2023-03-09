const Cart = require('../models/Cart');


const index = async(req, res) => {
  try {
    const cart = await Cart.findAll();
    return res.status(200).json({cart});  
  }catch(err){
    return res.status.json({err});
  }
  
};
const show = async(req, res) => {
  const {id} = req.params;
  try {
    const cart = await Cart.findByPk(id);
    return res.status(200).json({cart});
  }catch(err){
    return res.status(500).json({err}) 
  }
};
const create = async(req, res) => {
  try {
    const newCart = {
      amount: req.body.amount,
      point:req.body.point,
      payment:req.body.payment,
    };
    const cart = await Cart.create(newCart);
    return res.status(201).json({message: "Cart created", cart});
    
  }catch(err){
    return res.status(500).json({error:err});
  }
};

const update = async(req, res) => {
  const {id} = req.params;
  try {
    const [updated] = await Cart.update(req.body, {where: {id: id}});
    if (updated){
      const cart = await Cart.findByPk(id); 
      return res.status(200).send(cart);
    }
    throw new Error();
  }catch(err){
    return res.status(500).json({error:err})
  }
};


const destroy = async(req, res) => {
  const {id} = req.params;
  try {
    const cart = await Cart.destroy({where: {id: id}});
    return res.status(200).json({message: "Cart delete", cart});
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
}