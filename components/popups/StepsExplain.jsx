// import * as React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   Button,
//   Typography,
//   Box,
//   Chip,
//   Divider,
// } from "@mui/material";

// export default function StepsExplain({ data, handleClose, open }) {
//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       maxWidth="sm"
//       fullWidth
//       scroll="paper"
//       PaperProps={{
//         sx: {
//           borderRadius: 4,
//           overflow: "hidden",
//         },
//       }}
//     >
//       {/* Header */}
//       <DialogTitle
//         sx={{
//           background:
//             "linear-gradient(135deg, #1b4dff 0%, #1b4dff 100%)",
//           color: "#fff",
//           py: 3,
//         }}
//       >
//         <Box display="flex" alignItems="center" gap={2}>
//           <Chip
//             label={data?.name}
//             sx={{
//               bgcolor: "rgba(255,255,255,0.2)",
//               color: "#fff",
//               fontWeight: 600,
//             }}
//           />

//           <Typography variant="h6"  fontWeight={700}>
//             {data?.des}
//           </Typography>
//         </Box>
//       </DialogTitle>

//       {/* Scrollable Content */}
//       <DialogContent
//         sx={{
//           py: 4,
//           maxHeight: "60vh",   // 🔥 controls height
//           overflowY: "auto",   // 🔥 enables scroll
//         }}
//       >
//         <Typography
//           variant="body1"
//           className="!mt-4"
//           sx={{
//             color: "#334155",
//             lineHeight: 1.7,
//             fontSize: 15,
//           }}
//         >
//           {data?.details}
//         </Typography>

//         <Divider sx={{ my: 3 }} />

//         <Box
//           sx={{
//             p: 2,
//             borderRadius: 2,
//             bgcolor: "#eff6ff",
//             border: "1px solid #dbeafe",
//           }}
//         >
//           <Typography variant="caption" color="#1b4dff" fontWeight={600}>
//             Note
//           </Typography>

//           <Typography variant="body2" sx={{ color: "#1e293b", mt: 0.5 }}>
//             Ensure proper authentication and device connectivity before
//             proceeding with this step to avoid workflow interruptions.
//           </Typography>
//         </Box>

//         {/* Button */}
//         <Box display="flex" justifyContent="flex-end" mt={4}>
//           <Button
//             onClick={handleClose}
//             variant="contained"
//             sx={{
//               borderRadius: 2,
//               px: 3,
//               background:
//                 "linear-gradient(135deg, #1b4dff 0%, #1b4dff 100%)",
//             //   boxShadow: "0 6px 20px #6f8eff",
//             }}
//           >
//             Close
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// }





"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";

export default function StepsExplain({ data, handleClose, open }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          background: "linear-gradient(135deg, #1b4dff 0%, #1b4dff 100%)",
          color: "#fff",
          py: 3,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Chip
            label={data?.name}
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              color: "#fff",
              fontWeight: 600,
            }}
          />

          <Typography variant="h6" fontWeight={700}>
            {data?.des}
          </Typography>
        </Box>
      </DialogTitle>

      {/* Content */}
      <DialogContent
        sx={{
          py: 4,
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        {/* Step Details */}
        <Box
          sx={{
            mt: 2,
            color: "#334155",
            lineHeight: 1.7,
            fontSize: 15,
            "& p": { mb: 1.5 },
            "& ul": { pl: 2 },
            "& li": { mb: 0.8 },
          }}
          dangerouslySetInnerHTML={{ __html: data?.details }}
        />

        <Divider sx={{ my: 3 }} />

        {/* Note */}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "#eff6ff",
            border: "1px solid #dbeafe",
          }}
        >
          <Typography variant="caption" color="#1b4dff" fontWeight={600}>
            Note
          </Typography>

          <Typography variant="body2" sx={{ color: "#1e293b", mt: 0.5 }}>
            Ensure proper authentication and device connectivity before
            proceeding with this step to avoid workflow interruptions.
          </Typography>
        </Box>

        {/* Close Button */}
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              borderRadius: 2,
              px: 3,
              background: "linear-gradient(135deg, #1b4dff 0%, #1b4dff 100%)",
            }}
          >
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}