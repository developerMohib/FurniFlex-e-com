const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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
  },
});

async function run() {
  try {
    // connect database and collection

    const database = client.db("FurniFlex");
    const productsCol = database.collection("products");
    const cartCollection = database.collection("cartsData");

    // all data get
    app.get("/products", async (req, res) => {
      try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = 6;
        const skip = (page - 1) * pageSize;

        const products = await productsCol.find()
        .skip(skip)
        .limit(pageSize)
        .toArray();
      

        res.send(products);
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "Failed to retrieve products",
          error: error.message,
        });
      }
    });

    // carts collection data
    app.get("/carts", async (req, res) => {
      const email = req?.query.email;
      const query = { email: email };
      const cursor = cartCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // PUT Route to Update Cart Item Quantity
    app.put("/carts/:id", async (req, res) => {
      const cartItemId = req.params.id;
      const updatedItem = req.body;

      try {
        const result = await cartCollection.updateOne(
          { _id: new mongodb.ObjectId(cartItemId) },
          { $set: { quantity: updatedItem.quantity } }
        );

        if (result.modifiedCount > 0) {
          res.send({ message: "Cart item updated successfully" });
        } else {
          res.status(404).send({ message: "Cart item not found" });
        }
      } catch (error) {
        res.status(500).send({ message: "Error updating cart item", error });
      }
    });

    // cart collection data post
    app.post("/carts", async (req, res) => {
      const cartItem = req.body;

      try {
        const result = await cartCollection.insertOne(cartItem);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Error adding cart item", error });
      }
    });

    // Route to get the total product count
    app.get("/productCount", async (req, res) => {
      try {
        const count = await productsCol.estimatedDocumentCount();
        res.send({ count });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "Failed to retrieve product count",
          error: error.message,
        });
      }
    });

    // delete from cart
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      try {
        const result = await cartCollection.deleteOne(query);

        if (result.deletedCount > 0) {
          res.send({ message: "Cart item deleted successfully" });
        } else {
          res.status(404).send({ message: "Cart item not found" });
        }
      } catch (error) {
        res.status(500).send({ message: "Error deleting cart item", error });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Furni Flex e-com web app server is running");
});

app.listen(port, () => {
  console.log(`Furni Flex web app listening on port ${port}`);
});
