import Box from '@mui/material/Box';

const InnerBlueContainer = ({ children, color }) => {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      p={3}
      borderRadius={'8px'}
      sx={{ background: color || 'rgba(25, 118, 210, 0.04)' }}
    >
      {children}
    </Box>
  );
};
export default InnerBlueContainer;
