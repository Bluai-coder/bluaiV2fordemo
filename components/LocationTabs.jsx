"use client"
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const locations = [
    {
      id: "dover-usa",
      label: "Dover, USA",
      address:
        "BluAI Inc., 8 The Green, Suite #17716, Dover, DE 19901, USA",
      phone: "+1 302-238-1512",
      mapUrl:
        "https://www.google.com/maps?q=8+The+Green,+Dover,+DE+19901,+USA&output=embed",
    },
    {
      id: "northville-usa",
      label: "Northville, USA",
      address:
        "BluAI Inc., 143 Cadycenter, Suite 173, Northville, MI 48167, USA",
      phone: "+1 302-238-1512",
      mapUrl:
        "https://www.google.com/maps?q=143+Cadycenter,+Northville,+MI+48167,+USA&output=embed",
    },
    {
      id: "mohali-india",
      label: "Mohali, India",
      address:
        "BluAI Private Ltd., CPM-17, Suite #317, Center Plaza Emaar, Sector 105, Mohali, Punjab 140307, India",
      phone: "0172-456-8962",
      mapUrl:
        "https://www.google.com/maps?q=Center+Plaza+Emaar,+Sector+105,+Mohali,+Punjab,+India&output=embed",
    },
  ];

export function LocationTabs() {
  const [value, setValue] = useState(0);



  const activeLocation = locations[value];

  return (
    <Box sx={{ backgroundColor: "#fff", py: { xs: 6, md: 8 }, mt:2 }}>
      <Container maxWidth="xl">
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
              Find Us Here
            </Typography>
          </Box>
        </Stack>


        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            overflowX: "auto",
          }}
        >
          <Tabs
            value={value}
            onChange={(e, v) => setValue(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              mb: 4,
              maxWidth: "100%",

              /* CENTER LOGIC */
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", sm: "center" },
                gap: 1,
              },

              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 500,
                borderRadius: 20,
                px: { xs: 2, sm: 3 },
                minHeight: 38,
                whiteSpace: "nowrap",
              },

              "& .Mui-selected": {
                backgroundColor: "#1b4dff",
                color: "#fff !important",
              },

              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {locations.map((loc) => (
              <Tab key={loc.id} label={loc.label} />
            ))}
          </Tabs>
        </Box>


        {/* Content */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
        >
          {/* Address Card */}
          <Paper
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography fontWeight={600} mb={1}>
              {activeLocation.label}
            </Typography>



            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOnIcon color="" className="!text-[#1b4dff]" />
              <Typography variant="body2">
                {activeLocation.address}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" className="mt-2">
              <PhoneIcon color="" className="!text-[#1b4dff]" />
              <Typography variant="body2">
                {activeLocation.phone}

              </Typography>
            </Stack>

          </Paper>

          {/* Map */}
          <Box
            sx={{
              flex: 2,
              height: { xs: 260, md: 360 },
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <iframe
              src={activeLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
