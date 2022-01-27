import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InsightsIcon from '@mui/icons-material/Insights';
import ListIcon from '@mui/icons-material/List';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SearchIcon from '@mui/icons-material/Search';

const ToolBar = (props) => {
  const pages = ['search', 'recipe', 'list', 'news', 'score'];

  return (
    <BottomNavigation
      showLabels
      sx={{
        flexShrink: 0,
        padding: 2,
        backgroundColor: 'lightblue',
      }}
      onChange={(event, newValue) => {
        props.onClick(pages[newValue]);
      }}
    >
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Recipe" icon={<RestaurantIcon />} />
      <BottomNavigationAction label="List" icon={<ListIcon />} />
      <BottomNavigationAction label="News" icon={<NewspaperIcon />} />
      <BottomNavigationAction label="Score" icon={<InsightsIcon />} />
    </BottomNavigation>
  );
};

export default ToolBar;
