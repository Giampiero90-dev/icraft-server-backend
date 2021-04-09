const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const creationRouter = require("./routers/creation");
const categoryRouter = require("./routers/category");

const app = express();

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());
if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/", authRouter);
app.use("/users", userRouter);
app.use("/creations", creationRouter);
app.use("/categories", categoryRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
