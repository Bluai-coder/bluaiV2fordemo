
"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <Box>
      {/* ================= HERO ================= */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 5, md: 7 },
            }}
          >
            {/* Left */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
                textAlign: { xs: "center", md: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.75rem", sm: "2.15rem", md: "2.5rem" },
                  lineHeight: 1.2,
                  color: "#0A0F1F",
                  letterSpacing: -0.5,
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                About Us
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1.05rem" },
                  lineHeight: 1.8,
                  color: "#5A6478",
                  mb: { xs: 3.5, md: 4 },
                  maxWidth: { xs: "100%", md: 580 },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                <b>BluAI</b> is a <b>next-generation AI technology company</b> transforming healthcare through intelligent systems and applied innovation. We design and deliver <b>AI-powered products and embedded solutions</b> that enhance decision-making, automate complex processes, and create seamless digital experiences.
                With a strong focus on <b>digital healthcare transformation</b>, BluAI develops intelligent platforms that enable real-time patient monitoring, preventive diagnostics, remote health access, and data-driven clinical insights — improving both care quality and operational efficiency.
                Our ecosystem includes healthcare platforms like <b>BluHealth</b>, <b>BluASHA</b>, and <b>VitalsChair</b>; enterprise solutions such as <b>BluMail</b> and <b>BluNotes</b>; and smart identity and access systems including <b>BluAccess</b> and <b>BluID</b>. Each product is built to convert data into <b>actionable intelligence, improved outcomes, and measurable impact</b>.
                Headquartered in the <b>United States</b> with a growing presence in <b>India</b>, BluAI is committed to <b>building scalable, responsible, and real-world AI solutions</b> that power a smarter, healthier, and more connected future.
              </Typography>

              <Button
                onClick={() => router.push("/about")}
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#1B4DFF",
                  color: "#fff",
                  px: { xs: 4, md: 4.5 },
                  py: 1.4,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  borderRadius: "10px",
                  textTransform: "none",
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: 320, sm: "none" },
                  "&:hover": {
                    bgcolor: "#163ED6",
                    boxShadow: "0 12px 28px rgba(27,77,255,0.30)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Explore More
              </Button>
            </Box>

            {/* Right Image */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
                order: { xs: 1, md: 2 },
              }}
            >
              <Box
                component="img"
                src="/about-us-main.webp"
                alt="About BluAI"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 4,
                  objectFit: "cover",
                  maxHeight: { xs: 280, sm: 380, md: 560 },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= MISSION / VISION ================= */}
      <Box sx={{ py: { xs: 8, md: 0 }, bgcolor: "#FFFFFF", pt: 0 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3.5, md: 4.5 },
                borderRadius: 4,
                flex: 1,
                background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 45px rgba(15,23,42,0.15)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: { xs: "1.15rem", md: "1.25rem" },
                  mb: 2,
                  letterSpacing: -0.3,
                }}
              >
                Our Mission
              </Typography>

              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.8,
                }}
              >
                To develop and deploy <b style={{ color: "white" }}>intelligent, scalable AI solutions</b> that solve real-world challenges across healthcare, enterprise, and connected ecosystems.
                Through platforms like <b style={{ color: "white" }}>BluHealth</b>, <b style={{ color: "white" }}>BluMail</b>, and <b style={{ color: "white" }}>BluAccess</b>, our mission is to make <b style={{ color: "white" }}>advanced artificial intelligence practical, accessible, and outcome-driven</b> for organizations worldwide.
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3.5, md: 4.5 },
                borderRadius: 4,
                flex: 1,
                background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 45px rgba(15,23,42,0.15)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: { xs: "1.15rem", md: "1.25rem" },
                  mb: 2,
                  letterSpacing: -0.3,
                }}
              >
                Our Vision
              </Typography>

              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.8,
                }}
              >
                To become a <b style={{ color: "white" }}>global leader in applied artificial intelligence</b>, setting new standards in innovation, reliability, and ethical AI development.
                We envision a world where solutions like <b style={{ color: "white" }}>VitalsChair</b>, <b style={{ color: "white" }}>BluASHA</b>, and <b style={{ color: "white" }}>BluID</b> seamlessly integrate into everyday operations — creating a <b style={{ color: "white" }}>smarter, safer, and more connected digital ecosystem</b>.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}