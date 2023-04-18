import { Grid } from "@mui/material";
import Card  from "../src/components/Card";
import './App.css';
import NavBar from "./components/NavBar"
import i from "../src/images/Programmable Alarm Annunciators M3.png"
import s from "../src/images/Sequential Timer ST 15M2.png"

function App() {

  let state={
    name:"Programmable Alarm ",
    details:"C&R panels, Transformer panels, DG set panels, Fire annunciation panels, Instrumentation panels and many more"
  }

  let a={
    name:"Sequential Timers- S Series",
    details:"Bag Filter systems, Dust pollution systems, Air handling systems, MCC panels, Pneumatic Conveyors, Process Industries and many more."
  }
    
  return (
    <>
   <NavBar />
   <div className="cardCont">
    <Grid  container spacing={10}  alignItems="center"   justifyContent="center" >
      <Grid item> <Card name={state.name} details={state.details} image={i} /></Grid>
      <Grid item> <Card name={a.name} details={a.details} image={s} /></Grid>
  
      
   </Grid>
   </div>
   
   </>
  );
}

export default App;