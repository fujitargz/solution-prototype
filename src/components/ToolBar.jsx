import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InsightsIcon from '@mui/icons-material/Insights';
import ListIcon from '@mui/icons-material/List';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SettingsIcon from '@mui/icons-material/Settings';

const ToolBar = (props) => {
  const pages = ['score', 'recipe', 'list', 'news', 'settings'];

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
      <BottomNavigationAction label="Score" icon={<InsightsIcon />} />
      <BottomNavigationAction label="Recipe" icon={<RestaurantIcon />} />
      <BottomNavigationAction label="List" icon={<ListIcon />} />
      <BottomNavigationAction label="News" icon={<NewspaperIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default ToolBar;
