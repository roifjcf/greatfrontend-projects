const axios = require("axios");

export const getLatestArrivals = async () => {
  const url = "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest";
  try {
    const res = await axios.get(url);
    return res.data;
  } catch(err) {
    console.log(err);
  }

}

// getLatestArrivals().then(data=>console.log(data));