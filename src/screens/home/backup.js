import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import { Avatar, IconButton, Paper, Typography } from '@mui/material';
import { padding } from '@mui/system';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const usestyles = makeStyles((theme) => ({
    root: {

    },
}))


export const Home = () => {

    const classes = usestyles();




    return (

        <div className={classes.root}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={4} style={{}}>
                    {/* <div>xs=8</div> */}
                    <Paper style={{ height: "152px", border: "1px", borderRadius: "15px" }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'center',
                                marginLeft: "20px",
                            }}>
                                <div style={{}}>
                                    <Typography style={{ fontWeight: "700", fontSize: '44px' }}>{'714 K'}</Typography>
                                </div>
                                <div>
                                    <Typography>{'Total Booking'}</Typography>
                                </div>
                            </div>
                            <div style={{
                                // display: "flex",
                                // flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginLeft: "10px",
                                padding: "15px"
                            }}>
                                <img src={"icons/total_booking.svg"} alt="logo" style={{
                                    height: "120px",
                                    backgroundColor: "#f4f6f8",
                                    border: "1px",
                                    borderRadius: "60px",
                                    "object-fit": "contain",
                                    marginRight: "6px",
                                    maxWidth: "96%",
                                }} />
                            </div>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8</div> */}
                    <Paper style={{ height: "152px", border: "1px", borderRadius: "15px" }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'center',
                                marginLeft: "20px",
                            }}>
                                <div style={{}}>
                                    <Typography style={{ fontWeight: "700", fontSize: '44px' }}>{'311 K'}</Typography>
                                </div>
                                <div>
                                    <Typography>{'Check In'}</Typography>
                                </div>
                            </div>
                            <div style={{
                                // display: "flex",
                                // flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginLeft: "10px",
                                padding: "15px"
                            }}>
                                <img src={"icons/check_in.svg"} alt="logo" style={{
                                    height: "120px",
                                    backgroundColor: "#f4f6f8",
                                    border: "1px",
                                    borderRadius: "60px",
                                    "object-fit": "contain",
                                    marginRight: "6px",
                                    maxWidth: "96%",
                                }} />
                            </div>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8</div> */}
                    <Paper style={{ height: "152px", border: "1px", borderRadius: "15px" }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'center',
                                marginLeft: "20px",
                            }}>
                                <div style={{}}>
                                    <Typography style={{ fontWeight: "700", fontSize: '44px' }}>{'124 K'}</Typography>
                                </div>
                                <div>
                                    <Typography>{'Check Out'}</Typography>
                                </div>
                            </div>
                            <div style={{
                                // display: "flex",
                                // flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginLeft: "10px",
                                padding: "15px"
                            }}>
                                <img src={"icons/check_out.svg"} alt="logo" style={{
                                    height: "120px",
                                    backgroundColor: "#f4f6f8",
                                    border: "1px",
                                    borderRadius: "60px",
                                    "object-fit": "contain",
                                    marginRight: "6px",
                                    maxWidth: "96%",
                                }} />
                            </div>

                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 1</div> */}
                    <Paper style={{ height: "290px", border: "1px", borderRadius: "15px", backgroundColor: "#d3f5cd" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/total_income.png"} alt="logo" style={{
                                height: "280px",
                                maxWidth: "96%",
                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 2</div> */}
                    <Paper style={{ height: "290px", border: "1px", borderRadius: "15px" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/booked_room.png"} alt="logo" style={{
                                height: "280px",
                                maxWidth: "96%",
                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 3</div> */}
                    <Paper style={{ height: "480px", border: "1px", borderRadius: "15px" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/room_available.png"} alt="logo" style={{
                                height: "470px",
                                maxWidth: "96%",

                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid>
                {/* <Grid item xs={12} sm={12} md={4}> */}
                    {/* <div>xs=8 4</div>  */}
                {/* <Paper style={{ height: "169px", border: "1px", borderRadius: "15px" }}></Paper>  */}
                {/* </Grid> */}
                <Grid item xs={12} sm={12} md={8}>
                    {/* <div>xs=8 5</div> */}
                    <Paper style={{ height: "505px", border: "1px", borderRadius: "15px" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/reservation_stats.png"} alt="logo" style={{
                                height: "478px",
                                maxWidth: "96%",

                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 6</div> */}
                    <Paper style={{ height: "505px", border: "1px", borderRadius: "15px" }}></Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {/* <div>xs=8 6</div> */}
                    <Paper style={{ height: "674px", border: "1px", borderRadius: "15px" }}>
                        <div style={{}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ margin: "16px" }}>
                                    <Typography variant="h6" style={{ fontWeight: "700" }}>{"Newest Booking"}</Typography>
                                    <Typography variant="subtitle2">{"12 Booking"}</Typography>
                                </div>
                                <div style={{ margin: "14px", marginTop: "26px" }}>
                                    <IconButton >
                                        <ArrowBackIosNewOutlinedIcon style={{height:"16px"}}/>

                                    </IconButton>
                                    <IconButton >
                                        <ArrowForwardIosOutlinedIcon style={{height:"16px"}}/>
                                    </IconButton>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    {/* <div>xs=8 6</div> */}
                    <Paper style={{ height: "616px", border: "1px", borderRadius: "15px" }}></Paper>
                </Grid>
            </Grid>
        </div>


    );
}

// //////////////////////////////////////////////////


{/* <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 1</div> */}
                    <Paper style={{ height: "290px", border: "1px", borderRadius: "15px", backgroundColor: "#d3f5cd" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/total_income.png"} alt="logo" style={{
                                height: "280px",
                                maxWidth: "96%",
                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    {/* <div>xs=8 2</div> */}
                    <Paper style={{ height: "290px", border: "1px", borderRadius: "15px" }}>
                        <div style={{
                            display: "flex",
                            // flexDirection: "column",
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginLeft: "10px",
                            // padding: "15px"
                        }}>
                            <img src={"images/booked_room.png"} alt="logo" style={{
                                height: "280px",
                                maxWidth: "96%",
                                "object-fit": "contain",

                            }} />
                        </div>
                    </Paper>
                </Grid> */}



// //////////////////

<div>

{isHovered ? <h4>MANAGEMENT</h4> : <></>}
<div style={{ marginLeft: "16px", marginTop: "55px" }}>
  <List>

    <Link to="/" className={classes.link}>
      <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        {<ListItemText primary={isHovered ? "About" : ""} className={classes.logoText} />}
      </ListItem>
    </Link>

    <Link to="/about" className={classes.link}>
      <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        {<ListItemText primary={isHovered ? "About" : ""} className={classes.logoText} />}
      </ListItem>
    </Link>



  </List>
</div>
</div>
<div>
{isHovered ? <h4>APP</h4> : <></>}

<div style={{ marginLeft: "16px" }}>
  <List>

    <Link to="/" className={classes.link}>
      <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        {<ListItemText primary={isHovered ? "About" : ""} className={classes.logoText} />}
      </ListItem>
    </Link>

    <Link to="/about" className={classes.link}>
      <ListItem button style={{ border: '1px', borderRadius: '10px', marginBottom: "15px" }}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        {<ListItemText primary={isHovered ? "About" : ""} className={classes.logoText} />}
      </ListItem>
    </Link>



  </List>
</div>
</div>