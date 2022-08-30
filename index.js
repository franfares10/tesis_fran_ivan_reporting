const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Database
dbConnection();

// Express
const app = express();
// CORS & Environment
app.use(cors());

// Request's Body parsing
app.use(express.json({ limit: '50mb' }));


// Default GET method
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Dressy Reporting application',
    });
});


// Paths
app.use('/api/emociones/historico', require('./routes/historicoEmociones.routes'))
app.use('/api/emociones', require('./routes/historicoEmociones.routes'))
app.use('/api/prendas', require('./routes/historicoEmociones.routes'))
app.use('/api/centros', require('./routes/historicoEmociones.routes'))
app.use('/api/marcas', require('./routes/historicoEmociones.routes'))

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port ' + process.env.PORT);
});