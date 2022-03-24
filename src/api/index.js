import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

var options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    "X-RapidAPI-Key": "dacbdfbfb9msh71ceb7d2c0a7659p1f3e60jsn325778255cc0",
  },
};

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "dacbdfbfb9msh71ceb7d2c0a7659p1f3e60jsn325778255cc0",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
