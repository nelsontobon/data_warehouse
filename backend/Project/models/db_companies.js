const companies = require ('../database/schemas/companies_sc');

const getCompany = async () => {
    try{
        let Companies = await companies.find().lean()
        
        if (Companies === null) throw "La compañia no existe"
        
        return Companies
    }catch(err){
        throw err
    }
}

const createCompany = async (obj) => {
    try{
        const newCompany= new companies(obj)
        const  {_id} = await newCompany.save()
        return _id
    }catch(err){
        throw err
    }
}

const deleteCompany = async (nomCompany) => {
    try{
        let Company = await companies.deleteOne({"name": nomCompany})
        return Company
    }catch(err){
        throw err
    }
}

const updateCompany = async (id, data) => {
    try{
        let Company = await companies.findOneAndUpdate({_id: id}, data)
        return Company
    }catch(err){
        throw err
    }
}

module.exports = {
    getCompany,
    createCompany,
    deleteCompany,
    updateCompany
}