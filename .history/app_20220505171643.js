const express = require('express');

const app = express();


app.get('/api')
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'natours' });
// });

// app.post('/', (req, res) => {
//     res.send('you can post to this end point...')
// })

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
