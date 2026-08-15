const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

app.set("view engine");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id:uuidv4(),
        username: "Naren",
        content: "RDR-2 is one of the greatest game of all time !"
    },
     {
        id:uuidv4(),
        username: "Charlie Reed",
        content: "Had a fun evening watching a movie with friends."
    },
     {
        id:uuidv4(),
        username: "Ethan Parker",
        content: "Visited a nearby place and took some photos."
    },
     {
        id:uuidv4(),
        username: "Henry Collins",
        content: "Played a board game with family and had a great time."
    }
];



app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res) => {
    let{id} = req.params;
    console.log(id);
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);;
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res) => {
    let{id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res) => {
    let{id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(port,() => {
    console.log(`listening to port : ${port}`);
});