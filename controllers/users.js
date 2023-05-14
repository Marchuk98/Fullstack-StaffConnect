const {prisma} = require("../prisma/prisma-client");
const bryc = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async (req, res, next) => {
    res.send('login')

    if(!email && password){
        return res.status(400).json({message:'Пожалуйста, заполните обязательное поля'})
    }
    const user = await prisma.user.findFirst({
        where:{
            email,
        }
    })
    const isPasswordCorrect = user && (await bryc.compare(password, user.password))

    if(user && isPasswordCorrect){
        res.status(200).json({
            id:user.id,
            email:user.email,
            name:user.name,
        })
    }else {
        return res.status(400).json({message:"Не верно введён логин или пароль"})
    }
}


const register = async (req, res, next) => {
    res.send('register')
}
const current = async (req, res, next) => {
    res.send('current')
}


module.exports ={
    login,
    register,
    current
}