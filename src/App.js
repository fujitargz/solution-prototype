import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Pages from './pages'

const App = () => {
  return (
    <Container
      disableGutters
      maxWidth='xs'
      sx={{ height: '100vh' }}
    >
      <Box
        sx={{
          height: '100vh',
          maxHeight: 900,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white'
        }}
      >
        <Pages />
      </Box>
    </Container>
  );
}

export default App;
