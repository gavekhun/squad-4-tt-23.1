const Evaluate = require("../models/Evaluate");

const index = async (req, res) => {
  try {
    const evaluate = await Evaluate.findAll();
    return res.status(200).json({ evaluate });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const evaluate = await Evaluate.findByPk(id);
    return res.status(200).json({ evaluate });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const create = async (req, res) => {
  try {
    const newContent = {
      content: req.body.content,
    };
    const evaluate = await Evaluate.create(newContent);
    return res.status(201).json({ message: "Posted content", evaluate });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

// O Usuário não vai poder atualizar o comentário

// const update = async (req, res) => {
//     const {id} = req.params;
//     try {
        
//     } catch (err) {
        
//     }
// };


const destroy = async (req, res) => {
    const {id} =req.params;
    try {
        const evaluate = await Evaluate.destroy({where: {id: id}});
        return res.status(200).json({message: "Deleted content", evaluate});

    } catch (err) {
        return res.status(500).json({err});
    }
};

module.exports = {
    index,
    show,
    create,
    destroy,
    //update
};