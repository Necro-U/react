import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@material-ui/core';


const Items = ({id,name,price,link}) => {

  

  return (
    <Card className='col-sm' key={id}  sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {price}
        </Typography>
        <Typography>
          <a style={{"textDecoration":"none"}} href={link}>
          <Button> Buy Now! </Button>
          </a>
        </Typography>
        
      
      </CardContent>
      
    </Card>
  )
}

export default Items