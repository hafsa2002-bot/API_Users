const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.get("/users", async (req, res) => {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.send(response.data)
    } catch (error) {
        console.log("ERROR: ", error)
        res.status(500).send("Internal Server Error")
    }
    
    
})

app.listen(port, () => console.log(`server running at : http://localhost:${port}`))