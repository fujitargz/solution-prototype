import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Recipe = () => {
  return (
    <Container sx={{ marginTop: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          marginBottom: 5,
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <SearchIcon />
        <TextField
          label="レシピを検索"
          variant="standard"
          sx={{ width: '100%' }}
        />
      </Box>
      <Card sx={{ marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://placehold.jp/3d4070/ffffff/320x240.png?text=Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Recipe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
            odio, dignissim cursus lacus at, maximus condimentum diam.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://placehold.jp/27ef82/ffffff/320x240.png?text=Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Recipe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
            odio, dignissim cursus lacus at, maximus condimentum diam.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://placehold.jp/32d4e8/ffffff/320x240.png?text=Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Recipe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
            odio, dignissim cursus lacus at, maximus condimentum diam.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Recipe;
