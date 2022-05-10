const dotenv = require('dotenv')
const app = require('./app');

dotenv.config({path: './config.env'})
console.log(process.env);

const port = process.env.;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
