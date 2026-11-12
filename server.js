const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Importar rotas
const usuarioRoutes = require('./src/routes/usuario.routes');
const ocorrenciaRoutes = require('./src/routes/ocorrencia.routes');

app.use('/usuario', usuarioRoutes);
app.use('/ocorrencia', ocorrenciaRoutes);

app.listen(3000, () => {
    console.log('Servidor online!');
});
