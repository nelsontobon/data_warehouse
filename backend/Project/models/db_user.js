const users = require ('../database/schemas/user');

const findUser = async (obj) => {
    try{
        const user = await users.findOne(obj)
        return user
    }catch(err){
        throw err
    }
}

const createUser = async (obj) => {

    try{
        const newUser = new users(obj)
        const  {_id} = await newUser.save()
        return _id
    }catch(err){
        throw err
    }
}

module.exports = {
    findUser,
    createUser
}