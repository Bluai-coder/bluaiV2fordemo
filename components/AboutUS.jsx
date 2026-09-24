
// "use client";

// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Paper,
// } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function AboutPage() {
//   const router = useRouter();

//   return (
//     <Box>
//       {/* ================= HERO ================= */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
//         <Container maxWidth="xl">
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               alignItems: "center",
//               gap: { xs: 5, md: 7 },
//             }}
//           >
//             {/* Left */}
//             <Box
//               sx={{
//                 flex: 1,
//                 width: "100%",
//                 textAlign: { xs: "center", md: "left" },
//                 order: { xs: 2, md: 1 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontWeight: 800,
//                   fontSize: { xs: "1.75rem", sm: "2.15rem", md: "2.5rem" },
//                   lineHeight: 1.2,
//                   color: "#0A0F1F",
//                   letterSpacing: -0.5,
//                   mb: { xs: 2.5, md: 3 },
//                 }}
//               >
//                 About Us
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: { xs: "0.95rem", sm: "1.05rem" },
//                   lineHeight: 1.8,
//                   color: "#5A6478",
//                   mb: { xs: 3.5, md: 4 },
//                   maxWidth: { xs: "100%", md: 580 },
//                   mx: { xs: "auto", md: 0 },
//                 }}
//               >
//                 <b>BluAI</b> is a <b>next-generation AI technology company</b> transforming healthcare through intelligent systems and applied innovation. We design and deliver <b>AI-powered products and embedded solutions</b> that enhance decision-making, automate complex processes, and create seamless digital experiences.
//                 With a strong focus on <b>digital healthcare transformation</b>, BluAI develops intelligent platforms that enable real-time patient monitoring, preventive diagnostics, remote health access, and data-driven clinical insights — improving both care quality and operational efficiency.
//                 Our ecosystem includes healthcare platforms like <b>BluHealth</b>, <b>BluASHA</b>, and <b>VitalsChair</b>; enterprise solutions such as <b>BluMail</b> and <b>BluNotes</b>; and smart identity and access systems including <b>BluAccess</b> and <b>BluID</b>. Each product is built to convert data into <b>actionable intelligence, improved outcomes, and measurable impact</b>.
//                 Headquartered in the <b>United States</b> with a growing presence in <b>India</b>, BluAI is committed to <b>building scalable, responsible, and real-world AI solutions</b> that power a smarter, healthier, and more connected future.
//               </Typography>

//               <Button
//                 onClick={() => router.push("/about")}
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   bgcolor: "#1B4DFF",
//                   color: "#fff",
//                   px: { xs: 4, md: 4.5 },
//                   py: 1.4,
//                   fontWeight: 700,
//                   fontSize: "0.95rem",
//                   borderRadius: "10px",
//                   textTransform: "none",
//                   boxShadow: "none",
//                   transition: "all 0.3s ease",
//                   width: { xs: "100%", sm: "auto" },
//                   maxWidth: { xs: 320, sm: "none" },
//                   "&:hover": {
//                     bgcolor: "#163ED6",
//                     boxShadow: "0 12px 28px rgba(27,77,255,0.30)",
//                     transform: "translateY(-2px)",
//                   },
//                 }}
//               >
//                 Explore More
//               </Button>
//             </Box>

//             {/* Right Image */}
//             <Box
//               sx={{
//                 flex: 1,
//                 width: "100%",
//                 order: { xs: 1, md: 2 },
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/about-us-main.webp"
//                 alt="About BluAI"
//                 sx={{
//                   width: "100%",
//                   height: "auto",
//                   display: "block",
//                   borderRadius: 4,
//                   objectFit: "cover",
//                   maxHeight: { xs: 280, sm: 380, md: 560 },
//                 }}
//               />
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* ================= MISSION / VISION ================= */}
//       {/* <Box sx={{ py: { xs: 8, md: 0 }, bgcolor: "#FFFFFF", pt: 0 }}>
//         <Container maxWidth="xl">
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               gap: { xs: 3, md: 4 },
//             }}
//           >
//             <Paper
//               elevation={0}
//               sx={{
//                 position: "relative",
//                 overflow: "hidden",
//                 p: { xs: 3.5, md: 4.5 },
//                 borderRadius: 4,
//                 flex: 1,
//                 background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
//                 transition: "all 0.35s ease",
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: "0 20px 45px rgba(15,23,42,0.15)",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontWeight: 800,
//                   fontSize: { xs: "1.15rem", md: "1.25rem" },
//                   mb: 2,
//                   letterSpacing: -0.3,
//                 }}
//               >
//                 Our Mission
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "white",
//                   fontSize: { xs: "0.95rem", md: "1rem" },
//                   lineHeight: 1.8,
//                 }}
//               >
//                 To develop and deploy <b style={{ color: "white" }}>intelligent, scalable AI solutions</b> that solve real-world challenges across healthcare, enterprise, and connected ecosystems.
//                 Through platforms like <b style={{ color: "white" }}>BluHealth</b>, <b style={{ color: "white" }}>BluMail</b>, and <b style={{ color: "white" }}>BluAccess</b>, our mission is to make <b style={{ color: "white" }}>advanced artificial intelligence practical, accessible, and outcome-driven</b> for organizations worldwide.
//               </Typography>
//             </Paper>

