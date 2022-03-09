import { Paper, Typography, IconButton, Avatar } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';



export const CustomerReview = props => {



    return (
        <Paper style={{ height: "505px", border: "1px", borderRadius: "15px", boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px' }}>
            <div style={{ paddingTop: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ marginLeft: "22px" }}>
                        <Typography varient="h4" style={{ fontWeight: '700' }}>{"Customer reviews"}</Typography>
                        <Typography varient="body2" style={{ color: '#7b8894' }}>{"5 reviews"}</Typography>
                    </div>
                    <div style={{ marginRight: "14px" }}>
                        <IconButton >
                            <ArrowBackIosNewOutlinedIcon style={{ height: "12px" }} />

                        </IconButton>
                        <IconButton >
                            <ArrowForwardIosOutlinedIcon style={{ height: "12px" }} />
                        </IconButton>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: "10px", marginLeft: "6px" }}>
                        <Avatar sx={{ width: 46, height: 46, marginTop: '18px', marginLeft: "16px" }} alt="Remy Sharp" src="https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg" />
                        <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                            {/* <div style={{ marginLeft: "16px" }}>minimal ui</div> */}
                            <Typography variant="subtitle2" style={{ fontWeight: "600" }}>{"Reeca Chung"}</Typography>
                            <Typography variant="body2" style={{ color: '#7b8894' }}>{"Posted 17 Feb 2022 3:41 PM"}</Typography>
                            {/* <div style={{ marginLeft: "16px" }}>admin</div> */}
                        </div>

                    </div>
                </div>
                <div>
                    <div style={{ marginTop: "25px", marginLeft: "20px" }}>
                        <Rating name="read-only" value={2.5} readOnly />
                    </div>
                    <div style={{ margin: "15px" }}>
                        <Typography varient="subtitle1" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."}
                        </Typography>
                    </div>
                    <div style={{ margin: "15px", display: 'block' }}>

                        <Chip label={"Great Service"}
                            style={{
                                backgroundColor: '#edeff2',
                                color: '#7b8894',
                                borderRadius: '12px',
                                fontWeight: '700',
                                margin:'4px'
                            }}
                        />
                        <Chip label={"Recommended"}
                            style={{
                                backgroundColor: '#edeff2',
                                color: '#7b8894',
                                borderRadius: '12px',
                                fontWeight: '700',
                                margin:'4px'
                            }}
                        />
                        <Chip label={"Best Service"}
                            style={{
                                backgroundColor: '#edeff2',
                                color: '#7b8894',
                                borderRadius: '12px',
                                fontWeight: '700',
                                margin:'4px'
                            }}
                        />

                    </div>
                    {/* <div style={{display:'flex', justifyContent:'space-around', alignContent:'flex-end'}}>
                    <Button variant="contained" style={{ backgroundColor: "#00ab55" }}>
                        <Typography varient="button">Accept</Typography>
                        <CheckCircleRoundedIcon style={{ marginLeft: "4px" }} />
                    </Button >
                    <Button variant="contained" style={{ backgroundColor: "#ff4842" }}>
                        <Typography varient="button">Reject</Typography>
                        <CancelRoundedIcon style={{ marginLeft: "4px" }} /></Button>
                </div> */}
                </div>
            </div>
        </Paper>
    )
}
