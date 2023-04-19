import { Grid, Typography } from "@mui/material";
import Card  from "../src/components/Card";
import './App.css';
import NavBar from "./components/NavBar"
import content from "./Content";
import Box from "@mui/material/Box";
import Details from "./components/Details"
function App() {
  return (
    <>
   <NavBar />
   <Box sx={{bgcolor:"white",height:100,width:1}} position="absolute">
    <Typography color="black" fontFamily="arial"  sx={{fontSize:{xs:20,lg:30}}} align="inherit" >INVENTORY</Typography>
   </Box>
   <section>
    
    <section><div className="cardCont">
    <Grid  container spacing={2}  alignItems="center"   justifyContent="center" sx={{mt:{lg:15,xs:15}}} position="static" >
     {content.map(index=>(
      <Grid item><Card name={index.name} details={index.details} image={index.image} link={index.link} /></Grid>
     ))}
   </Grid>
   </div></section>
   </section>
   
   
   </>
  );
}

export default App;