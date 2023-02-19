import express from "express";
import dotenv from "dotenv";
import cors from "cors";

var app = express();
app.use(cors());
dotenv.config();

app.get("/get", async function (req, res, _) {
  const { startDate, endDate, location } = req.query;
  const query = `SELECT date, location, forecasted_sales_quantity FROM oneglass.forecasts WHERE date BETWEEN '${startDate}' and '${endDate}' and location = '${location}'`;
  try {
    const response = "Awsome you didi it"
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

app.listen(8000, function () {
  console.log("server is listening on port 8000!");
});