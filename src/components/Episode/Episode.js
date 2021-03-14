import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const Episode = (props) => {
      const {air_date,episode,season,series,title} = props.episode;
      const useStyles = makeStyles({
            root: {
                  minWidth: 275,
            },
            bullet: {
                  display: 'inline-block',
                  margin: '0 2px',
                  transform: 'scale(0.8)',
            },
            title: {
                  fontSize: 14,
            },
            pos: {
                  marginBottom: 12,
            },
      });
      const classes = useStyles();
   
      return (
                  <Card className={classes.root}>
                        <CardContent>
                              <Typography className={classes.title} color="textSecondary" gutterBottom>
                              Season: {season}
                                   
        </Typography>
                              <Typography variant="h5" component="h2">
                                   {title}
        </Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                    Episode: {episode}
        </Typography>
                              <Typography variant="body2" component="p">
                                   Air Date: {air_date}
                              </Typography>
                        </CardContent>
                        <CardActions>
                              <Button size="small">{series}</Button>
                        </CardActions>
                  </Card>
      );
};

export default Episode;