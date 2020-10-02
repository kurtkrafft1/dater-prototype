import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';

import keys from "../../keys"
import './datecard.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
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
          setPhoto(props.obj.photos[0].photo_reference)
        //   GMM.getPlacePhoto(props.obj.photos[0].photo_reference).then(obj=> {
        //       setPhoto(obj)
        //     console.log(obj)
        //   })
        // console.log(props.obj.photos[0].photo_reference, 'card-obj')
      }
      
  }, [])

  if(props.obj !== ""|| props.obj !== undefined){
    return (
        <Card className={classes.root}>
          {/* <CardMedia
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            onClick={handleExpandClick}
            image={photo? (`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${photo}&key=${keys.google}`) : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"}
            // image="https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"
            title='image' */}
          {/* /> */}
            <img src = {photo? (`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${photo}&key=${keys.google}`) : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} 
            className="google-pic"
            onClick={handleExpandClick}/>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              
                <div className="icon-holder"><img className='google-icon' src={props.obj.icon} /><h1>{props.obj.name}</h1> </div>
             
              
                - {props.obj.vicinity}
              
            </CardContent>
          </Collapse>
        </Card>
        // <>
        // <img src = {photo? (`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=${photo}&key=${keys.google}`) : "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG"} />
        // </>
       
      );
  }
  
}
export default DateCard

// !==null? (props.obj.photos[0]['html_attributions'][0]):("https://semantic-ui.com/images/wireframe/image.png") 