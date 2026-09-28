
"use client";

import { useState, useEffect, useMemo } from "react";
import { Box, Container, Tabs, Tab, Typography, Paper, Stack, Button, Divider} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PublicIcon from "@mui/icons-material/Public";

/* ============================================================
   DATA
   ============================================================ */

const locations = [
  {
    id: "dover-usa",
    label: "Dover, USA",
    country: "United States",
    address:
      "BluAI Inc., 8 The Green, Suite #17716, Dover, DE 19901, USA",
    phone: "+1 302-238-1512",
    lat: 39.1582,
    lng: -75.5244,
    mapUrl:
      "https://www.google.com/maps?q=8+The+Green,+Dover,+DE+19901,+USA&output=embed",
  },
  {
    id: "northville-usa",
    label: "Northville, USA",
    country: "United States",
    address:
      "BluAI Inc., 143 Cadycenter, Suite 173, Northville, MI 48167, USA",
    phone: "+1 302-238-1512",
    lat: 42.4313,
    lng: -83.4835,
    mapUrl:
      "https://www.google.com/maps?q=143+Cadycenter,+Northville,+MI+48167,+USA&output=embed",
  },
  {
    id: "mohali-india",
    label: "Mohali, India",
    country: "India",
    address:
      "BluAI Private Ltd., CPM-17, Suite #317, Center Plaza Emaar, Sector 105, Mohali, Punjab 140307, India",
    phone: "0172-456-8962",
    lat: 30.6597,
    lng: 76.7255,
    mapUrl:
      "https://www.google.com/maps?q=Center+Plaza+Emaar,+Sector+105,+Mohali,+Punjab,+India&output=embed",
  },
];

/* ============================================================
   HELPERS
   ============================================================ */

// Haversine distance in km
const getDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Find nearest from list
const findNearest = (lat, lng, list) => {
  let nearest = list[0];
  let minDist = Infinity;
  list.forEach((loc) => {
    const d = getDistance(lat, lng, loc.lat, loc.lng);
    if (d < minDist) {
      minDist = d;
      nearest = loc;
    }
  });
  return nearest;
};

