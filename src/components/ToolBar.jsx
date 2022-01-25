import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InsightsIcon from '@mui/icons-material/Insights';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const ToolBar = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexShrink: 0,
        justifyContent: 'space-between',
        padding: 2,
        backgroundColor: 'lightblue',
        color: 'white'
      }}
    >
      <IconButton
        size='large'
        onClick={() => { props.onClick('search') }}
      >
        <SearchIcon fontSize='inherit'/>
      </IconButton>
      <IconButton
        size='large'
        onClick={() => { props.onClick('recipe') }}
      >
        <RestaurantIcon fontSize='inherit'/>
      </IconButton>
      <IconButton
        size='large'
        onClick={() => { props.onClick('list') }}
      >
        <ListIcon fontSize='inherit'/>
      </IconButton>
      <IconButton
        size='large'
        onClick={() => { props.onClick('add') }}
      >
        <AddCircleOutlineIcon fontSize='inherit'/>
      </IconButton>
      <IconButton
        size='large'
        onClick={() => { props.onClick('news') }}
      >
        <NewspaperIcon fontSize='inherit'/>
      </IconButton>
      <IconButton
        size='large'
        onClick={() => { props.onClick('score') }}
      >
        <InsightsIcon fontSize='inherit'/>
      </IconButton>
    </Box>
  )
}

export default ToolBar;