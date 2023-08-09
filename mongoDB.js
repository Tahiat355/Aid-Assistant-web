const mongodb=require("mongoose");


mongodb.connect("mongodb+srv://tahiatmahabub:tahiat12@cluster0.3igqwjk.mongodb.net/AidAssistant")
.then(()=> {
    console.log("mongo connected");
})
.catch(()=> {
    console.log("mongo not connected");
})
