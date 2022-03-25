import React, { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [placesData, setPlacesData] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    console.log(coordinates, bounds);
    getPlacesData(bounds.sw, bounds.ne).then((res) => {
      console.log(res);
      setPlacesData(res);
      setLoading(false);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={placesData}
            childClicked={childClicked}
            isLoading={loading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={placesData}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
