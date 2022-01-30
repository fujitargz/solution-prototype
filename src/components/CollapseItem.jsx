import { useReducer } from 'react';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const CollapseItem = (props) => {
  const [isOpen, toggleIsOpen] = useReducer((prev) => !prev, false);
  return (
    <>
      <ListItemButton key={props.item.id} onClick={toggleIsOpen}>
        <ListItemText
          primary={props.item.name}
          secondary={props.item.bestBy || props.item.useBy}
        />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={`賞味期限 : ${props.item.bestBy}`} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={`消費期限 : ${props.item.useBy}`} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={`カテゴリ : ${props.item.category}`} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={`おすすめの保存方法 : ${props.item.bestWayToKeep}`}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default CollapseItem;
