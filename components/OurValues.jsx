

"use client";

import { Box, Container, Typography, Paper, Stack } from "@mui/material";
import Image from "next/image";

const values = [
  {
    title: "VitalsChair™",
    image: "/hero-popup/chair.webp",
    description:
      "VitalsChair™, our comprehensive vitals gathering system, supporting 32+ critical health parameters.",
  },
  {
    title: "Remote Patient Monitoring System",
    image: "/values/remotemonitoring.png",
    description:
      "Next-generation remote monitoring integrating seamlessly with EMR, EHR, and HIS platforms.",
  },
  {
    title: "Universal Data Logger Solutions",
    image: "/values/datalogger.png",
    description:
      "Scalable data logging solutions supporting CAN, SPI, Ethernet, LIN, and FlexRay.",
  },
];

export default function OurValues() {
  return (
    <Box
      component="section"
      aria-labelledby="our-values-heading"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Stack
          spacing={2}
          sx={{
            mb: { xs: 5, md: 7 },
            maxWidth: 820,
            mx: "auto",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1B4DFF",
            }}
          >
            Our Values
          </Typography>

          <Typography
            id="our-values-heading"
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.5rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#0A0F1F",
              letterSpacing: -0.5,
            }}
          >
            Harnessing technology for a brighter future
          </Typography>

          <Typography
            sx={{
              color: "#5A6478",
              fontSize: { xs: 14.5, md: 15.5 },
              lineHeight: 1.8,
              maxWidth: 720,
            }}
          >
            At BluAI, we craft complex embedded systems by integrating hardware,
            user interfaces, and advanced software. Our expertise extends to
            connectivity and proximity technologies, ensuring your products are
            always connected and responsive.
          </Typography>
        </Stack>

       {/* Cards */}
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    },
    gap: { xs: 2.5, md: 3 },
  }}
>
  {values.map((item) => (
    <Paper
      key={item.title}
      component="article"
      elevation={0}
      sx={{
        position: "relative",
        height: 280,
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid #E8ECF5",
        cursor: "pointer",
        transition:
          "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.15)",
          borderColor: "#1B4DFF",
        },
        "&:hover img": {
          transform: "scale(1.08)",
        },
        "&:hover .card-content": {
          transform: "translateY(0)",
          opacity: 1,
        },
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,15,31,0.92) 0%, rgba(10,15,31,0.55) 45%, rgba(10,15,31,0.15) 75%, rgba(10,15,31,0) 100%)",
          transition: "background 0.35s ease",
        }}
      />

      {/* Content */}
      <Box
        className="card-content"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: { xs: 2.5, md: 3 },
          color: "#FFFFFF",
          transform: "translateY(8px)",
          opacity: 0.95,
          transition: "transform 0.4s ease, opacity 0.4s ease",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            fontSize: 18,
            lineHeight: 1.3,
            mb: 0.75,
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Paper>
  ))}
</Box>
      </Container>
    </Box>
  );
}