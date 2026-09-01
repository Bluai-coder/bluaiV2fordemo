import { Box, Chip } from '@mui/material';

export default function BlogTags({ tags }) {
  return (
    <Box display="flex" gap={1} flexWrap="wrap" mt={4}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} size="small" />
      ))}
    </Box>
  );
}
