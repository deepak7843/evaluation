const express= require("express") 

const app= express()



app.get("/books" , (req, res) => {
    console.log("books");

    return res.send({route: "/books"})
})


app.get("/libraries" , (req, res) => {
    console.log("libraries");

    return res.send({route: "/libraries"})
})

app.get("/authors" , (req, res) => {
    console.log("authors");
    
    return res.send({route: "/authors"})
})

function logger(req,res,next){
    console.log("before route handler");
    next()
}



app.listen(5500, () => {
    console.log("listen");
})