import { Grid } from "@mui/material";
import Card  from "../src/components/Card";
import './App.css';
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
   <NavBar />
   <div className="cardCont">
    <Grid  container spacing={10}  alignItems="center"   justifyContent="center">
      <Grid item> <Card /></Grid>
      <Grid item> <Card /></Grid>
  
      <Grid item> <Card /></Grid>
   </Grid>
   </div>
   
   </>
  );
}

export default App;