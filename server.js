const express = require("express");
const mongoose = require("mongoose")
const Form = require("./models/form")
const app = express()

app.use(express.static("public"))
app.use(express.json({ limit: "1mb"}))

app.listen(3000, async () =>{
    await database()
    console.log('listening at 3000')
   })



const database = async () => {
    const dbURI = "mongodb://127.0.0.1:27017/form"// this references the database not the connection
    console.log("connected to db")
    return await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
}

//this sends the data to the database

app.post('/api', async (request, response) => {
    console.log(request.body)
    const form = new Form(request.body)
     form.save()
    response.json({
        status: "success",
        data: request.body
    })
})


//this is to check if the user is in the database by collection info from the log in 
// input and data from the database and then compares the two with each other

app.post('/user', async (request, response) => {
    const database = await Form.find()
    const check_username = request.body.username
    const check_password = request.body.password
    let database_firstname
    let database_lastname
    let is_user = false
    for(let i = 0; i < database.length; i++){
        if(check_username == database[i].username){
            if(check_password == database[i].password){
                database_firstname = database[i].firstname
                database_lastname = database[i].lastname
                is_user = true
            } 
        } 
    }
    response.json({ 
        status: is_user,
        firstname: database_firstname,
        lastname: database_lastname,
    })
    
})

app.post("/username", async (request, response) => {
    const user = request.body.username
    const database = await Form.find();
    let exists = false
    for(data of database){
        if(user == data.username) exists = true
    }
    response.json({
        exists: exists
    })

})
//https://kb.objectrocket.com/mongo-db/fetching-data-from-mongodb-using-get-in-mongoose-1020
//https://zellwk.com/blog/local-mongodb/