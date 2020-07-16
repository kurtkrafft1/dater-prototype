import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import GMM from "../../modules/googleMapsManager"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const DateCard  = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [ photo, setPhoto] = useState()

  const handleExpandClick = () => {
    setExpanded(!expanded);
    
  };
  useEffect(()=> {
      if(props.obj.photos){
          GMM.getPlacePhoto(props.obj.photos[0].photo_reference)
        // console.log(props.obj.photos[0].photo_reference, 'card-obj')
      }
      
  }, [])

  if(props.obj !== ""|| props.obj !== undefined){
    return (
        // <Card className={classes.root}>
        //   <CardMedia
        //     className={clsx(classes.expand, {
        //         [classes.expandOpen]: expanded,
        //       })}
        //     onClick={handleExpandClick}
        //     image={props.obj['photos'][0]['html_attributions'][0]}
        //     title={props.obj.name}
        //   />
        //   <Collapse in={expanded} timeout="auto" unmountOnExit>
        //     <CardContent>
        //       <Typography paragraph>Method:</Typography>
        //       <Typography CardHeader>
        //         <div className="icon-holder"><image className='google-icon' src={props.obj.icon} /><h1>{props.obj.name}</h1> </div>
        //       </Typography>
        //       <Typography paragraph>
        //         - {props.obj.vicinity}
        //       </Typography> 
        //     </CardContent>
        //   </Collapse>
        // </Card>
        <>
            <h1>Card</h1>
        </>
      );
  }
  
}
export default DateCard

// !==null? (props.obj.photos[0]['html_attributions'][0]):("https://semantic-ui.com/images/wireframe/image.png") 