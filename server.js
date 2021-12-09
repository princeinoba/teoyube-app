const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001
// const PORT_TWO = process.env.PORT || 5000
const app = express()
const apiRoutes = require('./routes/apiRoutes')
// const apiRoutes = require('./routes/api-routes.js')
// const { fileURLToPath } = require('url')
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define middleware here
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://PrinceInoba:Teoyube1984@cluster0.zoy1j.mongodb.net/teoyubePromises?retryWrites=true&w=majority',
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
)

// Use apiRoutes
app.use('/api', apiRoutes)

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})

// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://localhost/top5db", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     app.listen(PORT_TWO, () => {
//       console.log(`App listening at: localhost:${PORT_TWO}`);
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   });
