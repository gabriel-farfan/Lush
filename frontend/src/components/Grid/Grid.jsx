import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./grid.css";
import { Typography } from "@mui/material";

export default function StandardImageList() {
  return (
    <>
      <div className="container">
        <ImageList
          sx={{
            width: 1200,
            // height: 550,
            gap: 5,
            margin: 2,
            display: "grid",
          }}
          cols={3}
          rowHeight={250}
        >
          {itemData.map((item, index) => (
            <ImageListItem
              key={item.img + index}
              sx={{ overflow: "hidden", borderRadius: 1 }}
            >
              <img
                style={{
                  objectFit: "cover",
                }}
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      
    </>
  );
}

const itemData = [
  {
    img: "http://localhost:4000/assets/plant-decor12.jpeg",
    title: "Breakfast",
  },
  {
    img: "http://localhost:4000/assets/plant.decoM14.webp",
    title: "Burger",
  },
  {
    img: "http://localhost:4000/assets/plant.decoM13.jpeg",
    title: "Camera",
  },
  {
    img: "http://localhost:4000/assets/plant_deco2.png",
    title: "Coffee",
  },
  {
    img: "http://localhost:4000/assets/plant-decor03.jpg",
    title: "Hats",
  },
  {
    img: "http://localhost:4000/assets/deco03.jpeg",
    title: "Honey",
  },
  {
    img: "http://localhost:4000/assets/plant-decor08.jpeg",
    title: "Basketball",
  },
  {
    img: "http://localhost:4000/assets/plant-decor06.jpeg",
    title: "Fern",
  },
  {
    img: "http://localhost:4000/assets/plant-decor12.jpeg",
    title: "Mushrooms",
  },
  {
    img: "http://localhost:4000/assets/plant_deco9.webp",
    title: "Mushrooms",
  },
  {
    img: "http://localhost:4000/assets/plant-decor07.jpeg",
    title: "Mushrooms",
  },
  {
    img: "http://localhost:4000/assets/plant-decor04.jpeg",
    title: "Mushrooms",
  },
];
