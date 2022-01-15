const contacts = require ('../database/schemas/contacts_sc');

const getContact = async () => {
    try{
        let contactsRes = await contacts.find().lean()
        
        if (contactsRes === null) throw "el contacto no existe"
        
        return contactsRes
    }catch(err){
        throw err
    }
}

const getContactId = async (id) => {
    try{
        let contactsRes = await contacts.findById(id).lean()
        
        if (contactsRes === null) throw "el contacto no existe"
        
        return contactsRes
    }catch(err){
        throw err
    }
}

const createContact = async (obj) => {
    try{
        const newContact= new contacts(obj)
        const  {_id} = await newContact.save()
        return _id
    }catch(err){
        throw err
    }
}

const deleteContact = async (id) => {
    try{
        let Contact = await contacts.deleteOne({_id: id})
        return Contact
    }catch(err){
        throw err
    }
}

const updateContacts = async (id, data) => {
    try{
        let Contact = await contacts.findOneAndUpdate({_id: id}, data)
        return Contact
    }catch(err){
        throw err
    }
}

const searchContact = async (data) => {
    try{
        let re = new RegExp(data, "i");
        let Contact = await contacts.find({ $or: [
            {name: re}, 
            {lastname: re},
            {position: re},
            {email: re},
            {company: re},
            {region: re},
            {country: re},
            {city: re},
            {address: re}
        ]});
        return Contact
    }catch(err){
        throw err
    }
}


module.exports = {
    getContact,
    getContactId,
    createContact,
    deleteContact,
    searchContact,
    updateContacts
}