"use client"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useRouter } from 'next/navigation';



export default function BlogCard({
    id,
  title,
  image,
  author,
  date,
  excerpt,
}) {
    const router = useRouter()
  return (
    <Card sx={{ borderRadius: 3 , width : "100%" }} onClick={() => router.push(`/blog/details/${id}`)} >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: { xs: 200, md: 300 } }}
      />

      <CardContent>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {author} • {date}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {excerpt}
        </Typography>

        <Box mt={2}>
          <Button variant="contained" className='!bg-[#1b4dff]' size="small">
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
