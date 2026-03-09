const express = require("express")

const app = express()

app.use(express.json())

// First API
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from EC2 API" })
})

app.get("/ayush", (req, res) => {
  res.json({ message: "Hello from EC2 API" })
})

app.get("/users", (req, res) => {
  res.json({
    users: ["Ayush", "Dev", "Cloud"]
  })
})

app.get("/products", (req, res) => {
  res.json({
    products: ["Laptop", "Phone", "Tablet"]
  })
});

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})