"use client";

import React from "react";
import { Box, Container, Typography, Stack, Chip, Paper, Divider } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";

export default function InvestorEnquiryPremium() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F4F7FB",
        pb: 8,
      }}
    >
 

      {/* Content */}
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <InvestorForm/>
          {/* <Box
            // sx={{
            //   borderRadius: 3,
            //   overflow: "hidden",
            //   border: "1px solid rgba(15,23,42,0.12)",
            //   background: "#F8FAFF",
            // }}
          >
            <iframe
              width="1200px"
              height="700px"
               src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=iF5s3xEGykaBE0RdEYLa694stZzbkzJJnq-9BcoROOdUMVRJUVJMV1BFOFhKNTZKWjZUNEtFM1hEMi4u&embed=true"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              style={{
                border: "none",
                width: "100%",
                height: "78vh",
              }}
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              msallowfullscreen="true"
            />
          </Box> */}
      </Container>
    </Box>
  );
}

/* ---------------------------- */
/* Category Block Component     */
/* ---------------------------- */
function CategoryCard({ icon, title, items }) {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        borderRadius: 2.5,
        background: "linear-gradient(180deg, rgba(27,77,255,0.06), rgba(124,58,237,0.04))",
        border: "1px solid rgba(27,77,255,0.14)",
      }}
    >
      <Stack direction="row" spacing={1.2} alignItems="center">
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            display: "grid",
            placeItems: "center",
            bgcolor: "rgba(27,77,255,0.10)",
            color: "#1B4DFF",
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography sx={{ fontWeight: 900, fontSize: 14.5, color: "#0F172A" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: 12.5, color: "rgba(15,23,42,0.70)", mt: 0.2 }}>
            {items.join(" • ")}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
