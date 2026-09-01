"use client";

import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import FaqSection from "../../../components/FaqSection";
import { useRouter } from 'next/navigation';

const services = [
  {
    id: 1,
    title: "Embedded System Development",
    desc: "At BluAI, we excel in crafting complex embedded systems.",
    image: "/services/embedded.jpg",
    color: "#1da1f2",
  },
  {
    id: 2,
    title: "Hardware Software Design",
    desc: "We engineer electronic systems from concept to production.",
    image: "/services/hardware.jpg",
    color: "#ff8c00",
  },
  {
    id: 3,
    title: "Crafting Seamless User Experiences Across Platforms",
    desc: "Creating intuitive interfaces across platforms.",
    image: "/services/uiux.jpg",
    color: "#00c389",
  },
  {
    id: 4,
    title: "Data & AI",
    desc: "AI-driven data solutions for smarter systems.",
    image: "/services/data-ai.jpg",
    color: "#ff3b3b",
  },
  {
    id: 5,
    title: "DevOps Partner for Streamlined IT Operations",
    desc: "Empowering seamless collaboration and deployment.",
    image: "/services/devops.jpg",
    color: "#7c3aed",
  },
  {
    id: 6,
    title: "BluAI Quality Assurance",
    desc: "Ensuring quality, reliability, and performance.",
    image: "/services/qa.jpg",
    color: "#ff2d8b",
  },
];

const CARD_WIDTH = 380;
const AUTO_SLIDE_DELAY = 3500;

export default function ServicesCarousel() {
  const ref = useRef(null);
  const intervalRef = useRef(null);
  const [active, setActive] = useState(0);
  const router = useRouter()
  const total = services.length;


  const scrollTo = (index) => {
    ref.current?.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth",
    });
  };
  /* ---------------- AUTO SLIDE ---------------- */

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % total;
        scrollTo(next);
        return next;
      });
    }, AUTO_SLIDE_DELAY);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  /* ---------------- SCROLL HANDLING ---------------- */



  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / CARD_WIDTH);
      setActive(index % total);

      // infinite illusion
      if (el.scrollLeft >= CARD_WIDTH * total) {
        el.scrollLeft = 0;
      }
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- RENDER ---------------- */

  return (
    <Box sx={{ py: 0 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: {
            xs: "70vh",   // mobile
            sm: "80vh",
            md: "100vh",  // desktop
          },
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Image
          src="/our-main.jpg"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            minHeight: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 2, sm: 3 },
            color: "#fff",
          }}
        >
            <Typography
            sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: { xs: 36, sm: 46, md: 56 },
                letterSpacing: "-0.02em",
              }}
          >
            <Box component="span" className="!text-white" color="primary.main">
              Check Our {" "}
            </Box>
            <Box component="span" className="!text-[#1b4dff]" color="text.primary">

              Services
            </Box>
          </Typography>


          <Box
            sx={{
              position: "absolute",
              bottom: -1,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
            }}
          >
            <svg
              viewBox="0 0 500 60"
              preserveAspectRatio="none"
              style={{ width: "100%", height: 60 }}
            >
              <path
                d="M0,0 C150,50 350,0 500,40 L500,60 L0,60 Z"
                style={{ fill: "#ffffff" }}
              />
            </svg>
          </Box>
        </Box>


      </Box>
      <Container maxWidth="xl">
        {/* HEADER */}
          <Stack spacing={2} alignItems="center" textAlign="center" mb={{ xs: 4, md: 6 }}>
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
              OUR SERVICES
            </Typography>
          </Box>
        </Stack>

        {/* SERVICES GRID */}
        <Box sx={{ mt: 6 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 420px))",
                lg: "repeat(3, minmax(0, 420px))",
              },
              justifyContent: "center",
              gap: 4,
            }}
          >
            {services.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                {/* CARD */}
                <Box
                  onClick={() =>
                    router.push(`/our-services/details/${item.id}`)
                  }
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Box sx={{ position: "relative", height: 220 }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 600px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  {/* CONTENT */}
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      color="#0b1b5c"
                      lineHeight={1.4}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={1.2}
                      lineHeight={1.6}
                    >
                      {item.desc}
                    </Typography>

                    <Button
                      sx={{
                        mt: "auto",
                        px: 0,
                        textTransform: "none",
                        fontWeight: 600,
                        color: item.color || "#1b4dff",
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Read More →
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

{/* FQA */}
        <FaqSection />
      </Container>

    </Box>
  );
}
