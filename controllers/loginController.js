const bcrypt = require("bcrypt");
const { User } = require('../models')

module.exports = {
    store: async (req, res) =>{
    try{
        const { email, password } = req.query;
        console.log(req.query.email)

        const usuario = await User.findOne({
            where:{email}
          })        
      
    
        if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
            
          return res.status(400).json({
            erro:true,
            msg: "Email ou senha errados!",
          });
        }        
        
        return res.status(201).json(usuario) 
    }catch(error){        
        return res.status(400).json(error)
    }
    }
}