const mongoose = require("mongoose");
const Chat = require("./models/chat");


main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
    from:"Neha",
    to:"Priya",
    msg:"Send me your ref ID",
    created_at:new Date() 
    },
    {
    from:"Basu",
    to:"Ajay",
    msg:"Gandu send me notes",
    created_at:new Date() 
    },
    {
    from:"harry",
    to:"Muli",
    msg:"Habibi send the docs",
    created_at:new Date() 
    },
    {
    from:"ajay",
    to:"harry",
    msg:"yavag barti le!",
    created_at:new Date() 
    },
    {
    from:"Basu",
    to:"Muli",
    msg:"Yav picture honti le",
    created_at:new Date() 
    },
    {
    from:"Muli",
    to:"myGirlfirnd",
    msg:"utta madi nina",
    created_at:new Date() 
    },
];

Chat.insertMany(allChats);
