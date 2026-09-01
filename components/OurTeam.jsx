"use client";

import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Container,
  Paper,
  Avatar,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StepsExplain from "./popups/StepsExplain";

const AUTO_SLIDE_DELAY = 3000;

export default function OurTeamSlider({ team: partners }) {
  const [index, setIndex] = React.useState(0);
  const intervalRef = React.useRef(null);

  const startX = React.useRef(0);
  const isDragging = React.useRef(false);

  const total = partners.length;

  /* ---------------- AUTO SLIDE ---------------- */

  const startAutoSlide = () => {
    stopAutoSlide();

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_SLIDE_DELAY);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  React.useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  /* ---------------- NAVIGATION ---------------- */

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  /* ---------------- DRAG ---------------- */

  const handleMouseDown = (e) => {
    stopAutoSlide();
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;

    const diff = e.clientX - startX.current;

    if (diff > 50) prev();
    else if (diff < -50) next();

    isDragging.current = false;
    startAutoSlide();
  };

  /* ---------------- TOUCH ---------------- */

  const handleTouchStart = (e) => {
    stopAutoSlide();
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 50) prev();
    else if (diff < -50) next();

    startAutoSlide();
  };

  /* ---------------- POPUP ---------------- */

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* ---------------- UI ---------------- */

  return (
    <Box py={{ xs: 6, md: 6 }} mt={5} bgcolor="#fff">
      <Container maxWidth="lg">

        {/* HEADER */}
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 4, md: 6 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 2,
              py: 0.9,
              borderRadius: 99,
              bgcolor: "rgba(27,77,255,0.10)",
              border: "1px solid rgba(27,77,255,0.18)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1B4DFF",
              }}
            >
              Our Team
            </Typography>
          </Box>
        </Stack>

        {/* SLIDER */}
        <Box
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            position: "relative",
            overflow: "hidden",
            cursor: "grab",
            px: { xs: 1, md: 6 },
          }}
        >
          {/* TRACK */}
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.6s ease",
              transform: `translateX(-${index * 240}px)`,
              gap: 3,
              p:3
            }}
          >
            {[...partners, ...partners].map((item, i) => (
              <Paper
                key={i}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  flex: "0 0 220px",
                  textAlign: "center",
                }}
              >
                <Avatar
                  src={item.img}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                  }}
                />

                <Typography fontWeight={600}>
                  {item.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.role}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* ARROWS */}
          <IconButton
            onClick={prev}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#fff",
              boxShadow: 2,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={next}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#fff",
              boxShadow: 2,
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* DOTS */}
        <Stack direction="row" justifyContent="center" spacing={1} mt={4}>
          {partners.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                cursor: "pointer",
                bgcolor: i === index ? "#6c4cf1" : "#ddd",
                transition: "0.3s",
              }}
            />
          ))}
        </Stack>
      </Container>

      <StepsExplain
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </Box>
  );
}