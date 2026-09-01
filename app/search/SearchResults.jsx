'use client';

import { Box, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  
  if (!query) {
    return (
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography color="text.secondary">
          Enter a search term to find products, blogs, and solutions.
        </Typography>
      </Box>
    );
  }
  
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Search Results for: "{query}"
      </Typography>
      <Typography color="text.secondary">
        Showing results for "{query}"
      </Typography>
    </Box>
  );
}