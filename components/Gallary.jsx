
"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Chip,
  Modal,
  IconButton,
  Card,
  CardContent,
  Stack,
  useMediaQuery,
} from "@mui/material";

import Image from "next/image";

// Icons (MUI v7 SAFE)
import { useMemo } from "react";
import { getTheme } from "../theme";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DescriptionIcon from "@mui/icons-material/Description";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

/* --------------------------- DATA --------------------------- */

const galleryItems = [
  { id: 1, type: "images", title: "PCB Board", src: "/gallery/img1.jpg" },
  { id: 2, type: "images", title: "Embedded System", src: "/gallery/img2.jpg" },
  { id: 3, type: "images", title: "IoT Module", src: "/gallery/img3.jpg" },
  { id: 4, type: "images", title: "VitalsChair™", src: "/gallery/img4.jpg" },
  { id: 5, type: "images", title: "Document", src: "/gallery/img5.jpg" },
  // { id: 6, type: "images", title: "IoT Module", src: "/gallery/img6.jpg" },
  // { id: 7, type: "images", title: "IoT Module", src: "/gallery/img7.jpg" },
  // { id: 8, type: "images", title: "PCB Board", src: "/gallery/img8.jpg" },
  // { id: 9, type: "images", title: "Embedded System", src: "/gallery/img9.jpg" },
  // { id: 10, type: "images", title: "Embedded System", src: "/gallery/img10.jpg" },
  { id: 11, type: "images", title: "Embedded System", src: "/gallery/img11.jpg" },
  {
    id: 12,
    type: "videos",
    title: "VitalsChair™ Demo",
    src: "https://youtu.be/1nHIzjtbpqk?si=iZaUrSZ20H2PfK6p",
    thumb: "/gallery/video-thumb.png",
  },
    {
    id: 13,
    type: "videos",
    title: "BluCompliance",
    src: "https://youtu.be/RtH4f2Y8ngw?si=mUuBxmnzhqQCvD8J",
    thumb: "/gallery/complince-thumb.png",
  },
    {
    id: 14,
    type: "videos",
    title: "Yashoda Medicity",
    src: "https://youtu.be/XkUVDMY_nMc?si=cmC8s0Y15e3bdSk3",
    thumb: "/gallery/yashodha-thumb.png",
  },
    {
    id: 15,
    type: "videos",
    title: " BluNotes™",
    src: "https://youtu.be/hgppB67TYzM?si=zGqT_Jg6QbQ-t-7c",
    thumb: "/gallery/doctor-thumb.png",
  },
    {
    id: 16,
    type: "videos",
    title: "Medical Fair 2026 Delhi",
    src: "https://youtu.be/omx7wwTag8g?si=g9wLlTAJTZGTwooz",
    thumb: "/gallery/fair-thumb.png",
  },
    {
    id: 17,
    type: "videos",
    title: "Blu Health™ Portal",
    src: "https://youtu.be/oVK_xSm_JZM?si=dqjt2aaipHliFpBh",
    thumb: "/gallery/health-thumb.png",
  },
  {
    id: 18,
    type: "documents",
    title: "Product Specs PDF",
    src: "/gallery/BluAccess-EAMMS.pdf",
    thumb: "/gallery/docpre.png",

  },
  {
    id: 19,
    type: "documents",
    title: "Product Specs PDF",
    src: "/gallery/BluNotes-single-india.pdf",
    thumb: "/gallery/docpre.png",

  },
  {
    id: 20,
    type: "documents",
    title: "Product Specs PDF",
    src: "/gallery/VitalsChair-single-india.pdf",
    thumb: "/gallery/docpre.png",

  },
];

/* ------------------------ COMPONENT ------------------------ */

