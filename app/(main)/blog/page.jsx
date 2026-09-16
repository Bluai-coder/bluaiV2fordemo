'use client';
import { Container, Box, Typography, useMediaQuery } from '@mui/material';
import BlogSidebar from '../../../components/BlogSidebar';
import BlogCard from '../../../components/BlogCard';
import { useMemo } from 'react';
import { getTheme } from '../../../theme';

const blogs = [
  {
    id: 1,
    title:
      'The Future of Healthcare: How Facial Expression Analysis is Revolutionizing Medical Monitoring',
    image: '/recent-blog/blog1.webp',
    author: 'Anurag Shrivastva - BluAI',
    date: 'Dec 10, 2025',
    excerpt:
      'Healthcare technology has evolved dramatically over the past decade, moving from basic monitoring systems to sophisticated, AI-driven solutions...',
  },
  {
    id: 2,
    title:
      'Face Recognition Attendance in EAMMS: The Next Step in Smart Workforce Management',
    image: '/hero-popup/face.png',
    author: 'Himanshu - BluAI',
    date: 'Nov 20, 2025',
    excerpt:
      'In a world where workplaces are evolving rapidly, organizations need attendance solutions that are fast, secure, and completely touchless...',
  },
  {
    id: 3,
    title:
      'Embedded Technology: The Backbone of the IoT Revolution',
    image: '/blog/blog-4.png',
    author: 'AdminBluAI',
    date: 'June 13, 2024',
    excerpt:
      'Embedded technology lies at the core of the Internet of Things (IoT), powering a wide array of devices, from smart home gadgets to industrial automation systems. These technologies are transforming industries by making devices more intelligent and connected...',
  },
  {
    id: 4,
    title:
      'ADAS and LiDAR: Shaping the Future of Autonomous Driving',
    image: '/blog/blog-5.jpg',
    author: 'AdminBluAI',
    date: 'June 13, 2024',
    excerpt:
      'Advanced Driver Assistance Systems (ADAS) and Light Detection and Ranging (LiDAR) technologies are critical in making vehicles smarter, safer, and more autonomous...',
  },
  {
    id: 5,
    title:
      'Autonomous Vehicles: The Road to Full Automation',
    image: '/blog/blog-6.jpg',
    author: 'AdminBluAI',
    date: 'June 13, 2024',
    excerpt:
      'Autonomous vehicles (AVs) are rapidly becoming a reality, with companies like Tesla, Waymo, and GM Cruise leading the charge. The integration of AI, sensors, and data processing has paved the way for safer and more efficient transportation systems...',
  },
  {
    id: 6,
    title:
      'Bluai Office Culture: A Vision of Innovation and Collaboration',
    image: '/recent-blog/blog3.webp',
    author: 'AdminBluAI',
    date: 'June 14, 2024',
    excerpt:
      'At Bluai, our office culture is a reflection of our commitment to fostering innovation, collaboration, and continuous learning. We believe in creating an environment where creativity thrives and employees feel empowered to pursue their passions...',
  },
  {
    id: 7,
    title:
      'Data and Machine Learning: Driving Innovation Across Industries',
    image: '/blog/blog-2.jpg',
    author: 'AdminBluAI',
    date: 'June 19, 2024',
    excerpt:
      'Data and machine learning are at the heart of today’s digital transformation, reshaping industries such as healthcare, finance, retail, and automotive...',
  },
  {
    id: 8,
    title:
      'The Future of Medical Technology: Innovations Transforming Healthcare',
    image: '/blog/blog-3.png',
    author: 'AdminBluAI',
    date: 'June 20, 2024',
    excerpt:
      'Medical technology is evolving at a rapid pace, revolutionizing how healthcare is delivered. From AI-driven diagnostics to wearable devices and robotic surgeries, these advancements are pushing the boundaries of modern medicine...',
  },
  {
    id: 9,
    title:
      'Revolutionizing Sports Performance with Smart Technology',
    image: '/blog/blog-7.png',
    author: 'Anurag Shrivastva',
    date: 'April 05, 2025',
    excerpt:
      'In today’s high-performance sports landscape, outcomes are often determined by the smallest of margins—fractions of a second or subtle shifts in position. However, metrics like speed and distance, while essential, only scratch the surface. True performance enhancement comes from deeper insights—understanding every movement, every motion, and every metric that defines athletic potential...',
  },
  // add remaining blogs here
];



export default function BlogPage() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => getTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );
  const isDark = theme.palette.mode == "dark";


  return (
    <Box component="main" className='mt-15'>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl"  sx={{
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

      <Container maxWidth="xl" className='!pt-0' sx={{ py: { xs: 4, md: 6 } , px: { xs: 2, sm: 4, md: 10 }, }}>
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            alignItems: 'flex-start',
            flexDirection: {
              xs: 'column',
              lg: 'row',
            },
          }}
        >
          {/* LEFT: Blog List */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { lg: '66.666%' },
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {blogs.map((blog, index) => (
                <BlogCard
                  key={index} {...blog} />
              ))}
            </Box>
          </Box>

          {/* RIGHT: Sidebar */}
          <Box
            sx={{
              width: { xs: '100%', lg: '33.333%' },
              flexShrink: 0,
            }}
          >
            <BlogSidebar blogs={blogs}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
