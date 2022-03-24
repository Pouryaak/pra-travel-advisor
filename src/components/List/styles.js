import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "71vh",
    overflow: "auto",
  },
}));
