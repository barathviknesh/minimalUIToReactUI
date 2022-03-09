import { Paper, Typography, Divider } from '@mui/material';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

const CircularProgressOne = styled(CircularProgress)(({ theme }) => ({

    [`&.${circularProgressClasses.root}`]: {
        color: '#1cb45f',
        // background: 'linear-gradient(to right bottom, #1cb45f, #54d77c)'
    }

}));






// const CircularProgressTwo = styled(CircularProgress)(({ theme }) => ({

// }));




const usestyles = makeStyles((theme) => ({


    paper: {
        height: "165px !important",
        border: "1px !important",
        borderRadius: "15px !important",
        boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important',

        '@media (max-width:452px)': {

            height: "290px !important",
            border: "1px !important",
            borderRadius: "15px !important",
            boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important',

        }

    },


    checkInOut: {

        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'space-between !important',

        '@media (max-width:452px)': {
            display: 'flex !important',
            flexDirection: 'column !important',
            alignItems: 'center !important',
        },


    },
    checkInOutInnerDiv: {

        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        marginLeft: "130px !important",

        '@media (max-width:452px)': {
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'center !important',
            margin: "0px !important",
            marginTop: "25px !important",
            marginBottom: "25px !important",

        }


    },
    circularDivTwo: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: "130px",

        '@media (max-width:452px)': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: "0px",
            marginTop: "25px",
            marginBottom: "25px",
        }
    },
    dividerVertical:{
        '@media (max-width:452px)': {
            display: 'none',
          
        }
    },
    divider:{
        display:"none",
        '@media (max-width:452px)': {
            display: 'block',
          
        }
    }

}))


export const CheckInOut = props => {

    const classes = usestyles();

    return (
        <Paper className={classes.paper}>


            <div className={classes.checkInOut}
            // style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            // style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <div
                    className={classes.checkInOutInnerDiv}
                // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: "130px" }}
                // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "25px", marginBottom: "25px" }}
                >
                    <div>
                        <CircularProgressOne
                            // className={classes.circularProgress}
                            variant="determinate"
                            value={75}
                            style={{
                                width: '90px',
                                height: '90px',
                            }}
                        />
                    </div>
                    <div style={{ marginLeft: '12px' }}>
                        <Typography variant="h4" style={{ fontWeight: '700' }}>38,566</Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: '700', color: '#7b8894' }}>Check In</Typography>
                    </div>
                </div>
                {/* <div> */}
                <Divider className={classes.dividerVertical} orientation="vertical" variant="fullWidth" style={{ color: "black", width: '20px', height: "162px" }} />
                <Divider className={classes.divider} variant="fullWidth" style={{ color: "black", width: '100%' }} />
                {/* </div> */}
                <div
                    className={classes.circularDivTwo}
                // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: "130px" }}
                // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "25px", marginBottom: "25px" }}
                >
                    <div>
                        <CircularProgressOne
                            // className={classes.circularProgress}
                            variant="determinate"
                            value={75}
                            style={{
                                width: '90px',
                                height: '90px',
                            }}
                        />
                    </div>
                    <div style={{ marginLeft: '12px' }}>
                        <Typography variant="h4" style={{ fontWeight: '700' }}>38,566</Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: '700', color: '#7b8894' }}>Check In</Typography>
                    </div>
                </div>

            </div>
        </Paper>
    )
}
