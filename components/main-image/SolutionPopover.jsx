"use client";

import { useState } from "react";
import { Popover, Box, Typography } from "@mui/material";

export default function SolutionPopover({ children, item }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      onClick={handlePopoverClose}
      sx={{ display: 'flex' }} // Changed to flex to prevent layout shift
    >
      {children}
      
      <Popover
        id={`popover-${item.id}`}
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
            sx: {
                backgroundColor: "rgba(5, 16, 40, 0.9)",
                backdropFilter: "blur(12px)", // Premium Glass effect
                border: "1px solid rgba(0, 210, 255, 0.3)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
                borderRadius: "12px",
                mt: 1
            }
        }}
      >
        <Box sx={{ p: 2, width: 240 }}>
           <Box 
             component="img" 
             src={item.image || "https://via.placeholder.com/240x120"} 
             alt={item.title}
             sx={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px", mb: 1.5, bgcolor: "#000" }}
           />
           <Typography variant="subtitle1" fontWeight={700} sx={{ color: "#fff" }}>
             {item.title}
           </Typography>
           <Typography variant="body2" sx={{ color: "#b0c4de", mt: 0.5, fontSize: "0.75rem" }}>
             {item.desc}
           </Typography>
           <Typography variant="body2" sx={{ color: "#b0c4de", mt: 0.5, fontSize: "0.75rem" }}>
             {item.fulldes}
           </Typography>
        </Box>
      </Popover>
    </Box>
  );
}