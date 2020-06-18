const { Newsletter } = require('../models')

module.exports ={
    store: async (req, res) =>{
        try{
            const {email} = req.body     
                         
                const cadastro = await Newsletter.create({
                    email,
                    createdAt: new Date(),
                    updatedAt: new Date()
                })                
                return res.status(201).json(cadastro)                    
        }catch(error){
            return res.status(400).json(error)
        }
    }
}