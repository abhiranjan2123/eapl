import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link"
import File from './File';

export default function MediaCard(props)


{


  return (
    <Card sx={{ maxWidth:345,minWidth:345,maxHeight:740,minHeight:400,mt:{xs:3,md:5,lg:3} }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
     />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.details}
        </Typography>
       
      </CardContent>
      <CardActions>
       <Link href={props.link} target="#"> <Button size="small">buy</Button></Link>
     
      </CardActions>
     
        <File name="features"/>
        <File name="specifications" />
    </Card>
  );
}
