const app = require('./app');

console.log(process);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
