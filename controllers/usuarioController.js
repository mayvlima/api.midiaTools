const bcrypt = require("bcrypt");
const { User } = require('../models')
const {check, validationResult, body} = require('express-validator');

module.exports ={
    store: async (req, res) =>{
        try{
            const {cnpj, userGithub, email, password} = req.body
           
            const listaDeErrors = validationResult(req)

                if(listaDeErrors.isEmpty()){
                const hashPassword = bcrypt.hashSync(password, 10);
                const usuario = await User.create({
                    cnpj,
                    userGithub,          
                    email,
                    password: hashPassword,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })
                
                return res.status(201).json(usuario) 
                }else{
                return res.status(400).json(listaDeErrors)
                }           
        }catch(error){
            if(error.name === "SequelizeUniqueConstraintError"){            
            return res 
            .status(400)
            .json({
                erro: true,
                msg: "Email já cadastrado!"
            })
        }
        }
    }
}