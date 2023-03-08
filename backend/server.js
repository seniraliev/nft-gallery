const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.get("/api/test/", (req, res) => {
  res.status(200).json("Ok");
});

app.get("/api/nft/owned/:address", async (req, res) => {
  const address = req.params.address;
  const apiKey = process.env.MORALIS_API_KEY;
  try {
    const ownedNfts = await axios.get(
      `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      }
    );
    return res.status(200).json(ownedNfts.data.result);
  } catch (error) {
    console.log(error);
    return res.status(error.response.status).json(error.response.data.message);
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log("Error occured", error);
  }
});
