import { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import IconButton from '@mui/material/IconButton';
import { List as MuiList } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SortIcon from '@mui/icons-material/Sort';
import Tooltip from '@mui/material/Tooltip';

const initialIngredients = [
  {
    id: 0,
    name: 'じゃがいも',
    limit: '2022-2-7',
  },
  {
    id: 1,
    name: 'にんじん',
    limit: '2022-2-10',
  },
  {
    id: 2,
    name: '豚バラ肉',
    limit: '2022-2-4',
  },
  {
    id: 3,
    name: '白菜',
    limit: '2022-2-11',
  },
  {
    id: 4,
    name: 'もやし',
    limit: '2022-2-3',
  },
  {
    id: 5,
    name: '卵',
    limit: '2022-2-20',
  },
  {
    id: 6,
    name: 'ヨーグルト',
    limit: '2022-2-16',
  },
  {
    id: 7,
    name: '牛乳',
    limit: '2022-2-28',
  },
  {
    id: 8,
    name: '鶏もも肉',
    limit: '2022-2-5',
  },
  {
    id: 9,
    name: '納豆',
    limit: '2022-2-10',
  },
  {
    id: 10,
    name: 'ソーセージ',
    limit: '2022-2-19',
  },
  {
    id: 11,
    name: 'みかん',
    limit: '2022-3-10',
  },
  {
    id: 12,
    name: 'ほうれん草',
    limit: '2022-2-9',
  },
];

const sortById = (a, b) => {
  return a.id - b.id;
};

const sortByLimit = (a, b) => {
  const aLimit = new Date(a.limit);
  const bLimit = new Date(b.limit);
  return aLimit - bLimit;
};

const List = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  return (
    <MuiList
      subheader={
        <ListSubheader
          component="div"
          sx={{ display: 'flex', justifyContent: 'space-evenly', padding: 1 }}
        >
          <Tooltip title="登録順にソート">
            <IconButton
              onClick={() => {
                setIngredients([...ingredients].sort(sortById));
              }}
            >
              <SortIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="期限順にソート">
            <IconButton
              onClick={() => {
                setIngredients([...ingredients].sort(sortByLimit));
              }}
            >
              <AccessAlarmIcon />
            </IconButton>
          </Tooltip>
        </ListSubheader>
      }
    >
      {ingredients.map((item) => {
        return (
          <ListItemButton key={item.id}>
            <ListItemText primary={item.name} secondary={item.limit} />
          </ListItemButton>
        );
      })}
    </MuiList>
  );
};

export default List;
