const express = require('express');
const app = express();
const port = 3000;

// Definisikan rute untuk endpoint
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Ini adalah data dari backend Express',
  };
  res.json(data);
});

// Jalankan server pada port tertentu
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
