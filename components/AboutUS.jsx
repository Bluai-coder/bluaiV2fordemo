
// "use client";

// import {
//     Box,
//     Container,
//     Typography,
//     Button,
//     Paper,
// } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function AboutPage() {
//     const router = useRouter();

//     return (
//         <Box>
//             {/* ================= HERO ================= */}
//             <Box sx={{ py: { xs: 5, sm: 7, md: 7 }, bgcolor: "#f8fafc" }}>
//                 <Container maxWidth="lg">
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: { xs: "column", md: "row" },
//                             alignItems: "center",
//                             gap: { xs: 4, sm: 5, md: 6 },
//                         }}
//                     >
//                         {/* Left */}
//                         <Box
//                             sx={{
//                                 flex: 1,
//                                 width: "100%",
//                                 textAlign: { xs: "center", md: "left" },
//                                 order: { xs: 2, md: 1 },
//                             }}
//                         >
//                             <Typography
//                                 // color="text.secondary"

//                                 fontWeight={800}
//                                 sx={{
//                                     fontSize: {
//                                         xs: "1.75rem",
//                                         sm: "2.15rem",
//                                         md: "2.5rem",
//                                         lg: "2.75rem",
//                                         color: "#000000de",
//                                     },
//                                     lineHeight: 1.2,
//                                     mb: { xs: 2, md: 2.5 },
//                                 }}
//                             >
//                                 ABOUT US
//                             </Typography>

//                             <Typography
//                                 color="text.secondary"
//                                 sx={{
//                                     fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
//                                     lineHeight: 1.7,
//                                     mb: { xs: 3, md: 3.5 },
//                                     maxWidth: { xs: "100%", md: 560 },
//                                     mx: { xs: "auto", md: 0 },
//                                 }}
//                             >
//                                 <b>BluAI</b> is a <b>next-generation AI technology company</b> transforming healthcare through intelligent systems and applied innovation. We design and deliver <b>AI-powered products and embedded solutions</b> that enhance decision-making, automate complex processes, and create seamless digital experiences.
//                                 With a strong focus on <b>digital healthcare transformation</b>, BluAI develops intelligent platforms that enable real-time patient monitoring, preventive diagnostics, remote health access, and data-driven clinical insights — improving both care quality and operational efficiency.
//                                 Our ecosystem includes healthcare platforms like <b>BluHealth</b>, <b>BluASHA</b>, and <b>VitalsChair</b>; enterprise solutions such as <b>BluMail</b> and <b>BluNotes</b>; and smart identity and access systems including <b>BluAccess</b> and <b>BluID</b>. Each product is built to convert data into <b>actionable intelligence, improved outcomes, and measurable impact</b>.
//                                 Headquartered in the <b>United States</b> with a growing presence in <b>India</b>, BluAI is committed to <b>building scalable, responsible, and real-world AI solutions</b> that power a smarter, healthier, and more connected future.
//                             </Typography>

//                             <Button
//                                 onClick={() => router.push("/about")}
//                                 variant="contained"
//                                 size="large"
//                                 sx={{
//                                     bgcolor: "#1b4dff",
//                                     color: "#fff",
//                                     px: { xs: 4, md: 5 },
//                                     py: 1.5,
//                                     fontWeight: 700,
//                                     fontSize: { xs: "0.95rem", md: "1rem" },
//                                     borderRadius: { xs: "21px", md: "21px" },
//                                     textTransform: "none",
//                                     boxShadow: "0 8px 24px rgba(27,77,255,0.3)",
//                                     transition: "all 0.3s ease",
//                                     width: { xs: "100%", sm: "auto" },
//                                     maxWidth: { xs: 320, sm: "none" },
//                                     "&:hover": {
//                                         bgcolor: "#163ed6",
//                                         boxShadow: "0 12px 32px rgba(27,77,255,0.4)",
//                                         transform: "translateY(-2px)",
//                                     },
//                                     "&:active": {
//                                         transform: "translateY(0)",
//                                     },
//                                 }}
//                             >
//                                 Explore More
//                             </Button>
//                         </Box>

//                         {/* Right Images */}
//                         <Box
//                             sx={{
//                                 flex: 1,
//                                 width: "100%",
//                                 order: { xs: 1, md: 2 },
//                             }}
//                         >
//                             <Box
//                                 component="img"
//                                 src="/about-us-main.webp"
//                                 alt="About BluAI"
//                                 sx={{
//                                     width: "100%",
//                                     height: "auto",
//                                     display: "block",
//                                     borderRadius: { xs: 2, md: 3 },
//                                     objectFit: "cover",
//                                     maxHeight: { xs: 280, sm: 360, md: 700 },
//                                 }}
//                             />
//                         </Box>
//                     </Box>
//                 </Container>
//             </Box>

//             {/* ================= MISSION / VISION ================= */}
//             <Box sx={{ py: { xs: 5, sm: 7, md: 10 }, bgcolor: "#f8fafc", pt: 0 }}>

