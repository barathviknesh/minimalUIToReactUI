import { Typography, Avatar, Paper, IconButton } from '@mui/material';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PeopleIcon from '@mui/icons-material/People';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Chip from '@mui/material/Chip';

let data = [
    {
        avatar: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg',
        name: "Reece Chung",
        date: "03 Mar 2022 12:00 PM",
        room: 'A-21',
        persons: '3-5 Person',
        img: "https://minimal-assets-api.vercel.app/assets/images/rooms/room-5.jpg",
        type: 'Single'
    },
    {
        avatar: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg',
        name: "Jayvion Simon",
        date: "07 Mar 2022 4:00 PM",
        room: 'A-21',
        persons: '3-5 Person',
        img: "https://minimal-assets-api.vercel.app/assets/images/rooms/room-5.jpg",
        type: 'Single'
    },
    {
        avatar: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
        name: "Lucian Obrien",
        date: "06 Mar 2022 3:00 PM",
        room: 'A-21',
        persons: '3-5 Person',
        img: "https://minimal-assets-api.vercel.app/assets/images/rooms/room-4.jpg",
        type: 'Double'
    },
    {
        avatar: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg',
        name: "Deja Brady",
        date: "05 Mar 2022 2:00 PM",
        room: 'A-21',
        persons: '3-5 Person',
        img: "https://minimal-assets-api.vercel.app/assets/images/rooms/room-4.jpg",
        type: 'Double'
    },
]

export const NewestBooking = props => {



    return (
        <Paper elevation={0} style={{ height: "570px", border: "1px", borderRadius: "15px" }}>
            <div style={{}}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ margin: "16px" }}>
                        <Typography variant="h6" style={{ fontWeight: "700" }}>{"Newest Booking"}</Typography>
                        <Typography variant="subtitle2" style={{ color: '#7b8894' }} >{"12 Booking"}</Typography>
                    </div>
                    <div style={{ margin: "14px", marginTop: "26px" }}>
                        <IconButton >
                            <ArrowBackIosNewOutlinedIcon style={{ height: "16px" }} />

                        </IconButton>
                        <IconButton >
                            <ArrowForwardIosOutlinedIcon style={{ height: "16px" }} />
                        </IconButton>
                    </div>
                </div>
                <div style={{
                    height: "480px",
                    //  backgroundColor: "grey",
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: "30px"
                }}>
                    {data?.map((item) => {
                        return <div style={{
                            height: "410px",
                            backgroundColor: '#f4f6f8',
                            border: "2px",
                            borderRadius: "16px",
                            marginRight: "20px"

                        }}>
                            <div style={{ marginLeft: "18px", }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: "18px"
                                }}>
                                    <Avatar sx={{ width: 46, height: 46, marginTop: '18px' }} alt="Remy Sharp" src={item?.avatar} />
                                    <div style={{ marginLeft: "15px", marginTop: "10px" }}>
                                        {/* <div style={{ marginLeft: "16px" }}>minimal ui</div> */}
                                        <Typography variant="subtitle2" style={{ fontWeight: "600" }}>{item?.name}</Typography>
                                        <Typography variant="body2" style={{ color: "#a5b0ba" }}>{item?.date}</Typography>
                                        {/* <div style={{ marginLeft: "16px" }}>admin</div> */}
                                    </div>

                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginLeft: "20px",
                                    marginRight: '58px',
                                    marginTop: "30px"
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{}}>
                                            <KeyOutlinedIcon style={{ height: "18px" }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                            <Typography variant="caption" style={{ color: "#778591", fontWeight: '400' }}>Room</Typography>
                                            <Typography variant="caption" style={{ color: "#778591", fontWeight: '400' }}>{item?.room}</Typography>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                                        <div style={{}}>
                                            <PeopleIcon style={{ height: "18px" }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                                            {/* <Typography variant="caption" style={{ color: "#778591", fontWeight: '400' }}>Persons</Typography> */}
                                            <Typography variant="caption" style={{ color: "#778591", fontWeight: '400' }}>{item?.persons}</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginLeft: '12px', marginTop: '24px' }}>
                                <div>
                                    <div style={{ position: 'relative' }}>
                                        <img src={item?.img} alt="logo" style={{
                                            height: "230px",
                                            maxWidth: "95%",
                                            "object-fit": "contain",
                                        }} />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '0',
                                            right: '2',
                                            margin: '10px',
                                            marginRight: "12px"
                                        }}>
                                            <Chip label={item?.type}
                                                style={{
                                                    backgroundColor: item?.type === 'Single' ? '#ffc107' : '#1890ff',
                                                    color: item?.type === 'Single' ? '#5b5229' : "#ffff",
                                                    borderRadius: '6px',
                                                    fontWeight: '700',
                                                    margin: '4px'
                                                }}
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    })}



                </div>
            </div>
        </Paper>
    )
}