//             <Paper
//               elevation={0}
//               sx={{
//                 position: "relative",
//                 overflow: "hidden",
//                 p: { xs: 3.5, md: 4.5 },
//                 borderRadius: 4,
//                 flex: 1,
//                 background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
//                 transition: "all 0.35s ease",
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: "0 20px 45px rgba(15,23,42,0.15)",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontWeight: 800,
//                   fontSize: { xs: "1.15rem", md: "1.25rem" },
//                   mb: 2,
//                   letterSpacing: -0.3,
//                 }}
//               >
//                 Our Vision
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "white",
//                   fontSize: { xs: "0.95rem", md: "1rem" },
//                   lineHeight: 1.8,
//                 }}
//               >
//                 To become a <b style={{ color: "white" }}>global leader in applied artificial intelligence</b>, setting new standards in innovation, reliability, and ethical AI development.
//                 We envision a world where solutions like <b style={{ color: "white" }}>VitalsChair</b>, <b style={{ color: "white" }}>BluASHA</b>, and <b style={{ color: "white" }}>BluID</b> seamlessly integrate into everyday operations — creating a <b style={{ color: "white" }}>smarter, safer, and more connected digital ecosystem</b>.
//               </Typography>
//             </Paper>
//           </Box>
//         </Container>
//       </Box> */}
//     </Box>
//   );
// }







