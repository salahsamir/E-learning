import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Box, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRightRounded,
} from "@mui/icons-material";

const ItemImg = styled("img")(({ theme, height }) => ({
  height: height,
  width: "100%",
  objectFit: "cover",
}));
function NewsCarousel({ items, height }) {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setSlideIndex(next),
  };
  const slider = useRef(null);
  return (
    <Box
      position="relative"
      borderRadius="8px"
      overflow="hidden"
      height={height || "100%"}
    >
      <Slider {...settings} autoplay={true} dots={false} ref={slider}>
        {items.map((item) => (
          <Box
            height={height || "100%"}
            width={"100%"}
            overflow="hidden"
            position={"relative"}
            key={item.title}
          >
            <Box
              sx={{
                position: "relative",
                height: height || "100%",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  display: "block",
                  height: height || "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  background:
                    "linear-gradient(rgba(22, 28, 36, 0) 0%, rgb(22, 28, 36) 75%)",
                },
              }}
            >
              <ItemImg src={item.img} alt={item.title} height={height} />
            </Box>
            <Box
              position="absolute"
              zIndex={2}
              width={"100%"}
              p="1em"
              left="0"
              bottom="0"
              color="white"
            >
              <Typography
                variant="h5"
                component="p"
                noWrap
                mb="0.5em"
                fontSize="1.5em"
                fontWeight="600"
              >
                {item.title}
              </Typography>
              <Typography noWrap variant="body2" mb="1em">
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          position: "absolute",
          right: "1em",
          top: "1em",
          zIndex: 3,
          height: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => slider.current?.slickPrev()} sx={{ p: 0 }}>
          <ChevronLeft sx={{ color: "grey.300" }} />
        </IconButton>
        <IconButton onClick={() => slider.current?.slickNext()} sx={{ p: 0 }}>
          <ChevronRight sx={{ color: "grey.300" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "1em",
          top: "1em",
          height: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {items.map((_, index) => (
          <Box
            key={index}
            onClick={() => slider.current?.slickGoTo(index)}
            sx={{
              height: "0.5em",
              width: "0.5em",
              borderRadius: "50%",
              backgroundColor: slideIndex === index ? "#1BB385" : "grey.300",
              display: "inline-block",
              margin: "2px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1BB385",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default NewsCarousel;
