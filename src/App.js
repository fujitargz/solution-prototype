import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Layout from './components/Layout';

const App = () => {
  return (
    <Container disableGutters maxWidth="xs" sx={{ height: '100vh' }}>
      <Box
        sx={{
          height: '100vh',
          maxHeight: 900,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
        }}
      >
        <Layout />
      </Box>
    </Container>
  );
};

export default App;