"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AboutPage() {
  const router = useRouter();

  return (
    <Box sx={{ bgcolor: "#FFFFFF" }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 6, sm: 8, md: 10 },
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" },
              alignItems: "center",
              gap: { xs: 5, md: 7 },
            }}
          >
            {/* LEFT — Text */}
            <Box
              sx={{
                minWidth: 0,
                textAlign: { xs: "center", md: "left" },
                order: { xs: 2, md: 1 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 11, md: 12 },
                  fontWeight: 800,
                  color: "#1B4DFF",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                About BluAI
              </Typography>

              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
                  lineHeight: 1.15,
                  color: "#07122C",
                  letterSpacing: "-0.02em",
                  mb: 3,
                }}
              >
                Building the Future of{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "#1B4DFF",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Applied AI.
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.85,
                  color: "rgba(7,18,44,0.68)",
                  mb: 2.4,
                  maxWidth: 560,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                <b>BluAI</b> is a{" "}
                <b>next-generation AI technology company</b> transforming
                healthcare through intelligent systems and applied innovation.
                We design and deliver{" "}
                <b>AI-powered products and embedded solutions</b> that enhance
                decision-making, automate complex processes, and create
                seamless digital experiences.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.85,
                  color: "rgba(7,18,44,0.68)",
                  mb: 2.4,
                  maxWidth: 560,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                With a strong focus on{" "}
                <b>digital healthcare transformation</b>, BluAI develops
                intelligent platforms that enable real-time patient
                monitoring, preventive diagnostics, remote health access, and
                data-driven clinical insights — improving both care quality and
                operational efficiency.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.85,
                  color: "rgba(7,18,44,0.68)",
                  mb: 2.4,
                  maxWidth: 560,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Our ecosystem includes healthcare platforms like{" "}
                <b>BluHealth</b>, <b>BluASHA</b>, and <b>VitalsChair</b>;
                enterprise solutions such as <b>BluMail</b> and{" "}
                <b>BluNotes</b>; and smart identity and access systems
                including <b>BluAccess</b> and <b>BluID</b>. Each product is
                built to convert data into{" "}
                <b>actionable intelligence, improved outcomes, and measurable
                impact</b>.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.85,
                  color: "rgba(7,18,44,0.68)",
                  mb: 4,
                  maxWidth: 560,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Headquartered in the <b>United States</b> with a growing
                presence in <b>India</b>, BluAI is committed to{" "}
                <b>building scalable, responsible, and real-world AI
                solutions</b> that power a smarter, healthier, and more
                connected future.
              </Typography>

              <Button
                onClick={() => router.push("/about")}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background:
                    "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
                  color: "#fff",
                  px: 3.5,
                  py: 1.3,
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  borderRadius: 999,
                  textTransform: "none",
                  boxShadow: "0 14px 35px rgba(27,77,255,0.30)",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: 300, sm: "none" },
                  mx: { xs: "auto", md: 0 },
                  display: { xs: "flex", sm: "inline-flex" },
                  "&:hover": {
                    boxShadow: "0 20px 45px rgba(27,77,255,0.40)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Explore More
              </Button>
            </Box>

            {/* RIGHT — Image (natural aspect ratio, no cropping) */}
            <Box
              sx={{
                width: "100%",
                minWidth: 0,
                order: { xs: 1, md: 2 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 340, sm: 440, md: 560 },
                  // No aspectRatio — let the image define its own height
                  // so it never gets cropped or squashed
                }}
              >
                {/* Soft blue glow behind */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: -30,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(27,77,255,0.15) 0%, transparent 70%)",
                    filter: "blur(30px)",
                    zIndex: 0,
                  }}
                />

                <Image
                  src="/about-us-main.webp"
                  alt="About BluAI"
                  width={1200}
                  height={900}
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 440px, 560px"
                  style={{
                    width: "100%",
                    height: "auto", // 👈 key: preserve natural aspect ratio
                    display: "block",
                    position: "relative",
                    zIndex: 1,
                    borderRadius: 16,
                  }}
                  priority
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= MISSION / VISION ================= */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#1B4DFF",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Purpose & Direction
            </Typography>
            <Typography
              sx={{
                fontWeight: 900,
                color: "#07122C",
                fontSize: { xs: "1.7rem", md: "2.2rem" },
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Our Mission & Vision
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {/* MISSION */}
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3.5, md: 4.5 },
                borderRadius: 5,
                bgcolor: "#F7FAFF",
                border: "1px solid rgba(27,77,255,0.12)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(27,77,255,0.3)",
                  boxShadow: "0 30px 70px -30px rgba(27,77,255,0.35)",
                },
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #1B4DFF 0%, #5B8CFF 100%)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                  mb: 2.5,
                  boxShadow: "0 12px 30px -10px rgba(27,77,255,0.7)",
                }}
              >
                M
              </Box>

              <Typography
                sx={{
                  color: "#07122C",
                  fontWeight: 900,
                  fontSize: { xs: "1.2rem", md: "1.35rem" },
                  mb: 2,
                  letterSpacing: "-0.01em",
                }}
              >
                Our Mission
              </Typography>

              <Typography
                sx={{
                  color: "rgba(7,18,44,0.72)",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.85,
                }}
              >
                To develop and deploy <b>intelligent, scalable AI solutions</b>{" "}
                that solve real-world challenges across healthcare, enterprise,
                and connected ecosystems. Through platforms like{" "}
                <b>BluHealth</b>, <b>BluMail</b>, and <b>BluAccess</b>, our
                mission is to make{" "}
                <b>advanced artificial intelligence practical, accessible, and
                outcome-driven</b> for organizations worldwide.
              </Typography>
            </Paper>

            {/* VISION */}
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: { xs: 3.5, md: 4.5 },
                borderRadius: 5,
                bgcolor: "#F7FAFF",
                border: "1px solid rgba(0,163,255,0.12)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(0,163,255,0.3)",
                  boxShadow: "0 30px 70px -30px rgba(0,163,255,0.35)",
                },
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, #00A3FF 0%, #5B8CFF 100%)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 22,
                  mb: 2.5,
                  boxShadow: "0 12px 30px -10px rgba(0,163,255,0.7)",
                }}
              >
                V
              </Box>

              <Typography
                sx={{
                  color: "#07122C",
                  fontWeight: 900,
                  fontSize: { xs: "1.2rem", md: "1.35rem" },
                  mb: 2,
                  letterSpacing: "-0.01em",
                }}
              >
                Our Vision
              </Typography>

              <Typography
                sx={{
                  color: "rgba(7,18,44,0.72)",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.85,
                }}
              >
                To become a{" "}
                <b>global leader in applied artificial intelligence</b>,
                setting new standards in innovation, reliability, and ethical
                AI development. We envision a world where solutions like{" "}
                <b>VitalsChair</b>, <b>BluASHA</b>, and <b>BluID</b> seamlessly
                integrate into everyday operations — creating a{" "}
                <b>smarter, safer, and more connected digital ecosystem</b>.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}