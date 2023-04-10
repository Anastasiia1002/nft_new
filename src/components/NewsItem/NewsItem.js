import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const NewsItem = ({item, deleteNews}) => {
  const { title, body, id } = item;

  
  return (
    <Grid item  display="flex" justifyContent="center">
      <Card sx={{ maxWidth: 345, maxHeight: 400,backdropFilter: 'blur(20px)',  backgroundColor: 'rgba(0,0,0,.6)' }}  >
        <CardMedia
          sx={{ height: 140 }}
          image={`https://picsum.photos/400/140?random=${id}`}
          title="random"
        />

        <CardContent>
          <Typography gutterBottom  sx={{ maxHeight: 30,overflow: 'hidden' , color:'white' }} variant="h6" component="div">
            {title}
          </Typography>
          <Typography sx={{ height: 100,  overflow: 'auto', color:'white' }} variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>deleteNews(id)} size="small">Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsItem;
