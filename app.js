const express = require("express");
const app = express();
const path = require("path")

app.listen(3000, function(){
    return console.log("El servidor está levantado");
})


app.use(express.static("public"));

app.get("/", function (req, res){
    res.send("Esto es /");
})

app.get("/index", function(req, res){

    return res.sendFile(path.join(__dirname, "./views/index.html"))
})