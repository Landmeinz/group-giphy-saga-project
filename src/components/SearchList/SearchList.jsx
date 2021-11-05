import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem.jsx'

// import MUI components;
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import dataList from './dataList.js'

function SearchList(props) {

    // this is the list from the store; 
    const gifList = props.list;
    console.log('gifList is: ', gifList);

    // console.log(dataList);

    // const gifList = dataList
    return(
        <Card sx={{ minWidth: 50 }}>
            {gifList.map(gif => (
                <ListItem 
                    key={gif.id}
                    gif={gif}
                />
            ))}
        </Card>
    )
};

export default SearchList; 