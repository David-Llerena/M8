require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jwtsecret = process.env.JWT_SECRET

app.use(express.json());
console.log('JWT Secret:', jwtsecret); // Verifica que la variable de entorno se haya cargado correctamente
console.log('Port:', port); // Verifica que la variable de entorno se haya cargado correctamente

app.get('/', (req, res) => {
  res.send('API backend funcionando');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});