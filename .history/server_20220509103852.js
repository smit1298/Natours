const app = require('./app');

console.log(rocess.env);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
