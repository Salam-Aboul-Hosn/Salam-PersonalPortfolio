import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#282828',
        minWidth: '400px',
        minHeight: '600px',
        maxHeight: '600px',
        marginLeft: '15px',
        borderRadius: '25px',
      }}
    >
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
          sx={{
            color: '#7F00FF',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '28px',
          }}
        >
          {props.title}
          <div>
            <Button size='small' sx={{ minWidth: '0px' }}>
              <a
                style={{
                  all: 'initial',
                  color: '#CF9FFF',
                  cursor: 'pointer',
                  fontSize: '28px',
                }}
                target='blank'
                href={props.code}
              >
                <AiFillGithub />
              </a>
            </Button>
            <Button size='small' sx={{ minWidth: '0px' }}>
              <a
                style={{
                  all: 'initial',
                  color: '#CF9FFF',
                  cursor: 'pointer',
                  fontSize: '28px',
                }}
                target='blank'
                href={props.website}
              >
                <HiOutlineExternalLink />
              </a>
            </Button>{' '}
          </div>
        </Typography>

        <Typography
          variant='body2'
          color='white'
          sx={{ minWidth: '50px', fontSize: '18px', opacity: 0.75 }}
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
