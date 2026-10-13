import { Box, Typography, Divider } from '@mui/material';

export default function BlogHeader({
  image,
 
}) {
  return (
    <>
      <Box
        component="img"
        src={image}
        alt={null}
        sx={{
          width: '100%',
          maxHeight: 450,
          objectFit: 'cover',
          borderRadius: 3,
          mb: 4,
        }}
      />
    </>
  );
}
