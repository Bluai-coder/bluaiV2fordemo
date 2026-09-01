import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f7f9ff',
        textAlign: 'center',
        py: 10,
      }}
    >
      <Container maxWidth="md">
        <Typography
          sx={{
            fontSize: { xs: 80, md: 120 },
            fontWeight: 800,
            color: '#0b1c3d',
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>
        
        <Typography
          sx={{
            fontSize: { xs: 24, md: 32 },
            fontWeight: 700,
            color: '#111827',
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>
        
        <Typography
          sx={{
            fontSize: 16,
            color: '#42526b',
            mb: 4,
            maxWidth: 500,
            mx: 'auto',
          }}
        >
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        
        {/* ✅ FIX: Use Link with legacyBehavior */}
        <Link href="/" passHref legacyBehavior>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#0b1c3d',
              '&:hover': { bgcolor: '#1a2d4d' },
              px: 4,
              py: 1.5,
              fontSize: 16,
              textTransform: 'none',
            }}
          >
            ← Return to Homepage
          </Button>
        </Link>
      </Container>
    </Box>
  );
}