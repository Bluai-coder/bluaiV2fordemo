
import { Container, Box } from '@mui/material';
import { BLOG_DETAILS } from '../../../../../components/data/blogs';
import BlogTags from '../../../../../components/single-details-blogs/BlogTags';
import BlogHero from '../../../../../components/single-details-blogs/BlogHero';
import BlogHeader from '../../../../../components/single-details-blogs/BlogHeader';
import BlogContent from '../../../../../components/single-details-blogs/BlogContent';

export function generateStaticParams() {
  return BLOG_DETAILS?.map((service) => ({
    id: service.id.toString(),
  }));
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const blog = BLOG_DETAILS.find(
    (b) => b.id === Number(id)
  );

  if (!blog) return null;
  return (
    <Box component="main">
      <Container maxWidth="xl" className='mt-15' sx={{ py: { xs: 3, md: 6 } , px: {  md: 10 }, }}>
        <BlogHero
          title={blog.heroTitle}
          description={blog.heroDescription}
          subTitle={blog.joinUsTitle}
        />

        <BlogHeader
          image={blog.coverImage}
          title={blog.title}
          author={blog.author}
          company={blog.company}
          date={blog.date}
        />

        <BlogContent content={blog.content} />

        <BlogTags tags={blog.tags} />
      </Container>
    </Box>
  );
}
