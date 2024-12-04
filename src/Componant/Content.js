import React from 'react';
import { Box } from '@mui/material';

const Content = ({ Page }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Page />
    </Box>
  );
};

export default Content;
