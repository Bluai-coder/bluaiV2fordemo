import { Suspense } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import SearchResults from './SearchResults';

export const metadata = {
  title: "Search - BluAI",
  description: "Search BluAI products and solutions",
  robots: "noindex, follow",
};

export default function SearchPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f7f9ff', py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom textAlign="center">
          Search BluAI
        </Typography>
        
        <Box component="form" action="/search" method="get" sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <TextField
            name="q"
            placeholder="Search products, blogs..."
            fullWidth
            size="large"
          />
          <Button type="submit" variant="contained" size="large">
            Search
          </Button>
        </Box>
        
        <Suspense fallback={<div>Loading results...</div>}>
          <SearchResults />
        </Suspense>
      </Container>
    </Box>
  );
}