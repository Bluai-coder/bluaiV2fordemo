import { Box, Typography } from '@mui/material';

export default function BlogContent({ content }) {
  return (
    <>
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <Typography
                key={index}
                variant="h6"
                fontWeight={600}
                mt={4}
                gutterBottom
              >
                {block.value}
              </Typography>
            );

          case 'subheading':
            return (
              <Typography
                key={index}
                variant="subtitle1"
                fontWeight={600}
                mt={3}
                gutterBottom
              >
                {block.value}
              </Typography>
            );

          case 'paragraph':
            return (
              <Typography key={index} paragraph>
                {block.value}
              </Typography>
            );

          case 'list':
            return (
              <Box
                key={index}
                component="ul"
                sx={{
                  pl: 3,
                  mb: 3,
                  listStyleType: 'disc',
                }}
              >
                {block.value.map((item, i) => (
                  <Box
                    key={i}
                    component="li"
                    sx={{
                      mb: 1,
                    }}
                  >
                    <Typography variant="body1">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            );


          default:
            return null;
        }
      })}
    </>
  );
}
