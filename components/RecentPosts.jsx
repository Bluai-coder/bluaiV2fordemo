
"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
  Button,
  keyframes,
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

/* -------------------- DATA -------------------- */

const posts = [
  {
    id: 1,
    title:
      "The Future of Healthcare: How Facial Expression Analysis is Revolutionizing Medical Monitoring",
    author: "Anurag Shrivastava",
    date: "DEC 10, 2025",
    image: "/recent-blog/blog1.webp",
  },
  {
    id: 2,
    title:
      "Face Recognition Attendance in EAMMS: The Next Step in Smart Workforce Management",
    author: "Himanshu",
    date: "NOV 20, 2025",
    image: "/hero-popup/face.png",
  },
  {
    id: 3,
    title:
      "BluAI Office Culture: A Vision of Innovation and Collaboration",
    author: "AdminBluAI",
    date: "JUNE 14, 2024",
    image: "/recent-blog/blog3.webp",
  },
];

/* -------------------- COMPONENT -------------------- */
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export default function RecentPosts() {
  const router = useRouter();

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 3 },
        bgcolor: "#fafbfd",
        position: "relative",
        overflow: "hidden",

      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: 900,
          height: 320,
          background:
            "radial-gradient(ellipse at center, rgba(27,77,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{
        position: "relative", zIndex: 1,
      }}>
        {/* HEADER — same style as Partner section */}
        <Stack
          spacing={1.5}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 4.5, sm: 5.5, md: 7 }}

        >


          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 24, sm: 28, md: "2.8rem" },
              lineHeight: 1.2,
              color: "#0a1628",
              maxWidth: 780,
              px: { xs: 1, sm: 0 },
            }}
          >
            <Box component="span" sx={{ color: "#0a1628" }}>
              Recent Posts From Our{" "}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#1b4dff",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  right: 0,
                  height: 3,
                  borderRadius: 999,
                  background: "linear-gradient(90deg, #1b4dff, #4a7aff)",
                  animation: `${pulseGlow} 2s ease-in-out infinite`,
                },
              }}
            >
              Blog
            </Box>
          </Typography>
        </Stack>

        {/* CARDS — Flex layout (no Grid) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 3, sm: 3, md: 4 },
          }}
        >
          {posts.map((post) => (
            <Card
              key={post.id}
              onClick={() => router.push("/blog")}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 14px)",
                  md: "calc(33.333% - 22px)",
                },
                maxWidth: { xs: "100%", sm: 480 },
                display: "flex",
                flexDirection: "column",
                // borderRadius: 3.5,
                borderRadius: { xs: "21px", md: "21px" },
                overflow: "hidden",
                cursor: "pointer",
                bgcolor: "#fff",
                border: "1px solid rgba(15, 23, 42, 0.06)",
                boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)",
                transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",

                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 24px 56px rgba(27, 77, 255, 0.14), 0 0 0 1px rgba(27, 77, 255, 0.1)",
                  borderColor: "rgba(27, 77, 255, 0.2)",

                  "& .post-image img": {
                    transform: "scale(1.08)",
                  },
                  "& .image-overlay": {
                    opacity: 1,
                  },
                  "& .read-more-btn": {
                    gap: 1.25,
                    color: "#163ed6",
                  },
                  "& .date-chip": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(27,77,255,0.45)",
                  },
                },
              }}
            >
              {/* IMAGE */}
              <Box
                className="post-image"
                sx={{
                  position: "relative",
                  height: { xs: 200, sm: 215, md: 230 },
                  bgcolor: "#e8eef7",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition:
                      "transform 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 45%)",
                    pointerEvents: "none",
                  }}
                />

                <Box
                  className="image-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(27,77,255,0.15) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                <Chip
                  className="date-chip"
                  label={post.date}
                  size="small"
                  sx={{
                    position: "absolute",
                    right: 14,
                    bottom: 14,
                    bgcolor: "#1b4dff",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.04em",
                    height: 28,
                    borderRadius: 2,
                    boxShadow: "0 4px 14px rgba(27,77,255,0.4)",
                    transition: "all 0.3s ease",
                  }}
                />
              </Box>

              {/* CONTENT */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 2.5, sm: 3 },
                  "&:last-child": { pb: { xs: 2.75, sm: 3.25 } },
                }}
              >
                <Typography
                  fontWeight={700}
                  sx={{
                    fontSize: {
                      xs: "0.95rem",
                      sm: "1.02rem",
                      md: "1.08rem",
                    },
                    lineHeight: 1.45,
                    color: "#0f172a",
                    mb: 2.25,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: { xs: "auto", md: "4.5em" },
                  }}
                >
                  {post.title}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="auto"
                  spacing={1}
                >
                  <Stack direction="row" alignItems="center" spacing={1.2}>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: "rgba(27,77,255,0.1)",
                        color: "#1b4dff",
                        fontSize: 13,
                        fontWeight: 700,
                        border: "1.5px solid rgba(27,77,255,0.15)",
                      }}
                    >
                      {post.author.charAt(0)}
                    </Avatar>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.78rem", sm: "0.82rem" },
                        color: "#64748b",
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {post.author}
                      <Box
                        component="span"
                        sx={{ color: "#94a3b8", display: "block" }}
                      >
                        BluAI
                      </Box>
                    </Typography>
                  </Stack>

                  <Button
                    className="read-more-btn"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/blog");
                    }}
                    sx={{
                      px: 0,
                      py: 0.5,
                      minWidth: 0,
                      color: "#1b4dff",
                      fontWeight: 650,
                      fontSize: "0.82rem",
                      textTransform: "none",
                      gap: 0.5,
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}