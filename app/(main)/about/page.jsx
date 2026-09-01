"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import OurValues from "../../../components/OurValues";
import StatsSection from "../../../components/StarSection"
import OurSolutions from "../../../components/OurSolutions"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { cloneElement } from "react";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { getTheme } from "../../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ScienceIcon from "@mui/icons-material/Science";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import OurTeamSlider from "../../../components/OurTeam";

const team = [{
  id : 1,
  name: "Jay Nagi",
  role: "Founder and CEO",
  img: "/our-team/jay.png",
}, {
  id : 2,
  name: "Anurag Shrivastva",
  role: "Manager R&D",
  img: "/our-team/anurag.jpg",
},
{
  id : 3,
  name: "JaiPaul Nagi",
  role: "Executive sale office",
  img: "/our-team/jaipaul.png",
},
  {
    id : 4,
    name: "Kingston Joseph",
    role: "Engineer Data & AI",
    img: "/our-team/kingston.jpg",
  },
  {
    id : 5,
    name: "Akshay Saini",
    role: "Software Developer",
    img: "/our-team/akshay.jpeg",
  },

  {
    id : 6,
    name: "Krisma Nagi",
    role: "AI/ML",
    img: "/our-team/krisma.jpg",
  },
  {
    id : 7,
    name: "Nitin Saini",
    role: "Software Developer",
    img: "/our-team/nitin.jpg",
  },

  {
    id : 8,
    name: "Subham Rawat ",
    role: "Software Developer",
    img: "/our-team/subham.jpg",
  },
  {
    id : 9,
    name: "Himanshu",
    role: "Software Developer",
   img: "/our-team/himanshu.jpg",
  },
  {
    id : 10,
    name: "Shadab Rahman",
    role: "Software Developer",
    img: "/our-team/shadab.jpg",
  },
  {
    id : 11,
    name: "Sahil Ali",
    role: "Embedded Developer",
    img: "/our-team/sahil.jpg",
  },
   {
    id : 12,
    name: "Sankha Kundu",
    role: "Embedded Developer",
    img: "/our-team/sankha.jpg",
  }
  ,
   {
    id : 13,
    name: "Aditya Gurung",
    role: "Embedded Developer",
    img: "/our-team/aditya.jpg",
  }  
];

const faqs = [
  {
    question: "What does BluAI specialize in?",
    answer: (
      <>
        <b>BluAI</b> specializes in developing <b>AI-powered products and intelligent systems</b> across healthcare,
        enterprise automation, and smart access technologies. Our solutions are designed to improve decision-making,
        operational efficiency, and digital transformation outcomes.
      </>
    ),
  },
  {
    question: "How does BluAI support the healthcare industry?",
    answer: (
      <>
        Through platforms like <b>BluHealth</b>, <b>BluASHA</b>, and <b>VitalsChair</b>, BluAI enables
        <b> real-time health monitoring, preventive diagnostics, remote care access, and data-driven clinical insights</b>,
        helping healthcare providers deliver smarter and more efficient patient care.
      </>
    ),
  },
  {
    question: "What enterprise solutions does BluAI offer?",
    answer: (
      <>
        BluAI offers intelligent productivity and automation tools such as <b>BluMail</b> and <b>BluNotes</b>, which
        streamline communication, documentation, and workflow management using advanced AI capabilities.
      </>
    ),
  },
  {
    question: "Does BluAI provide identity and access management solutions?",
    answer: (
      <>
        Yes. With products like <b>BluAccess</b> and <b>BluID</b>, BluAI delivers
        <b> secure, AI-driven identity verification and smart access control systems</b> designed for modern
        organizations and connected environments.
      </>
    ),
  },
  {
    question: "Where is BluAI headquartered?",
    answer: (
      <>
        BluAI is headquartered in the <b>United States</b> with a growing operational presence in <b>India</b>,
        serving a global network of partners and clients.
      </>
    ),
  },
];

