import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
function MoreProjects() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <section className='section'>
      <h1 className='header'>More Projects</h1>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: 'rgb(135, 65, 216)',
                  borderRadius: '5px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'boxShadow 0.3s easeInOut',
                }}
              >
                <CardMedia
                  component='img'
                  alt='Alt Project'
                  height='140'
                  image=''
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                  ></Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>GitHub</Button>
                  <Button size='small'>Website</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
export default MoreProjects;
