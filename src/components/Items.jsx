import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

const Items = ({id,name,price,link}) => {

  

  return (
    <Card className='col-sm' key={id}  sx={{ minWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image="image.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://www.instagram.com"><Button size="small">Share</Button></a>
        <a href={link}><Button size="small">Learn More</Button></a>
      </CardActions>
 

    </Card>
    
  )
}

export default Items