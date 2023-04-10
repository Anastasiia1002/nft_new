import React from "react";
import { useState, useEffect } from "react";
import { BoxNews, BoxBoard } from "./News.styled";
// import {TextField} from '@mui/material';
// import {getNews} from '../../apiNews/apiNews'
import { news } from "../../apiNews/news";
import { Grid , Collapse, Button, Box} from "@mui/material";
import NewsItem from "../NewsItem/NewsItem";

const News = () => {
  const [newNews, setNewNews]= useState(news)
  // useEffect(() => {
  //   news
  // },[news])
  const deleteNews =(id) => {
    
    setNewNews(newNews.filter(i=> i.id!==id )
     )
    console.log('work')
  }
  return (
    <>
      <BoxNews > 
      {/* <TextField id="outlined-basic" label="Search" fullWidth variant="outlined" onChange={()=>console.log('search===>')}/> */}
      <Grid container spacing={2}  display="flex" justifyContent="center">
        {newNews.map((item) => (
          // <Collapse key={item.id}>
          <NewsItem key={item.id} item={item} deleteNews={deleteNews}/>
        // </Collapse>
        ))}
      </Grid>
      <Box >    
       <Button sx={{loadingPosition:'center'}}>More</Button>
       </Box>
 
  </BoxNews> 
    </>
  );
};

export default News;