export default function About() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => getTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );
  const isDark = theme.palette.mode;

  function MetricCard({ icon, title, sub }) {
    return (
      <Box
        sx={{
          width: { xs: "100%", sm: "calc(50% - 10px)", lg: "calc(33.33% - 12px)" },
          borderRadius: 4,
          bgcolor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.14)",
          backdropFilter: "blur(10px)",
          p: 2,
          display: "flex",
          gap: 1.4,
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 3,
            bgcolor: "rgba(79,123,255,0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9DB6FF",
            flexShrink: 0,
          }}
        >
          {cloneElement(icon, { sx: { fontSize: 20 } })}
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontSize: 13.4, fontWeight: 950, color: "#fff" }}>
            {title}
          </Typography>
          <Typography sx={{ mt: 0.5, fontSize: 12.5, color: "rgba(255,255,255,0.75)" }}>
            {sub}
          </Typography>
        </Box>
      </Box>
    );
  }


  return (
    <Box>


      <Container maxWidth="lg">

        {/* HEADER BADGE */}
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mt={{ xs: 10, md: 13 }}
          mb={{ xs: 4, md: 6 }}
        >
          {/* Badge */}
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
              fontSize={12}
              fontWeight={900}
              letterSpacing={0.6}
              textTransform="uppercase"
              sx={{
                color:
                  isDark === "dark"
                    ? "#fff"
                    : "#1B4DFF",
              }}
            >
              Who We Are
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            fontWeight={950}
            fontSize={{ xs: "1.7rem", md: "2.4rem" }}
            lineHeight={1.12}
            maxWidth={900}
            sx={{
              color:
                isDark == "dark"
                  ? "#ffffff"
                  : "#07122C",
            }}
          >
            AI-Driven Embedded Solutions for a Smarter World
          </Typography>

          {/* Description */}
          <Typography
            maxWidth={860}
            fontSize={14.5}
            lineHeight={1.85}
            sx={{
              color:
                isDark == "dark"
                  ? "rgba(255,255,255,0.78)"
                  : "rgba(7,18,44,0.65)",
            }}
          >
            We combine research, engineering, and product innovation to build scalable
            solutions for modern enterprises.
          </Typography>
        </Stack>



        {/* PREMIUM WRAPPER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            gap: { xs: 2.2, md: 0 },
            // borderRadius: 5,
            overflow: "hidden",
            // border: "1px solid rgba(227,232,255,0.95)",
            boxShadow: "0 35px 90px rgba(15,23,42,0.14)",
            position: "relative",
            bgcolor: "#0B1430",
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              flex: 1.1,
              px: { xs: 2.4, sm: 3.5, md: 5.5 },
              py: { xs: 4, md: 6 },
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* background highlight */}
            {/* <Box
              sx={{
                position: "absolute",
                top: -180,
                left: -200,
                width: 520,
                height: 520,
                borderRadius: "50%",
                bgcolor: "rgba(27,77,255,0.16)",
                filter: "blur(2px)",
              }}
            /> */}

            <Box sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 28, md: 34 },
                  fontWeight: 950,
                  lineHeight: 1.18,
                  mb: 2,
                }}
              >
                Building the future with{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(90deg, #4F7BFF 0%, #1B4DFF 60%, #4F7BFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI + Embedded Innovation
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: 14.5,
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: 620,
                }}
              >
                At BluAI, we are passionate about shaping a brighter future. Founded with a focus
                on cutting-edge product development and research, we tackle the tech industry’s
                toughest challenges.
                <br />
                <br />
                We’ve grown to offer comprehensive solutions and services, including generating
                ideas for innovation, along with the digital transformation of your enterprise
                through consulting, engineering excellence, and scalable execution.
              </Typography>

              {/* Premium Metrics */}
              <Box
                sx={{
                  mt: 3.5,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.6,
                }}
              >
                <MetricCard
                  icon={<WorkspacePremiumIcon />}
                  title="Execution Excellence"
                  sub="On-time, within budget delivery"
                />
                <MetricCard
                  icon={<GroupsIcon />}
                  title="Distributed Teams"
                  sub="Collaborate across locations"
                />
                <MetricCard
                  icon={<RocketLaunchIcon />}
                  title="Innovation First"
                  sub="Research-led product building"
                />
              </Box>
            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: { xs: 260, md: "auto" },
            }}
          >
            <Image
              src="/about.avif"
              alt="BluAI Team Collaboration"
              fill
              priority
              style={{ objectFit: "cover" }}
            />

            {/* overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(11,20,48,0.92) 0%, rgba(11,20,48,0.55) 45%, rgba(11,20,48,0.18) 100%)",
              }}
            />


          </Box>
        </Box>




        {/* Manufacturing Infrastructure WRAPPER */}
        <Box
          sx={{
            bgcolor: "#0B1430",
            py: { xs: 2, md: 4 },
            px: { xs: 2, md: 6 },
            mt: { xs: 4, md: 5 },
            borderRadius: 3,
            boxShadow: "0 35px 90px rgba(15,23,42,0.14)",
          }}
        >
          {/* CONTENT */}
          <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>

            <Typography
              sx={{
                fontSize: { xs: 20, md: 36 },
                fontWeight: 900,
                mb: 2,
                color: "#fff",
                textAlign: "center",
              }}
            >
              Advanced{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg,#4F7BFF 0%,#1B4DFF 60%,#4F7BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Manufacturing Infrastructure
              </Box>
            </Typography>


            <Typography
              sx={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.82)",
                mb: 2,
              }}
            >
              Our manufacturing facility supports the development and deployment of
              high-precision AI powered systems. Dedicated fabrication zones,
              structured assembly lines, and rigorous quality testing ensure
              reliability across every system we build.
            </Typography>
          </Box>


          {/* IMAGE TOP */}
          <Box
            sx={{
              width: "100%",
              height: { xs: 220, sm: 340, md: 520 },
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              mb: 5,
            }}
          >
            <Image
              src="/manufacturing.jpg"
              alt="BluAI Manufacturing Facility"
              fill
              priority
              style={{
                objectFit: "cover",
              }}
            />

            {/* GRADIENT */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(11,20,48,0.95) 0%, rgba(11,20,48,0.65) 35%, rgba(11,20,48,0.15) 75%)",
              }}
            />

            {/* TEXT */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: { xs: 16, sm: 30, md: 60 },
                maxWidth: { xs: 180, sm: 280, md: 420 },
                color: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 24, md: 40 },
                  fontWeight: 900,
                  lineHeight: 1.2,
                  mb: { xs: 0.5, sm: 1, md: 2 },
                }}
              >
                Smart Manufacturing
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 13, md: 16 },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Our production facility combines advanced fabrication,
                precision assembly, and rigorous testing to build
                reliable AI-powered systems at scale.
              </Typography>
            </Box>
          </Box>



          {/* METRIC CARDS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <MetricCard
              icon={<PrecisionManufacturingIcon />}
              title="Fabrication & Assembly"
              sub="Dedicated production units"
            />

            <MetricCard
              icon={<ScienceIcon />}
              title="Testing Labs"
              sub="Advanced engineering validation"
            />

            <MetricCard
              icon={<LocalShippingIcon />}
              title="Logistics & Deployment"
              sub="Efficient inventory systems"
            />
          </Box>

        </Box>


        {/* our values */}
        <OurValues />
        <StatsSection />
        <OurSolutions />









        {/* NEW CONTENT */}
        {/* ================= TEAM ================= */}

            <OurTeamSlider team={team} />

        


        {/* ================= FAQ ================= */}

        <Box sx={{ py: 10, bgcolor: "#f8fafc" }}>
          <Container maxWidth="lg">

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 6,
                alignItems: "center",
              }}
            >
              <Box flex={1}>
                <Typography variant="h4" className="text-black text-center" fontWeight={700} mb={3}>
                  Frequently Asked Questions
                </Typography>

                {faqs?.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      {item.question}
                    </AccordionSummary>

                    <AccordionDetails>
                      {item.answer}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>


            </Box>

          </Container>
        </Box>

      </Container>

    </Box>
  );
}
