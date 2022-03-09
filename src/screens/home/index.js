import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';

// import { Paper, Typography } from '@mui/material';
// import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
// import CircularProgress from '@mui/material/CircularProgress';
// import { styled } from '@mui/material/styles';


 

import {
    CardTypOne,
    CardTypTwo,
    CardTypThree,
    RoomAvailable,
    ReservationStatTable,
    CustomerReview,
    NewestBooking,
    BookingDetails,
    CheckInOut

} from '../../components';


// const CircularProgressOne = styled(CircularProgress)(({ theme }) => ({

// }));


const usestyles = makeStyles((theme) => ({
    root: {

    },

    booked_room: {

        '@media (max-width:768px)': {
            marginTop: '20px !important'
        },


    },
    check_in_check_out: {

        '@media (max-width:768px)': {
            marginRight: '-8px !important'
        },


    },
}))


export const Home = () => {

    const classes = usestyles();




    return (

        <div className={classes.root}>
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
                <Grid item xs={12} sm={12} md={4} style={{}}>

                    <CardTypOne
                        count={'714 K'}
                        title={'Total Booking'}
                        img={"icons/total_booking.svg"}
                    />

                </Grid>
                <Grid item xs={12} sm={12} md={4}>

                    <CardTypOne
                        count={'311 K'}
                        title={'Check In'}
                        img={"icons/check_in.svg"}
                    />

                </Grid>
                <Grid item xs={12} sm={12} md={4}>

                    <CardTypOne
                        count={'124 K'}
                        title={'Check Out'}
                        img={"icons/check_out.svg"}
                    />

                </Grid>
                <Grid item xs={12} sm={12} md={8} style={{}}>
                    {/* start */}
                    <Grid container style={{ justifyContent: 'space-between' }} xs={12} sm={12} md={12} >
                        <Grid item xs={12} sm={12} md={5.9}>

                            <CardTypTwo
                                img={"images/total_income.png"}
                                backgroundColor={"#c8facd"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5.9} className={classes.booked_room}>

                            <CardTypThree
                                img={"images/booked_room.png"}
                                backgroundColor={''}
                            />

                        </Grid>
                    </Grid>

                    <Grid container spacing={2} xs={12} sm={12} md={13} style={{ marginTop: "8px" }}>

                        <Grid item xs={12} sm={12} md={12} className={classes.check_in_check_out}>
                            < CheckInOut
                                img={"images/check_in_check_out.png"}
                            />

                        </Grid>
                    </Grid>
                    {/* end */}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>

                    <RoomAvailable
                        img={"images/room_available.png"}
                    />

                </Grid>

                <Grid item xs={12} sm={12} md={8}>

                    <ReservationStatTable
                        img={"images/reservation_stats.png"}
                    />

                </Grid>
                <Grid item xs={12} sm={12} md={4}>

                    <CustomerReview />

                </Grid>
                <Grid item xs={12} sm={12} md={12}>

                    <NewestBooking />

                </Grid>

                <Grid item xs={12} sm={12} md={12} style={{ marginBottom: "30px" }}>

                    <BookingDetails
                        title={'Booking Details'}
                        img={"images/booking_detail_table.png"}
                    />

                </Grid>
            </Grid>
        </div >

    );
}

