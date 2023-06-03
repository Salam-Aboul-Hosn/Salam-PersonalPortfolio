import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import GameHub from '../images/GameHub.png';

export default function ProjectCard(props) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#282828' }}>
      <CardMedia
        sx={{ height: 220 }}
        image={props.image}
        title='green iguana'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{ color: '#7F00FF' }}
        >
          {props.title}
        </Typography>
        <Typography variant='body2' color='white'>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>
          <a
            style={{
              all: 'initial',
              color: '#CF9FFF',
              cursor: 'pointer',
              fontSize: '20px',
            }}
            target='blank'
            href={props.code}
          >
            Code
          </a>
        </Button>
        <Button size='small'>
          <a
            style={{
              all: 'initial',
              color: '#CF9FFF',
              cursor: 'pointer',
              fontSize: '20px',
            }}
            target='blank'
            href={props.website}
          >
            Website
          </a>
        </Button>{' '}
      </CardActions>
    </Card>
  );
}
