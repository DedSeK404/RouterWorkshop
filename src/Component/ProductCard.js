import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ProductCard({produit}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={produit.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {produit.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {produit.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
      <Link to={`/details/${produit.id}`}>
        <Button size="small">See Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
