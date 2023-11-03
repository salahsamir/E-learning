import { ArrowCircleLeft, ArrowCircleRight, Circle } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

function SliderItem({ img, height, width }) {
  return (
    <Box height={height} width={width}>
      <img src={img} alt="slider" width="100%" height="100%" />
    </Box>
  );
}
function Slider({
  items,
  height,
  width,
  itemWidth,
  autoPlay,
  showArrows,
  showIndicators,
  transitionTime,
  interval,
}) {
  const maxWidth = `${itemWidth * items.length}px`;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  function goLeft() {
    if (currentSlide === 0) {
      setCurrentSlide(items.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function goRight() {
    if (currentSlide === items.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  React.useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        goRight();
      }, interval || 5000);
      return () => clearInterval(intervalId);
    }
  }, [currentSlide]);
  return (
    <Box height={height} width={width} position="relative">
      {showArrows && (
        <>
          <IconButton
            onClick={goLeft}
            sx={{
              position: "absolute",
              left: "1em",
              top: "50%",
              transform: "translateY(-50%)",
              p: "0",
              zIndex: "2",
            }}
          >
            <ArrowCircleLeft
              sx={{
                height: "40px",
                width: "40px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "black",
                  top: "0",
                  left: "0",
                  borderRadius: "50%",
                },
                color: "white",
                " &:hover": { color: "#dedede" },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              right: "1em",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: "2",
              p: "0",
            }}
            onClick={goRight}
          >
            <ArrowCircleRight
              sx={{
                height: "40px",
                width: "40px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "black",
                  top: "0",
                  left: "0",
                  borderRadius: "50%",
                },
                color: "white",
                " &:hover": { color: "#dedede" },
              }}
            />
          </IconButton>
        </>
      )}
      {showIndicators && (
        <>
          <Box
            className="indicators"
            position="absolute"
            zIndex="2"
            left="50%"
            bottom="30px"
            display="flex"
            sx={{ transform: "translateX(-50%)" }}
          >
            {items.map((_, index) => (
              <IconButton
                size="small"
                sx={{ p: "3px" }}
                key={index}
                onClick={() => setCurrentSlide(index)}
              >
                <Circle
                  sx={{
                    height: "16px",
                    width: "16px",
                    color: `${index === currentSlide ? "#21a087" : "white"}`,
                    " &:hover": { color: "#dedede" },
                  }}
                />
              </IconButton>
            ))}
          </Box>
        </>
      )}

      <Box width="100%" height="100%" overflow="hidden" position="relative">
        <Box
          width="fit-content"
          display="flex"
          height="100%"
          position="absolute"
          left={`calc(${-currentSlide} * ${itemWidth})`}
          sx={{
            transition: `all ${transitionTime || "0.5s"} ease`,
            width: maxWidth,
          }}
        >
          {items.map((item, index) => (
            <SliderItem
              img={item.img}
              height={"100%"}
              width={itemWidth}
              key={index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Slider;
