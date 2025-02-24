require(`dotenv`).config();

const express = require(`express`);
const mongoose = require(`mongoose`);
const workoutsRouter = require(`./routes/workouts`);

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(`/api/workouts`, workoutsRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to database and running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.error(error));

