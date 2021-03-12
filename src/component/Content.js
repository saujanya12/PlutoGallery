import { useEffect, useState } from 'react'
import { Grid, Paper, Typography, makeStyles, Box } from "@material-ui/core"
import CardBox from "./CardBox"

const useStyle = makeStyles({
    heading : {
        marginTop : '4px',
        marginBottom : '4px'
    }
    ,font: {
        fontWeight: 'bold',
        fontSize: 'xx-large'
      }
})

const Content = () => {

    //const [database, setDatabase] = useState([])
    const [cometInfo, setCometInfo] = useState(null);
    const dummyArray = [1,2,3,4,5,6,7,8];
    const classes = useStyle();

    useEffect(() => {
        fetch('https://images-api.nasa.gov/search?q=pluto')
            .then((res) => res.json())
            .then((data) => setCometInfo(data.collection.items))
            .catch(error => setCometInfo(null))
    })

    return (
        <Paper>
            <Grid container >
                <Grid item xs={12}>
                    <Box my='1rem'>
                    <Typography variant='h5' className={classes.heading, classes.font} > Welcome To Pluto Gallery </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={false} sm={1}></Grid>

                <Grid item xs={12} sm={10}>
                    <Grid container spacing={2} >
                        {
                            cometInfo ?
                            cometInfo.map((element, index) => {
                                let title = element.data[0].title;
                                let description = element.data[0].description;
                                let image = element.links ? element.links[0].href : '';

                                return (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <CardBox  title={title} description={description} image={image} />
                                    </Grid>
                                )
                            })
                            :
                            dummyArray.map((element, index) => {
                                return (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <CardBox  title={null} description={null} image={null} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>

                <Grid item xs={false} sm={1}></Grid>
            </Grid>
        </Paper >
    )
}

export default Content