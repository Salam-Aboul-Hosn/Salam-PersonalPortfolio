import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useEffect, useState } from 'react';
export default function ProjectCard({
  image,
  title,
  website,
  description,
  code,
}) {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 548);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#282828',
        minWidth: `${isPhone ? '350px' : '400px'}`,
        minHeight: `${isPhone ? '650px' : '600px'}`,
        maxHeight: '600px',
        marginLeft: `${isPhone ? '0px' : '15px'}`,
        borderRadius: '25px',
      }}
    >
      <CardMedia sx={{ height: 220 }} image={image} title='green iguana' />
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
          {title}
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
                href={code}
              >
                <AiFillGithub />
              </a>
            </Button>
            <Button size='small' sx={{ minWidth: '0px' }}>
              {website && (
                <a
                  style={{
                    all: 'initial',
                    color: '#CF9FFF',
                    cursor: 'pointer',
                    fontSize: '28px',
                  }}
                  target='blank'
                  href={website}
                >
                  <HiOutlineExternalLink />
                </a>
              )}
            </Button>{' '}
          </div>
        </Typography>

        <Typography
          variant='body2'
          color='white'
          sx={{ minWidth: '50px', fontSize: '18px', opacity: 0.75 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
