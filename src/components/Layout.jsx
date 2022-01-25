import { useState } from 'react';
import Box from '@mui/material/Box';
import ToolBar from '../components/ToolBar';
import List from './List';

const Layout = () => {
  const [page, setPage] = useState('list');

  const navigate = () => {
    switch (page) {
        case 'search': return (null);
        case 'recipe': return (null);
        case 'list': return (<List />);
        case 'add': return (null);
        case 'news': return (null);
        case 'score': return (null);
        default: return (<List />);
      }
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          overflowY: 'auto',
          flexGrow: 1
        }}
      >
        {navigate()}
      </Box>
      <ToolBar onClick={setPage}/>
    </Box>
  )
}

export default Layout;