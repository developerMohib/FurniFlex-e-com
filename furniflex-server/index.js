const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middle-wares
app.use(cors());
app.use(express.json());

// MongoDB 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ylmjbhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    // connect database and collection

    const database = client.db("FurniFlex");
    const productsCol = database.collection("products");

    // all data get
    app.get('/products', async (req,res)=>{
      try {
        const products = await productsCol.find().toArray();
        res.send(products)
        
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "Failed to retrieve products",
          error: error.message,
        });
      }
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Furni Flex e-com web app server is running')
})

app.listen(port, () => {
  console.log(`Furni Flex web app listening on port ${port}`)
})