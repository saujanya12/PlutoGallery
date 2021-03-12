import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import MaxCardBox from './MaxCardBox'
const useStyles = makeStyles((theme) => ({
   
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
        padding: theme.spacing(2, 4, 3),
    },

}));

export default function CardBox({ title, description, image }) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Card className={classes.root} onClick={handleOpen}>
                <CardHeader style={{ maxHeight: '25px', backgroundColor: '#c3c3ff' }}
                    title={title ? <Typography>{title.substring(0, 30)} {title.length > 30 ? '...' : ''} </Typography> : <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 6 }} />}
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
                <CardContent style={{ minHeight: '50px', backgroundColor: 'lavender' }} >
                    {description ?
                        <Typography variant="body2" color="textSecondary" align='left'>
                            {description.substring(0, 115)} {description.length > 115 ? '...' : ''}
                        </Typography>

                        :
                        <>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </>
                    }
                </CardContent>
            </Card>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                       <MaxCardBox title={title} description={description} image={image} />
                    </div>
                </Fade>
            </Modal>

        </>
    );
}
