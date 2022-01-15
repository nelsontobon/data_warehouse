const region = require ('../database/schemas/regions_sc');

const getRegion = async () => {
    try{
        let Region = await region.find().lean()
        
        if (Region === null) throw "La region no existe"
        
        return Region
    }catch(err){
        throw err
    }
}

const createRegion = async (obj) => {
    try{
        const newRegion = new region(obj)
        const  {_id} = await newRegion.save()
        return _id
    }catch(err){
        throw err
    }
}

const deleteRegion = async (nomRegion) => {
    try{
        let Region = await region.deleteOne({"region": nomRegion})
        return Region
    }catch(err){
        throw err
    }
}

const createCountry = async (nomRegion, obj) => {
    try{
        let Region = await region.findOne({region: nomRegion})
        
        if (Region === null) throw "La region no existe"
        
        if (Region.country){
            const country = Object.keys(obj)
            const key_country = `country.${country[0]}`
            const objeto = new Object()
            objeto[key_country] = {}
            Region = await region.findOneAndUpdate({region: nomRegion}, {$set : objeto} )

        }else{
            Region.country = obj
            await Region.save()
        }

        return Region
    }catch(err){
        throw err
    }
}

const deleteCountry = async (nomRegion, obj) => {
    try{
        let Region = await region.findOne({region: nomRegion})
        
        if (Region === null) throw "La region no existe"
        
        if (Region.country){
            const country = Object.keys(obj)
            const key_country = `country.${country[0]}`
            const objeto = new Object()
            objeto[key_country] = {}
            console.log(objeto)
            Region = await region.findOneAndUpdate({region: nomRegion}, {$unset : objeto })

        }else{
            Region.country = obj
            await Region.save()
        }

        return Region
    }catch(err){
        throw err
    }
}

const createCity = async (nomRegion, obj) => {
    try{
        let Region = await region.findOne({region: nomRegion})
        
        if (Region === null) throw "La region no existe"
        
        if (Region.country){
            const country = Object.keys(obj)
            const city = Object.keys(obj[country])
            const key_country = `country.${country[0]}.${city}`
            const objeto = new Object()
            objeto[key_country] = obj[country[0]][city]

            Region = await region.findOneAndUpdate({region: nomRegion}, {$set : objeto} )

        }else{
            Region.country = obj
            await Region.save()
        }

        return Region
    }catch(err){
        throw err
    }
}

const deleteCity = async (nomRegion, obj) => {
    try{
        let Region = await region.findOne({region: nomRegion})
        
        if (Region === null) throw "La region no existe"
        
        if (Region.country){
            const country = Object.keys(obj)
            const city = Object.keys(obj[country])
            const key_country = `country.${country[0]}.${city}`
            const objeto = new Object()
            objeto[key_country] = obj[country[0]][city]

            Region = await region.findOneAndUpdate({region: nomRegion}, {$unset : objeto} )

        }else{
            Region.country = obj
            await Region.save()
        }

        return Region
    }catch(err){
        throw err
    }
}


module.exports = {
    getRegion,
    createRegion,
    createCountry,
    createCity,
    deleteRegion,
    deleteCountry,
    deleteCity
}