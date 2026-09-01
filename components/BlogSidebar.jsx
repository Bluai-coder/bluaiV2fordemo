"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function BlogSidebar({ blogs = [] }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on search input
  const filteredBlogs = useMemo(() => {
    if (!searchTerm) return blogs;

    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, blogs]);

  return (
    <Box
      sx={{
        position: { lg: "sticky" },
        top: 100,
      }}
    >
      <Stack
        spacing={4}
        sx={{
          p: 3,
          borderRadius: 3,
          bgcolor: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        {/* Search input */}
        <Box>
          <Typography variant="h6" sx={{ color: "#0f172a", }} fontWeight={600} gutterBottom>
            Search
          </Typography>

          <Box display="flex">
            <TextField
              fullWidth
              size="small"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton color="primary">
              <SearchOutlined className="!text-[#5b3df5]" />
            </IconButton>
          </Box>
        </Box>

        {/* Most Popular / Search Results */}
        <Box>
          <Typography sx={{ color: "#0f172a" }} variant="h6" fontWeight={600} gutterBottom>
            {searchTerm ? "Search Results" : "Most Popular"}
          </Typography>

          {filteredBlogs.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No results found
            </Typography>
          ) : (
            filteredBlogs.map((item) => (
              <Card
                key={item.id}
                onClick={() => router.push(`/blog/details/${item.id}`)}
                sx={{
                  mb: 2,
                  cursor: "pointer",
                  borderRadius: 2,
                  p: 1,
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                <Box display="flex" gap={2}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      width: 80,
                      height: 60,
                      borderRadius: 1,
                      objectFit: "cover",
                    }}
                  />

                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      lineHeight={1.3}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))
          )}
        </Box>

        {/* Tags */}
        <Box>
          <Typography sx={{ color: "#0f172a" }} variant="h6" fontWeight={600} gutterBottom>
            Tags
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {[
              "App",
              "IT",
              "Business",
              "Design",
              "Creative",
              "Smart",
              "Marketing",
            ].map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
