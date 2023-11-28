const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Create this file

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
