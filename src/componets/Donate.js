import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Donate() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="Ukraine 🇺🇦"
        height="30"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Support for Ukraine 🇺🇦 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I am standing with the Ukrainian people against the Russian invasion.
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Find out how you can help.</Button> */}
        <Button variant="contained" href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthlyhools.com/">Find out how you can help.</Button>
      </CardActions>
    </Card>
  );
}