import { Box, Typography, Divider } from '@mui/material';

export default function BlogHeader({
  image,
  title,
  author,
  company,
  date,
}) {
  return (
    <>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          maxHeight: 450,
          objectFit: 'cover',
          borderRadius: 3,
          mb: 4,
        }}
      />

      <Typography variant="h5" fontWeight={700} gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        {author} · {company} · {date}
      </Typography>

      <Divider sx={{ mb: 4 }} />
    </>
  );
}
