import { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import IconButton from '@mui/material/IconButton';
import { List as MuiList } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import SortIcon from '@mui/icons-material/Sort';
import Tooltip from '@mui/material/Tooltip';
import CollapseItem from './CollapseItem';

const initialIngredients = [
  {
    id: 0,
    name: 'じゃがいも',
    createdAt: '2022-2-3',
    category: '青果',
    bestBy: '',
    useBy: '2022-2-7',
    bestWayToKeep: '風通しのよい冷暗所で保管',
  },
  {
    id: 1,
    name: 'にんじん',
    createdAt: '2022-2-3',
    category: '青果',
    bestBy: '',
    useBy: '2022-2-10',
    bestWayToKeep: '新聞紙等で包み冷蔵庫で保管',
  },
  {
    id: 2,
    name: '豚バラ肉',
    createdAt: '2022-2-3',
    category: '肉',
    bestBy: '',
    useBy: '2022-2-4',
    bestWayToKeep: '冷蔵庫で保管',
  },
  {
    id: 3,
    name: '白菜',
    createdAt: '2022-2-3',
    category: '青果',
    bestBy: '',
    useBy: '2022-2-11',
    bestWayToKeep: '新聞紙等で包み冷蔵庫で保管',
  },
  {
    id: 4,
    name: 'もやし',
    createdAt: '2022-2-3',
    category: '青果',
    bestBy: '2022-2-3',
    useBy: '2022-2-4',
    bestWayToKeep: '水に浸して冷蔵庫で保管',
  },
  {
    id: 5,
    name: '卵',
    createdAt: '2022-2-20',
    category: 'その他',
    bestBy: '2022-2-20',
    useBy: '',
    bestWayToKeep: '冷蔵庫で保管',
  },
  {
    id: 6,
    name: 'ヨーグルト',
    createdAt: '2022-2-3',
    category: 'その他',
    bestBy: '',
    useBy: '2022-2-16',
    bestWayToKeep: '冷蔵庫で保管',
  },
  {
    id: 7,
    name: '牛乳',
    createdAt: '2022-2-3',
    category: 'その他',
    bestBy: '',
    useBy: '2022-2-28',
    bestWayToKeep: '冷蔵庫で保管',
  },
  {
    id: 8,
    name: '鶏もも肉',
    createdAt: '2022-2-3',
    category: '肉',
    bestBy: '',
    useBy: '2022-2-5',
    bestWayToKeep: '冷蔵庫で保管',
  },
  {
    id: 9,
    name: '納豆',
    createdAt: '2022-2-3',
    category: 'その他',
    bestBy: '2022-2-10',
    useBy: '',
    bestWayToKeep: '冷蔵庫で保管',
  },
  {
    id: 10,
    name: 'ソーセージ',
    createdAt: '2022-2-3',
    category: 'その他',
    bestBy: '2022-2-19',
    useBy: '',
    bestWayToKeep: '冷蔵庫で保管',
  },
  {
    id: 11,
    name: 'みかん',
    createdAt: '2022-2-3',
    category: '青果',
    bestBy: '',
    useBy: '2022-3-10',
    bestWayToKeep: '段ボールのまま冷暗所で保管',
  },
  {
    id: 12,
    name: 'ほうれん草',
    createdAt: '2022-2-3',
    category: '青果',
    bestBy: '',
    useBy: '2022-2-9',
    bestWayToKeep: '新聞紙等で包み冷蔵庫で保管',
  },
];

const sortById = (a, b) => {
  return a.id - b.id;
};

const sortByLimit = (a, b) => {
  const aLimit = a.bestBy || a.useBy;
  const bLimit = b.bestBy || b.useBy;
  const aLimitDate = new Date(aLimit);
  const bLimitDate = new Date(bLimit);
  return aLimitDate - bLimitDate;
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
      {ingredients.map((item) => (
        <CollapseItem key={item.id} item={item} />
      ))}
    </MuiList>
  );
};

export default List;
