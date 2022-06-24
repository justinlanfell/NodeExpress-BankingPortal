const fs = require("fs")
const path = require("path")
const express = require("express")
const {__} = require("ramda");
const {render} = require("ejs");
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "/public")))

app.get("/", () => {
    render({title: "Index"})
})

