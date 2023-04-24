import React from 'react'
import { Grid, Stack, Typography,Container } from "@mui/material";
import Card  from "./Card";
import NavBar from "./NavBar"
import content from "../Content";


function HomePage() {
  return (
    <>
   <NavBar />
  
  <Stack sx={{background:"grey",height:100,justifyContent:"center"}} >
    <Container>
    <Typography  sx={{fontFamily:"timesnewroman",fontSize:45}}>PRODUCTS</Typography>
    </Container>


  </Stack>
   
   <section>
    
    <section><div className="cardCont">
        
      
    <Grid  container spacing={2}  alignItems="center"   justifyContent="center" sx={{mt:{lg:6,xs:6}}} position="static" >
   
     {content.map(index=>(
      <Grid item mx={12}><Card name={index.name} details={index.details} image={index.image} link={index.link} />
  
      
      </Grid>
     ))}
   
   </Grid>  
   </div></section>

 
   </section>
   
   
   </>
  )
}

export default HomePage