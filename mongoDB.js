const mongodb=require("mongoose");


mongodb.connect("mongodb+srv://Tahiat0912:0912@tahiatcluster.oo3byt8.mongodb.net/AidAssistant")
.then(()=> {
    console.log("mongo connected");
})
.catch(()=> {
    console.log("mongo not connected");
})
