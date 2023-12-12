const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config/config.env" });
const connectDb = require("./config/db");
connectDb();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use("/schools", require("./routes/schoolsRoutes"));
app.use("/buses", require("./routes/busesRoutes"));
app.use("/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
