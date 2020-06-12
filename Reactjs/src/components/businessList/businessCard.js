import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
function BusinessCard(props) {
  return <Grid item xs={3}>
    <Card>
      <CardContent >
        <CardMedia
          image={props.img}
          title="Contemplative Reptile"
          style={{ height: '12vw' }}
        />
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        {props.price && <Typography>
          {'price ' + props.price}
        </Typography>}
        <Typography>
          {'number of reviews ' + props.review}
        </Typography>
        <Typography>
          {'address ' + props.location.address1}
        </Typography>

      </CardContent>

    </Card>
  </Grid>;
}
export default BusinessCard; 