// Silent IP-based geolocation (no browser permission popup)
const getCoordsFromIP = async () => {
  try {
    const res = await fetch("https://ipwho.is/", {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.success || !data.latitude || !data.longitude) return null;
    return { lat: data.latitude, lng: data.longitude };
  } catch (err) {
    console.warn("⚠️ IP geolocation failed:", err.message);
    return null;
  }
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export function LocationTabs() {
  const [value, setValue] = useState(0);
  const [orderedLocations, setOrderedLocations] = useState(locations);

  // Silent nearest-location detection on mount
  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      const coords = await getCoordsFromIP();
      if (!coords || cancelled) return;

      const nearest = findNearest(coords.lat, coords.lng, locations);

      // Move nearest to first position; keep others in original order
      const reordered = [
        nearest,
        ...locations.filter((l) => l.id !== nearest.id),
      ];

      setOrderedLocations(reordered);
      setValue(0); // auto-select nearest
    };

    detect();

    return () => {
      cancelled = true;
    };
  }, []);

  const activeLocation = useMemo(
    () => orderedLocations[value] || orderedLocations[0],
    [orderedLocations, value],
  );

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fff",
        py: { xs: 7, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27,77,255,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,163,255,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* ─── Section header ─── */}
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 5, md: 7 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.8,
              borderRadius: 999,
              bgcolor: "rgba(27,77,255,0.08)",
              border: "1px solid rgba(27,77,255,0.18)",
            }}
          >
            <PublicIcon sx={{ fontSize: 14, color: "#1B4DFF" }} />
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1B4DFF",
              }}
            >
              Find Us Here
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 900,
              color: "#07122C",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: 780,
              mx: "auto",
            }}
          >
            Visit Our{" "}
            <Box
              component="span"
              sx={{
                background:
                  "#1B4DFF",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Global Offices.
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 14, md: 16 },
              color: "rgba(7,18,44,0.6)",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Three offices. One team. Reach out to the location closest to you.
          </Typography>
        </Stack>

        {/* ─── Tabs ─── */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            overflowX: "auto",
            mb: { xs: 3, md: 4 },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Tabs
            value={value}
            onChange={(e, v) => setValue(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              maxWidth: "100%",
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", sm: "center" },
                gap: 1,
              },
              "& .MuiTabs-scrollButtons": {
                display: { xs: "flex", sm: "none" },
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 800,
                fontSize: 13.5,
                borderRadius: 999,
                px: { xs: 2.2, sm: 2.8 },
                py: 0.8,
                minHeight: 40,
                whiteSpace: "nowrap",
                color: "rgba(7,18,44,0.7)",
                border: "1px solid rgba(227,232,255,0.95)",
                bgcolor: "#fff",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "rgba(27,77,255,0.05)",
                  borderColor: "rgba(27,77,255,0.3)",
                  color: "#1B4DFF",
                },
                "&.Mui-selected": {
                  background:
                    "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
                  color: "#fff",
                  borderColor: "transparent",
                  boxShadow: "0 14px 30px -12px rgba(27,77,255,0.6)",
                },
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {orderedLocations.map((loc) => (
              <Tab key={loc.id} label={loc.label} disableRipple />
            ))}
          </Tabs>
        </Box>

        {/* ─── Content ─── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.6fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* ─── Address Card ─── */}
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              p: { xs: 3, md: 3.5 },
              borderRadius: 5,
              background:
                "linear-gradient(160deg, #F7F9FF 0%, #EEF2FF 100%)",
              border: "1px solid rgba(227,232,255,0.95)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(27,77,255,0.15) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", flex: 1 }}>
              {/* Country tag */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.5,
                  py: 0.6,
                  borderRadius: 999,
                  bgcolor: "rgba(27,77,255,0.10)",
                  border: "1px solid rgba(27,77,255,0.20)",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#1B4DFF",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 10.5,
                    fontWeight: 800,
                    color: "#1B4DFF",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {activeLocation.country}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#07122C",
                  fontSize: { xs: "1.4rem", md: "1.55rem" },
                  letterSpacing: "-0.01em",
                  mb: 2.5,
                  lineHeight: 1.2,
                }}
              >
                {activeLocation.label}
              </Typography>

              <Divider sx={{ mb: 2.5, borderColor: "rgba(27,77,255,0.12)" }} />

              {/* Address */}
              <Stack
                direction="row"
                spacing={1.6}
                alignItems="flex-start"
                sx={{ mb: 2.4 }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 8px 20px -8px rgba(27,77,255,0.7)",
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: 10.5,
                      fontWeight: 800,
                      color: "#1B4DFF",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      mb: 0.4,
                    }}
                  >
                    Address
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13.5,
                      color: "rgba(7,18,44,0.78)",
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    {activeLocation.address}
                  </Typography>
                </Box>
              </Stack>

              {/* Phone */}
              <Stack
                direction="row"
                spacing={1.6}
                alignItems="flex-start"
                sx={{ mb: 3 }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 8px 20px -8px rgba(27,77,255,0.7)",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 18 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: 10.5,
                      fontWeight: 800,
                      color: "#1B4DFF",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      mb: 0.4,
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    component="a"
                    href={`tel:${activeLocation.phone.replace(/\s|-/g, "")}`}
                    sx={{
                      fontSize: 14,
                      color: "#0B1220",
                      fontWeight: 800,
                      textDecoration: "none",
                      "&:hover": { color: "#1B4DFF" },
                    }}
                  >
                    {activeLocation.phone}
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* CTA */}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={() =>
                window.open(
                  activeLocation.mapUrl.replace("&output=embed", ""),
                  "_blank"
                )
              }
              sx={{
                mt: "auto",
                background:
                  "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
                color: "#fff",
                textTransform: "none",
                fontWeight: 800,
                fontSize: "0.9rem",
                borderRadius: 999,
                px: 3,
                py: 1.2,
                boxShadow: "0 14px 35px rgba(27,77,255,0.30)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 20px 45px rgba(27,77,255,0.40)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Get Directions
            </Button>
          </Paper>

          {/* ─── Map Card ─── */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 5,
              overflow: "hidden",
              border: "1px solid rgba(227,232,255,0.95)",
              boxShadow: "0 30px 80px -40px rgba(27,77,255,0.25)",
              minHeight: { xs: 320, md: 440 },
              background:
                "linear-gradient(160deg, #F7F9FF 0%, #EEF2FF 100%)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background:
                  "linear-gradient(90deg, #1B4DFF 0%, #00A3FF 100%)",
                zIndex: 2,
              }}
            />

            <iframe
              key={activeLocation.id}
              src={activeLocation.mapUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
                minHeight: "100%",
                filter: "saturate(0.95)",
              }}
              loading="lazy"
              title={`${activeLocation.label} map`}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}