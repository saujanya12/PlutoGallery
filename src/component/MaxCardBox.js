import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({

    cardHeight: {
        maxHeight: '380px',
        maxWidth: '450px',
        overflow: 'auto',
    },
    scroll: {
        overflow: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    modal: {
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },

}));

export default function CardBox({ title, description, image }) {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.cardHeight}>
                <CardHeader style={{ backgroundColor: '#c3c3ff'}}
                    title={title ? <Typography>{title} </Typography> : <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 6 }} />}
                />
                {
                    image ?
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title="Paella dish"
                        />
                        :
                        <Skeleton animation="wave" variant="rect" className={classes.media} />
                }
                <CardContent style={{ backgroundColor: 'lavender' }} >
                    {description ?
                        <Typography variant="body2" color="textSecondary" align='left'>
                            {description}
                        </Typography>

                        :
                        <>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </>
                    }
                </CardContent>
            </Card>
        </>
    );
}
