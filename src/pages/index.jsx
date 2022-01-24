import { useState } from 'react';
import Box from '@mui/material/Box';
import ToolBar from '../components/ToolBar';
import List from './List';

const Pages = () => {
  const [page, setPage] = useState('list');

  const navigate = () => {
    switch (page) {
        case 'list': return (<List />);
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
          overflowY: 'scroll'
        }}
      >
        {navigate()}
      </Box>
      <ToolBar />
    </Box>
  )
}

export default Pages;