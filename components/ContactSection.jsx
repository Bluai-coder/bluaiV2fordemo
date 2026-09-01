"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LocationTabs } from "../components/LocationTabs"
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Image from "next/image";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const [tab, setTab] = useState(0);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <Box
    >
      {/* Hero image */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: {
            xs: "40vh",     // mobile safe
            sm: "70vh",
            md: "70vh",    // desktop
          },
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Image
          src="/contact-us.jpg"
          alt="Medical AI Hero"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
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
            // sx={{
            //   fontWeight: 700,
            //   fontSize: {
            //     xs: "2rem",
            //     sm: "2.6rem",
            //     md: "3.8rem",
            //   },
            //   lineHeight: 1.15,
            //   maxWidth: 900,
            // }}
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: 36, sm: 46, md: 56 },
              letterSpacing: "-0.02em",
            }}
          >
            <Box component="span" className="!text-white" color="text.primary">
              Contact{" "}
            </Box>
            <Box component="span" className="!text-[#1b4dff]" color="primary.main">
              Us
            </Box>
          </Typography>


          {/* <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.25rem",
            },
            maxWidth: 700,
            opacity: 0.9,
          }}
        >
         We'd Love To Hear From You


        </Typography> */}

          
        </Box>
      </Box>

      {/* ===== HEADER ===== */}
           <Stack spacing={2} style={{ marginTop:12}} alignItems="center" textAlign="center" mb={{ xs: 4, md: 6 }}>

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
            {/* <VerifiedIcon sx={{ fontSize: 18, color: "#1B4DFF" }} /> */}
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1B4DFF",
               
              }}
            >
              We would love to hear from you
            </Typography>
          </Box>
        </Stack>

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
        >



          {/* ===== LEFT CARD ===== */}
          <Paper
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={3}>
              Get In Touch
            </Typography>

            <Stack spacing={2}>
              {/* <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon color="" className="!text-[#1b4dff]" />
                <Typography variant="body2">
                  US: +1 302-238-1512
                </Typography>
              </Stack> */}
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon color="" className="!text-[#1b4dff]" />
                <Typography variant="body2">
                  India: 0172-456-8962
                </Typography>
              </Stack>

              <Typography variant="h6" fontWeight={600} mb={3}>
                Find us Here
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOnIcon color="" className="!text-[#1b4dff]" />
                <Typography variant="body2">
                  BluAI Inc., 8 The Green, Suite #17716, Dover, DE 19901, USA
                </Typography>
              </Stack><Stack direction="row" spacing={2} alignItems="center">
                <LocationOnIcon color="" className="!text-[#1b4dff]" />
                <Typography variant="body2">
                  BluAI Inc., 143 Cadycenter, Suite 173, Northville, MI 48167, USA
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOnIcon color="" className="!text-[#1b4dff]" />
                <Typography variant="body2">
                  BluAI Private Ltd., CPM-17, Suite #317, Center Plaza Emaar, Sector 105, Mohali, Punjab 140307 India
                </Typography>
              </Stack>
              {/* <Stack direction="row" spacing={1}>
                <IconButton><FacebookIcon /></IconButton>
                <IconButton><InstagramIcon /></IconButton>
                <IconButton><YouTubeIcon /></IconButton>
              </Stack> */}
            </Stack>
          </Paper>


          {/* ===== RIGHT FORM CARD ===== */}
          <Paper
            sx={{
              flex: 2,
              p: { xs: 2, md: 3 },
              borderRadius: 3,
            }}
          >


            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={2}>
                {/* Name + Email */}
                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  <TextField
                    label="Name"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />

                  <TextField
                    label="E-mail"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </Stack>

                {/* Mobile + Company */}
                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  {/* Mobile */}
                  <TextField
                    label="Mobile Number"
                    fullWidth
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Enter a valid mobile number",
                      },
                    })}
                  />

                  <TextField
                    label="Company Name"
                    fullWidth
                    error={!!errors.company}
                    helperText={errors.company?.message}
                    {...register("company", {
                      required: "Company name is required",
                    })}
                  />
                </Stack>


                {/* Subject */}
                <TextField
                  label="Subject"
                  fullWidth
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                />
                {/* Message */}
                <TextField
                  label="Your Message"
                  multiline
                  rows={4}
                  fullWidth
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />

                {/* Submit */}
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 2,
                      px: 6,
                      py: 1.2,
                      borderRadius: 20,
                      backgroundColor: "#1b4dff",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Stack>
            </form>

          </Paper>
        </Stack>

        <LocationTabs />
      </Container>
    </Box>
  );
}