export default function GallerySection() {
  const [tab, setTab] = React.useState("all");
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);

  const filtered =
    tab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === tab);

  const activeItem = filtered[activeIndex];
  const openViewer = (index) => {
    setActiveIndex(index);
    setZoom(1);
    setOpen(true);
  };

  const next = () =>
    setActiveIndex((i) => (i + 1) % filtered.length);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);




  //new logic 
  const [origin, setOrigin] = React.useState({ x: "50%", y: "50%" });


  const handleWheelZoom = (e) => {
    e.preventDefault();

    const delta = e.deltaY > 0 ? -0.1 : 0.1;

    setZoom((prev) => {
      const next = prev + delta;
      return Math.min(Math.max(next, 1), 3); // clamp 1x–3x
    });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOrigin({ x: `${x}%`, y: `${y}%` });
  };

  const handleDoubleClick = () => {
    setZoom((z) => (z === 1 ? 2 : 1));
  };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => getTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );

  const getEmbedUrl = (url) => {
    if (!url) return "";

    // Convert watch URL → embed URL
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
    );

    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1`;
    }

    return url; // fallback
  };

  return (
    <Box sx={{ bgcolor: "#fafbfd" }}>
      <Container maxWidth="xl" >
        {/* ---------------- HEADER ---------------- */}

        <Stack mt={4} spacing={2} alignItems="center" textAlign="center" mb={{ xs: 4, md: 6 }}>

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
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
              GALLERY
            </Typography>
          </Box>
        </Stack>

        {/* ---------------- TABS ---------------- */}
        {/* ---------------- RESPONSIVE TABS ---------------- */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            overflowX: "auto",
          }}
        >
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: { xs: 4, md: 6 },
              maxWidth: "100%",

              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", md: "center" },
                gap: { xs: 1.5, md: 3 },
              },

              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: { xs: 13, sm: 14, md: 15 },
                minHeight: 44,
                px: { xs: 1.5, sm: 2 },
                borderRadius: 2,
                whiteSpace: "nowrap",

                // 👇 dark/light mode support
                color: "rgba(0,0,0,0.7)",

                "&.Mui-selected": {
                  color: "#1b4dff",
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(27,77,255,0.15)"
                      : "rgba(27,77,255,0.08)",
                },
              },

              "& .MuiTabs-indicator": {
                height: 3,
                bgcolor: "#1b4dff",
                borderRadius: 2,
              },
            }}

          >
            <Tab value="all" icon={<DashboardIcon fontSize="small" />} iconPosition="start" label="All" />
            <Tab value="images" icon={<ImageIcon fontSize="small" />} iconPosition="start" label="Images" />
            <Tab value="videos" icon={<VideoLibraryIcon fontSize="small" />} iconPosition="start" label="Videos" />
            <Tab value="documents" icon={<DescriptionIcon fontSize="small" />} iconPosition="start" label="Documents" />
          </Tabs>
        </Box>


        {/* ---------------- GRID ---------------- */}
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          justifyContent="center"
        >
          {filtered.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                     mb: 2

              }}
            >
              <Card
                onClick={() => openViewer(index)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  width: "100%",          //  responsive
                  maxWidth: 380,          //  controlled size
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "1/1",
                    minHeight: { xs: 220, sm: 260, md: 250 },
                    overflow: "hidden",
                    "& img": {
                      transition: "transform 0.4s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.07)",
                    },
                  }}
                >
                  <Image
                    src={item.thumb || item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />

                  {/* 🔥 Red play button overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none", // lets clicks pass to parent
                    }}
                  >
                    {item?.type === "videos" && (<Box
                      sx={{
                        width: { xs: 40, md: 42 },
                        height: { xs: 37, md: 38 },
                        bgcolor: "#ff0000",
                        borderRadius: 2,
                        display: "flex",
                        text: "white",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.97)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      ▶
                    </Box>)}
                  </Box>

                  <Chip
                    label={item.type.toUpperCase()}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      bgcolor: "#1b4dff",
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  />
                </Box>


                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontWeight={600}>{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* <PartnerSlider /> */}
        {/* ---------------- MODAL VIEWER ---------------- */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Close */}
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ position: "absolute", top: 20, right: 20, color: "#fff" }}
            >
              <CloseIcon />
            </IconButton>

            {/* Prev / Next */}
            <IconButton
              onClick={prev}
              sx={{
                position: "absolute", zIndex: 10, // ⭐ important
                pointerEvents: "auto", left: 20, color: "#fff"
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={next}
              sx={{
                position: "absolute", zIndex: 10, // ⭐ important
                pointerEvents: "auto", right: 20, color: "#fff"
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            {/* Zoom */}
            {activeItem?.type === "images" && (
              <Box sx={{
                position: "absolute", zIndex: 10, // ⭐ important
                pointerEvents: "auto", bottom: 80
              }}>
                <IconButton onClick={() => setZoom((z) => z + 0.2)} sx={{ color: "#fff" }}>
                  <ZoomInIcon />
                </IconButton>
                <IconButton
                  onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
                  sx={{ color: "#fff" }}
                >
                  <ZoomOutIcon />
                </IconButton>
              </Box>
            )}

            {/* CONTENT */}
            <Box sx={{ maxWidth: "90vw", maxHeight: "90vh" }}>
              {activeItem?.type === "images" && (
                <Box
                  sx={{
                    width: {
                      xs: "95vw",
                      sm: "90vw",
                      md: "85vw",
                    },
                    height: {
                      xs: "65dvh", // ⭐ dynamic viewport (fixes mobile)
                      sm: "75dvh",
                      md: "80dvh",
                    },
                    maxWidth: "1200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    cursor: zoom > 1 ? "grab" : "zoom-in",
                    bgcolor: "#000",
                  }}
                  onWheel={handleWheelZoom}
                  onMouseMove={zoom > 1 ? handleMouseMove : undefined}
                  onDoubleClick={handleDoubleClick}
                >
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    width={1200}
                    height={800}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transform: `scale(${zoom})`,
                      transformOrigin: `${origin.x} ${origin.y}`,
                      transition: "transform 0.15s ease-out",
                      userSelect: "none",
                    }}
                  />
                </Box>
              )}


              {activeItem?.type === "videos" && (
                <Box
                  sx={{
                    width: { xs: "95vw", sm: "85vw", md: "70vw" },
                    maxWidth: "1200px",
                    aspectRatio: "16 / 9",
                    mx: "auto",
                    borderRadius: 2,
                    overflow: "hidden",
                    bgcolor: "#000",
                  }}
                >
                  <iframe
                    src={getEmbedUrl(activeItem.src)}
                    title="Video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </Box>
              )}



              {activeItem?.type === "documents" && (
                <iframe
                  src={activeItem.src}
                  style={{
                    width: "80vw",
                    height: "80vh",
                    border: "none",
                    background: "#fff",
                  }}
                />
              )}
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}

