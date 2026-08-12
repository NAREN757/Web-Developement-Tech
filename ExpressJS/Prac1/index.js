const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

// app.use((req, res) => {
//     console.log("request received");
//     res.send({
//         fruit: "apple",
//         color: "red",
//     })
// });

// app.get("/", (req, res) => {
//     res.send("you contacted root path");
// })

// app.get("/Search:username", (req, res) => {
//     console.log(req.params)
//     res.send("you contacted search path");
// })

// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// })

app.get("/search",(req,res) => {
    console.log(req.query);
    res.send("No Results for Now");
})
