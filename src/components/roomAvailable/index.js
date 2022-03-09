import { Paper, Typography } from '@mui/material';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles';

const usestyles = makeStyles((theme) => ({
    colorPrimary: {
        color: 'grey'
      },
    circularProgress: {
        [`&.${circularProgressClasses.root}`]: {
            color: '#1cb45f'
            // background:'linear-gradient(to right bottom, #1cb45f, #54d77c)'
        }
    }
}));

export const RoomAvailable = props => {



    const classes = usestyles();

    return (
        <Paper style={{ height: "480px", border: "1px", borderRadius: "15px", boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px' }}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                // margin: '10px',
                height: "470px"
            }}>
                <div style={{ marginLeft: '10px', marginTop: '15px' }}>
                    <Typography variant="subtitle1" style={{ fontWeight: '700' }}>{'Room Available'}</Typography>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '45px',
                    position: 'relative'
                }}>
                    <CircularProgress
                        className={classes.circularProgress}
                        variant="determinate"
                        value={75}
                        style={{
                            width: '250px',
                            height: '250px',

                        }} />
                    <div style={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Typography variant="body2" style={{ fontWeight: '700', color: '#7b8894' }}>{"Rooms"}</Typography>
                            <Typography variant="h5" style={{ fontWeight: '700', marginTop: '10px' }}>{"186"}</Typography>
                        </div>
                    </div>
                </div>
                <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '30px' }}>
                    <div style={{}}>
                        <div style={{
                            display: 'flex',

                            // alignItems: 'center',
                            justifyContent: 'space-between',

                        }}>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    height: "16px",
                                    width: '16px',
                                    backgroundColor: 'rgb(0, 171, 85)',
                                    border: '1px',
                                    borderRadius: '6px'
                                }}></div>

                                <div style={{ marginLeft: "6px" }}>
                                    <Typography variant="body1" style={{ fontWeight: '600', color: '#7b8894' }}>{"Sold Out"}</Typography></div>

                            </div>
                            <div>
                                <Typography variant="subtitle1" style={{ fontWeight: '600' }}>{"120 rooms"}</Typography>
                            </div>

                        </div>
                        <div style={{
                            display: 'flex',

                            // alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: '14px'
                        }}>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{
                                    height: "16px",
                                    width: '16px',
                                    backgroundColor: '#edeff2',
                                    border: '1px',
                                    borderRadius: '6px'
                                }}></div>

                                <div style={{ marginLeft: "6px" }}>
                                    <Typography variant="body1" style={{ fontWeight: '600', color: '#7b8894' }}>{"Available"}</Typography></div>

                            </div>
                            <div>
                                <Typography variant="subtitle1" style={{ fontWeight: '600' }}>{"66 rooms"}</Typography>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Paper>
    )
}
