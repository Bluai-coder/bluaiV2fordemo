
// app/blog/details/[id]/page.jsx
import { notFound } from 'next/navigation';
import { Container, Box } from '@mui/material';

import BlogTags from '../../../../../components/single-details-blogs/BlogTags';
import BlogHeader from '../../../../../components/single-details-blogs/BlogHeader';
import BlogContent from '../../../../../components/single-details-blogs/BlogContent';

/* -------------------------------------------------------------
   Helpers (copy from your current file)
------------------------------------------------------------- */
const stripTags = (str) =>
  String(str).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const transformBlog = (apiBlog) => {
  const html = apiBlog.text || '';
  const titleMatch = html.match(/<h2>\s*<strong>(.*?)<\/strong>\s*<\/h2>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

  const plainText = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const withoutTitle = plainText.startsWith(title)
    ? plainText.slice(title.length).trim()
    : plainText;

  const excerpt =
    withoutTitle.length > 200
      ? withoutTitle.slice(0, 200).trim() + '...'
      : withoutTitle;

  const date = new Date(apiBlog.date_with_time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return {
    id: apiBlog.id, title, image: apiBlog.image,
    author: `${apiBlog.post_by} - BluAI`, date, excerpt, content: html
  };
};

const transformBlogDetail = (apiBlog) => {
  const base = transformBlog(apiBlog);
  const html = base.content || '';

  const h2s = [...html.matchAll(/<h2>\s*<strong>(.*?)<\/strong>\s*<\/h2>/gi)].map(
    (m) => stripTags(m[1])
  );
  const metaLine = h2s[1] || '';
  const [company = 'BluAI', , metaDate = base.date] = metaLine
    .split('·')
    .map((s) => s.trim());

  const firstPara = html.match(/<p>(.*?)<\/p>/i);
  const heroDescription = firstPara
    ? stripTags(firstPara[1])
    : base.excerpt;

  const pTags = [...html.matchAll(/<p>(.*?)<\/p>/gi)].map((m) => stripTags(m[1]));
  const lastLine = pTags[pTags.length - 1] || '';
  const tags =
    lastLine && lastLine.length < 80 && !lastLine.endsWith('.')
      ? lastLine.split(/\s{2,}/).filter(Boolean)
      : [];

  return {
    id: base.id,
    title: base.title,
    heroTitle: base.title,
    heroDescription,
    joinUsTitle: '',
    coverImage: base.image,
    author: apiBlog.post_by,
    company,
    date: metaDate,
    content: base.content,
    tags,
  };
};

/* -------------------------------------------------------------
   1) Build-time route generation — required by output: 'export'
------------------------------------------------------------- */
export async function generateStaticParams() {
  const res = await fetch('https://siteadminapi.bluai.ai/api/v1/blogs');
  if (!res.ok) return [];
  const json = await res.json();
  const blogs = json?.data || [];
  return blogs.map((b) => ({ id: b.id }));
}

/* -------------------------------------------------------------
   2) Server component — fetches blog at build time
------------------------------------------------------------- */
async function getBlog(id) {
  // Try detail endpoint first
  try {
    const res = await fetch(`https://siteadminapi.bluai.ai/api/v1/blogs/${id}`);
    if (res.ok) {
      const json = await res.json();
      return json?.data ?? json;
    }
  } catch { }

  // Fallback: fetch list and find
  const res = await fetch('https://siteadminapi.bluai.ai/api/v1/blogs', {
    cache: 'no-store',
  });
  if (!res.ok) return null;
  const json = await res.json();
  return (json?.data || []).find((b) => b.id === id) || null;
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const raw = await getBlog(id);
  if (!raw) notFound();

  const blog = transformBlogDetail(raw);

  return (
    <Box component="main" className="mt-15 bg-white ">
      <Container
        maxWidth="xl"
        className="mt-15"
        sx={{ py: { xs: 3, md: 6 }, px: { md: 10 } }}
      >
        <BlogHeader
          image={blog.coverImage}/>
        <BlogContent content={blog.content} />
        <BlogTags tags={blog.tags} />
      </Container>
    </Box>
  );
}