//                 <Container maxWidth="lg">
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: { xs: "column", md: "row" },
//                             gap: { xs: 3, sm: 3.5, md: 4 },
//                         }}
//                     >
//                         <Paper
//                             elevation={0}
//                             sx={{
//                                 position: "relative",
//                                 overflow: "hidden",
//                                 p: { xs: 3, sm: 3.5, md: 4 },
//                                 borderRadius: "28px",
//                                 flex: 1,
//                                 bgcolor: "#0B1220",
//                                 backdropFilter: "blur(12px)",
//                                 border: "1px solid rgba(37,99,235,0.08)",
//                                 boxShadow: "0 15px 45px rgba(15,23,42,0.06)",
//                                 transition: "all .35s ease",

//                                 "&:hover": {
//                                     transform: "translateY(-8px)",
//                                     boxShadow: "0 30px 60px rgba(37,99,235,.12)",
//                                 },

//                                 "&::before": {
//                                     content: '""',
//                                     position: "absolute",
//                                     top: -120,
//                                     right: -120,
//                                     width: 260,
//                                     height: 260,
//                                     borderRadius: "50%",
//                                     background:
//                                         "radial-gradient(circle, rgba(59,130,246,.10), transparent 70%)",
//                                     pointerEvents: "none",
//                                 },

//                                 "&::after": {
//                                     content: '""',
//                                     position: "absolute",
//                                     bottom: -80,
//                                     left: -80,
//                                     width: 180,
//                                     height: 180,
//                                     borderRadius: "50%",
//                                     background:
//                                         "radial-gradient(circle, rgba(96,165,250,.08), transparent 70%)",
//                                     pointerEvents: "none",
//                                 },
//                             }}
//                         >
//                             <Typography
//                                 color="white"
//                                 fontWeight={700}
//                                 sx={{
//                                     fontSize: { xs: "1.15rem", md: "1.25rem" },
//                                     mb: 1.5,
//                                 }}
//                             >
//                                 Our Mission
//                             </Typography>

//                             <Typography
//                                 color="white"
//                                 sx={{
//                                     fontSize: { xs: "0.95rem", md: "1rem" },
//                                     lineHeight: 1.7,
//                                 }}
//                             >
//                                 To develop and deploy <b>intelligent, scalable AI solutions</b> that solve real-world challenges across healthcare, enterprise, and connected ecosystems.
//                                 Through platforms like <b>BluHealth</b>, <b>BluMail</b>, and <b>BluAccess</b>, our mission is to make <b>advanced artificial intelligence practical, accessible, and outcome-driven</b> for organizations worldwide.
//                             </Typography>
//                         </Paper>

//                         <Paper
//                             elevation={0}
//                             sx={{
//                                 position: "relative",
//                                 overflow: "hidden",
//                                 p: { xs: 3, sm: 3.5, md: 4 },
//                                 borderRadius: "28px",
//                                 flex: 1,
//                                 bgcolor: "#0B1220",
//                                 backdropFilter: "blur(12px)",
//                                 border: "1px solid rgba(37,99,235,0.08)",
//                                 boxShadow: "0 15px 45px rgba(15,23,42,0.06)",
//                                 transition: "all .35s ease",

//                                 "&:hover": {
//                                     transform: "translateY(-8px)",
//                                     boxShadow: "0 30px 60px rgba(37,99,235,.12)",
//                                 },

//                                 "&::before": {
//                                     content: '""',
//                                     position: "absolute",
//                                     top: -120,
//                                     right: -120,
//                                     width: 260,
//                                     height: 260,
//                                     borderRadius: "50%",
//                                     background:
//                                         "radial-gradient(circle, rgba(59,130,246,.10), transparent 70%)",
//                                     pointerEvents: "none",
//                                 },

//                                 "&::after": {
//                                     content: '""',
//                                     position: "absolute",
//                                     bottom: -80,
//                                     left: -80,
//                                     width: 180,
//                                     height: 180,
//                                     borderRadius: "50%",
//                                     background:
//                                         "radial-gradient(circle, rgba(96,165,250,.08), transparent 70%)",
//                                     pointerEvents: "none",
//                                 },
//                             }}
//                         >
//                             <Typography
//                                 fontWeight={700}
//                                 sx={{
//                                     fontSize: { xs: "1.15rem", md: "1.25rem" },
//                                     mb: 1.5,
//                                     color: "white"
//                                 }}
//                             >
//                                 Our Vision
//                             </Typography>

//                             <Typography
//                                 color="white"
//                                 sx={{
//                                     fontSize: { xs: "0.95rem", md: "1rem" },
//                                     lineHeight: 1.7,
//                                 }}
//                             >
//                                 To become a <b>global leader in applied artificial intelligence</b>, setting new standards in innovation, reliability, and ethical AI development.
//                                 We envision a world where solutions like <b>VitalsChair</b>, <b>BluASHA</b>, and <b>BluID</b> seamlessly integrate into everyday operations — creating a <b>smarter, safer, and more connected digital ecosystem</b>.
//                             </Typography>
//                         </Paper>
//                     </Box>
//                 </Container>
//             </Box>
//         </Box>
//     );
// }






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