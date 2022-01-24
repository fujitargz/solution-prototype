import Box from '@mui/material/Box';

const ToolBar = () => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        padding: 1,
        backgroundColor: 'lightblue',
        color: 'white'
      }}
    >
      <p>
        ツールバー
      </p>
    </Box>
  )
}

export default ToolBar;