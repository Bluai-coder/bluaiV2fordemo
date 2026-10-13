
'use client';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import BlogSidebar from '../../../components/BlogSidebar';
import BlogCard from '../../../components/BlogCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
// utils/transformBlog.js
export const transformBlog = (apiBlog) => {
  const html = apiBlog.text || "";

  // 1. Extract title — first <h2><strong>...</strong></h2>
  const titleMatch = html.match(/<h2>\s*<strong>(.*?)<\/strong>\s*<\/h2>/i);
  const title = titleMatch ? titleMatch[1].trim() : "Untitled";

  // 2. Extract excerpt — strip all HTML, remove the title line, truncate
  const plainText = html
    .replace(/<[^>]*>/g, " ")      // strip tags
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")          // collapse whitespace
    .trim();

  // Remove the repeated title from the start of the plain text
  const withoutTitle = plainText.startsWith(title)
    ? plainText.slice(title.length).trim()
    : plainText;

  const excerpt =
    withoutTitle.length > 200
      ? withoutTitle.slice(0, 200).trim() + "..."
      : withoutTitle;

  // 3. Format date
  const date = new Date(apiBlog.date_with_time).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return {
    id: apiBlog.id,
    title,
    image: apiBlog.image,
    author: `${apiBlog.post_by} - BluAI`,
    date,
    excerpt,
    // keep the raw HTML if you need it for a detail page
    content: html,
  };
};

export default function BlogPage() {

  const isDark = false;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://siteadminapi.bluai.ai/api/v1/blogs");
        const raw = response?.data?.data || [];
        setBlogs(raw.map(transformBlog));
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setError("Unable to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Box component="main" className="mt-15 bg-white">
      {/* ... your existing hero section stays the same ... */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl" sx={{
          px: { xs: 2, sm: 4, md: 7 },
        }}>
          <Box textAlign="center" className="mt-0" mb={0}>
            <Typography
              variant="caption"
              sx={{
                textAlign: "center",
                fontWeight: 800,
                fontSize: { xs: 24, sm: 28, md: 32 },
                color: isDark ? "#ffffff" : "#0f172a",
                mb: { xs: 4, md: 5 },
              }}
            >
              Our Latest Articles & Blogs
            </Typography>
          </Box>

          <Typography
            className="!mb-0"
            sx={{
              textAlign: "center",
              fontWeight: 400,
              fontSize: { xs: 16, sm: 20, md: 22 },
              color: isDark
                ? "rgba(255,255,255,0.78)"
                : "#0f172a",
              mb: { xs: 4, md: 5 },
            }}
          >
            At BluAI, we are passionate about shaping a brighter future. Founded
            with a focus on cutting-edge product development and research, we
            tackle the tech industry’s toughest challenges.
          </Typography>
        </Container>

      </Box>

      <Container maxWidth="xl" className="!pt-0" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 4, md: 10 } }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" textAlign="center" py={6}>{error}</Typography>
        ) : (
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start', flexDirection: { xs: 'column', lg: 'row' } }}>
            {/* LEFT: Blog List */}
            <Box sx={{ flex: 1, maxWidth: { lg: '66.666%' }, width: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {blogs?.map((blog) => (
                  <BlogCard key={blog.id} {...blog} />
                ))}
              </Box>
            </Box>

            {/* RIGHT: Sidebar */}
            <Box sx={{ width: { xs: '100%', lg: '33.333%' }, flexShrink: 0 }}>
              <BlogSidebar blogs={blogs} />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}