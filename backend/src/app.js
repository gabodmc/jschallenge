const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

const transactionsRouter = require("./routes/transactionsRouter");
const userRoutes = require("./routes/userRoutes");

app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", transactionsRouter);
app.use("/users/", userRoutes);
app.use("/api/movements", transactionsRouter);
app.use((req, res, next) => {
  res.status(404).render("404");
});
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
