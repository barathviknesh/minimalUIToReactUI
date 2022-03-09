import * as React from 'react';
import faker from 'faker';

import { Paper, Typography, Avatar, Grid, IconButton, Divider, Button } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const usestyles = makeStyles((theme) => ({
    tableHeaderCell: {
        // fontWeight: 'bold',
        backgroundColor: '#f4f6f8',
        borderBottom: "none !important"
    },
    tableHeadTxt: {
        fontWeight: '600 !important',
        color: '#7b8894'
    },
    tableCell: {
        borderBottom: "none !important"
    }
}));



let USERS = [], STATUSES = ['Paid', 'Pending', 'Un paid'], ROOMTYPE = ['Single', 'Double', 'King'], AVATARSRC = ['https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg', 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg', 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg', 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg', 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg'];
for (let i = 0; i < 5; i++) {

    USERS[i] = {
        avatarSrc: AVATARSRC[i],
        name: faker.name.findName(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        checkIn: faker.date.past().toLocaleDateString('en-US'),
        checkOut: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
        phone: faker.phone.phoneNumber(),
        roomType: ROOMTYPE[Math.floor(Math.random() * ROOMTYPE.length)],
    }
}




export const BookingDetails = props => {


    const classes = usestyles();




    return (
        <Paper style={{ overflow: "hidden", border: "1px", borderRadius: "15px", boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px' }}>
            <div>
                <div style={{ paddingTop: "30px", paddingLeft: "25px" }} >
                    <Typography variant="h6" style={{ fontWeight: "700" }}>{props?.title ? props?.title : 'Booking Details'}</Typography>
                </div>
                <div style={{ margin: "12px", marginTop: "30px" }} >
                    <TableContainer className={classes.tableContainer}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableHeaderCell}>
                                        <Typography variant='subtitle2' className={classes.tableHeadTxt} >{"Booker"}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableHeaderCell}>
                                        <Typography variant='subtitle2' className={classes.tableHeadTxt}>{"Check In"}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableHeaderCell}>
                                        <Typography variant='subtitle2' className={classes.tableHeadTxt}>{"Check Out"}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableHeaderCell}>
                                        <Typography variant='subtitle2' className={classes.tableHeadTxt}>{"Status"}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableHeaderCell}>
                                        <Typography variant='subtitle2' className={classes.tableHeadTxt}>{"Phone"}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableHeaderCell}>
                                        <Typography variant='subtitle2' className={classes.tableHeadTxt}>{"Room Type"}</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableHeaderCell}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {USERS?.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell className={classes.tableCell}>
                                            <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Grid item lg={2}>
                                                    <Avatar alt={row.name} src={row.avatarSrc} className={classes.avatar} />
                                                </Grid>
                                                <Grid item lg={7} >
                                                    <Typography variant="subtitle2" className={classes.name} style={{ marginLeft: '6px', fontWeight: '700' }}>{row.name}</Typography>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                        <TableCell className={classes.tableCell}>
                                            <Typography >{row.checkIn}</Typography>
                                        </TableCell>
                                        <TableCell className={classes.tableCell}>{row.checkOut}</TableCell>
                                        <TableCell className={classes.tableCell}>

                                            <Chip label={row.status}
                                                className={classes.status}
                                                style={{
                                                    backgroundColor:
                                                        ((row.status === 'Paid' && '#e3f9dd') ||
                                                            (row.status === 'Pending' && '#fff5d7') ||
                                                            (row.status === 'Un paid' && '#ffe1e0')),
                                                    color: ((row.status === 'Paid' && '#60b856') ||
                                                        (row.status === 'Pending' && '#bf8e1c') ||
                                                        (row.status === 'Un paid' && '#bc2f43')),
                                                    borderRadius: '6px',
                                                    fontWeight: '700'
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.tableCell}>{row.phone}</TableCell>
                                        <TableCell className={classes.tableCell}>
                                            <Typography varient='subtitle1' style={{ fontWeight: '400' }}>
                                                {row.roomType}
                                            </Typography>
                                        </TableCell>
                                        <TableCell className={classes.tableCell}>
                                            <IconButton >
                                                <MoreVertIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>
                </div>
                <div>
                    <Divider />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button style={{ textTransform: "none", marginTop: '15px', marginBottom: "15px", marginRight: '6px' }}>
                        <Typography variant="subtitle2" style={{ fontWeight: "700", color: 'black' }}>View All</Typography>
                        <ArrowForwardIosIcon style={{ height: "12px", color: 'black' }} />
                    </Button>
                </div>
            </div>
        </Paper>
    )
}
