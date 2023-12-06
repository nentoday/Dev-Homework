import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = 3000;

app.use(express.json());

// Create a new product
app.post('/products', async (req, res) => {
  try {
    const { name, category, amount, price } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, category, amount, price },
    });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a product by ID
app.put('/products/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const { name, category, amount, price } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { name, category, amount, price },
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a product by ID
app.delete('/products/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    await prisma.product.delete({
      where: { id: productId },
    });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Clean up resources when the server is closed
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  server.close();
  process.exit();
});
