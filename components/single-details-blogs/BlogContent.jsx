// import { Box, Typography } from '@mui/material';

// export default function BlogContent({ content }) {
//   return (
//     <>
//       {content?.map((block, index) => {
//         switch (block.type) {
//           case 'heading':
//             return (
//               <Typography
//                 key={index}
//                 variant="h6"
//                 fontWeight={600}
//                 mt={4}
//                 gutterBottom
//               >
//                 {block.value}
//               </Typography>
//             );

//           case 'subheading':
//             return (
//               <Typography
//                 key={index}
//                 variant="subtitle1"
//                 fontWeight={600}
//                 mt={3}
//                 gutterBottom
//               >
//                 {block.value}
//               </Typography>
//             );

//           case 'paragraph':
//             return (
//               <Typography key={index} paragraph>
//                 {block.value}
//               </Typography>
//             );

//           case 'list':
//             return (
//               <Box
//                 key={index}
//                 component="ul"
//                 sx={{
//                   pl: 3,
//                   mb: 3,
//                   listStyleType: 'disc',
//                 }}
//               >
//                 {block.value.map((item, i) => (
//                   <Box
//                     key={i}
//                     component="li"
//                     sx={{
//                       mb: 1,
//                     }}
//                   >
//                     <Typography variant="body1">
//                       {item}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>
//             );


//           default:
//             return null;
//         }
//       })}
//     </>
//   );
// }






// components/single-details-blogs/BlogContent.jsx
'use client';
import { Box, Typography } from '@mui/material';

export default function BlogContent({ content }) {
  // content is a raw HTML string from the API
  if (!content || typeof content !== 'string') return null;

  return (
    <Box
      sx={{
        color: 'text.primary',
        mt: 4,
        // Style the injected HTML from the outside — no need to modify the HTML itself
        '& h1, & h2, & h3, & h4, & h5, & h6': {
          fontWeight: 700,
          mt: 4,
          mb: 1.5,
          lineHeight: 1.3,
        },
        '& h2': { fontSize: { xs: '1.25rem', md: '1.5rem' } },
        '& h3': { fontSize: { xs: '1.15rem', md: '1.3rem' } },
        '& h6': { fontSize: '1rem', fontWeight: 600 },
        '& p': {
          mb: 2,
          lineHeight: 1.8,
          fontSize: { xs: '0.95rem', md: '1rem' },
        },
        '& ul, & ol': { pl: 3, mb: 2 },
        '& li': { mb: 1, lineHeight: 1.7 },
        '& strong': { fontWeight: 600 },
        '& a': { color: 'primary.main', textDecoration: 'underline' },
        '& img': { maxWidth: '100%', height: 'auto', borderRadius: 1, my: 2 },
        '& blockquote': {
          borderLeft: '4px solid',
          borderColor: 'divider',
          pl: 2,
          my: 2,
          fontStyle: 'italic',
          color: 'text.secondary',
        },
      }}
    >
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
}