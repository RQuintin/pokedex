const express = require("express")
const app = express()

app.use(express.static("build"))

app.get("/", (req, res) => {
  // res.status(200).json({ message: "App is working!" })
  res.send("lol")
})

app.listen(3001, () => console.log("Server running on port 3001."))
