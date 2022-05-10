import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';

const Card = ({name, artist, duration, track_listing}) => {

    return (
        <Box sx={{ minWidth: 275 }}>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              {artist}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {duration}
            </Typography>
            <Typography variant="body2">
             {track_listing}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
        </Box>
    )
};

export default Card;