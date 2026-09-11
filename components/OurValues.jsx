// "use client";

// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Stack,
// } from "@mui/material";
// import Image from "next/image";

// const values = [
//   {
//     title: "VitalsChair™",
//     image: "/values/VitalsChair.png",
//     description:
//       "VitalsChair™, our comprehensive vitals gathering system, supporting 32+ critical health parameters.",
//   },
//   {
//     title: "Remote Patient Monitoring System",
//     image: "/values/remotemonitoring.png",
//     description:
//       "Next-generation remote monitoring integrating seamlessly with EMR, EHR, and HIS platforms.",
//   },
//   {
//     title: "Universal Data Logger Solutions",
//     image: "/values/datalogger.png",
//     description:
//       "Scalable data logging solutions supporting CAN, SPI, Ethernet, LIN, and FlexRay.",
//   },
// ];

// export default function OurValues() {
//   return (
//     <Box
//       sx={{
//         py: { xs: 7, md: 11 },
//         bgcolor: "#fff",
//         position: "relative",
//         overflow: "hidden",
//         mt:5,
//       }}
//     >


//       <Container maxWidth="lg" sx={{ position: "relative" }}>
//         {/* Header */}
//         <Stack spacing={2} alignItems="center" textAlign="center" mb={{ xs: 4, md: 6 }}>
//           <Box
//             sx={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 1,
//               px: 2,
//               py: 0.9,
//               borderRadius: 99,
//               bgcolor: "rgba(27,77,255,0.10)",
//               border: "1px solid rgba(27,77,255,0.18)",
//             }}
//           >
//             {/* <VerifiedIcon sx={{ fontSize: 18, color: "#1B4DFF" }} /> */}
//             <Typography
//               sx={{
//                 fontWeight: 900,
//                 fontSize: 12,
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//                 color: "#1B4DFF",
//               }}
//             >
//               Our Values
//             </Typography>
//           </Box>

//           <Typography
//             sx={{
//               fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.4rem" },
//               fontWeight: 950,
//               lineHeight: 1.15,
//               color: "#07122C",
//               maxWidth: 920,
//             }}
//           >
//             Harnessing technology for a brighter future
//           </Typography>

//           <Typography
//             sx={{
//               maxWidth: 860,
//               color: "rgba(7,18,44,0.65)",
//               fontSize: 14.5,
//               lineHeight: 1.9,
//             }}
//           >
//             At BluAI, we craft complex embedded systems by integrating hardware, user interfaces,
//             and advanced software. Our expertise extends to connectivity and proximity
//             technologies, ensuring your products are always connected and responsive.
//           </Typography>
//         </Stack>

//         {/* Cards (NO GRID) */}
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: { xs: 2.2, md: 3 },
//             justifyContent: "center",
//             alignItems: "stretch",
//           }}
//         >
//           {values.map((item) => (
//             <Box
//               key={item.title}
//               sx={{
//                 width: { xs: "100%", sm: "calc(50% - 12px)", lg: "calc(33.33% - 16px)" },
//                 maxWidth: 420,
//               }}
//             >
//               <Paper
//                 elevation={0}
//                 sx={{
//                   height: "100%",
//                   borderRadius: 4,
//                   bgcolor: "rgba(255,255,255,0.88)",
//                   border: "1px solid rgba(227,232,255,0.95)",
//                   overflow: "hidden",
//                   boxShadow: "0 18px 45px rgba(15,23,42,0.06)",
//                   transition: "0.28s ease",
//                   "&:hover": {
//                     transform: "translateY(-8px)",

//                   },
//                 }}
//               >
//                 {/* premium top line */}
//                 <Box
//                   sx={{
//                     height: 4,
//                     width: "100%",
//                     background:
//                       "linear-gradient(90deg, rgba(27,77,255,0.95), rgba(27,77,255,0.0))",
//                   }}
//                 />

//                 <Box sx={{ p: { xs: 2.6, md: 3.2 } }}>
//                   {/* Image Container */}
//                   <Box
//                     sx={{
//                       width: "100%",
//                       borderRadius: 3,
//                       bgcolor: "#F7F9FF",
//                       border: "1px solid rgba(227,232,255,0.9)",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       py: 3,
//                       mb: 2.4,
//                       position: "relative",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {/* subtle overlay */}
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         inset: 0,
//                         background:
//                           "radial-gradient(closest-side, rgba(27,77,255,0.14), transparent 70%)",
//                         opacity: 0.65,
//                       }}
//                     />

//                     <Box sx={{ position: "relative" }}>
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         width={240}
//                         height={150}
//                         style={{ objectFit: "contain" }}
//                       />
//                     </Box>
//                   </Box>

//                   {/* Text */}
//                   <Typography
//                     sx={{
//                       fontWeight: 950,
//                       fontSize: 16.5,
//                       mb: 1,
//                       textAlign: "center",
//                       color: "#07122C",
//                     }}
//                   >
//                     {item.title}
//                   </Typography>

//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       color: "rgba(7,18,44,0.65)",
//                       textAlign: "center",
//                       lineHeight: 1.75,
//                     }}
//                   >
//                     {item.description}
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }


"use client";

import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import Image from "next/image";

const values = [
  {
    title: "VitalsChair™",
    image: "/values/VitalsChair.png",
    description:
      "VitalsChair™, our comprehensive vitals gathering system, supporting 32+ critical health parameters.",
  },
  {
    title: "Remote Patient Monitoring System",
    image: "/values/remotemonitoring.png",
    description:
      "Next-generation remote monitoring integrating seamlessly with EMR, EHR, and HIS platforms.",
  },
  {
    title: "Universal Data Logger Solutions",
    image: "/values/datalogger.png",
    description:
      "Scalable data logging solutions supporting CAN, SPI, Ethernet, LIN, and FlexRay.",
  },
];

export default function OurValues() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 8 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl" >
        {/* Header */}
        <Stack spacing={2}  mb={{ xs: 5, md: 7 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 12,
              textAlign: "center",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1B4DFF",
            }}
          >
            Our Values
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.5rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              textAlign: "center",
              color: "#0A0F1F",
              maxWidth: "100%",
              letterSpacing: -0.5,
            }}
          >
            Harnessing technology for a brighter future
          </Typography>

          <Typography
            sx={{
              maxWidth: "100%",
              color: "#5A6478",
              fontSize: { xs: 14.5, md: 15.5 },
              lineHeight: 1.8,
            }}
          >
            At BluAI, we craft complex embedded systems by integrating hardware, user interfaces,
            and advanced software. Our expertise extends to connectivity and proximity
            technologies, ensuring your products are always connected and responsive.
          </Typography>
        </Stack>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2.5, md: 3 },
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {values.map((item) => (
            <Box
              key={item.title}
              sx={{
                width: { xs: "100%", sm: "calc(50% - 12px)", lg: "calc(33.33% - 16px)" },
                maxWidth: 480,
                display: "flex",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 4,
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E8ECF5",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.10)",
                    borderColor: "#1B4DFF",
                  },
                }}
              >
                <Box sx={{ p: { xs: 2.5, md: 3 }, display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Image Container */}
                  <Box
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      bgcolor: "#F7F9FF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      py: 3,
                      mb: 2.5,
                      minHeight: 180,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={220}
                      height={140}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 17,
                      mb: 1.2,
                      textAlign: "center",
                      color: "#0A0F1F",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#5A6478",
                      textAlign: "center",
                      lineHeight: 1.75,
                      flex: 1,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}