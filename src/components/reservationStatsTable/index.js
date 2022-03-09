import React from "react";
import { Paper, Typography } from '@mui/material';
import Chart from "react-apexcharts";

// import { Chart } from "react-google-charts";

// export const data = [
//     ["Year", "Sales", "Expenses", "Profit"],
//     ["2014", 1000, 400, 200],
//     ["2015", 1170, 460, 250],
//     ["2016", 660, 1120, 300],
//     ["2017", 1030, 540, 350],
//     ["2018", 1030, 540, 350],
//     ["2019", 10, 54, 50],
//     ["2020", 130, 40, 50],
//     ["2021", 30, 54, 50],
//     ["2022", 103, 5, 35],
// ];


// export const options = {
//     chart: {
//         title: "Reservation Stats",
//         subtitle: "(+43% Check In | +12% Check Out) than last year",
//     },

//     legend: { position: 'none' },
//     chartArea: { width: '100%' },
//     isStacked: true,
//     colors: ['#00ab55', '#ffe700', '#FF6384', '#36A2EB'],



// };




export const ReservationStatTable = props => {


    let chartData = {
        options: {
            colors: ['#00ab55', '#ffe700'],
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
        },
        series: [
            {
                name: "People Born",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
            {
                name: "People Died",
                data: [3, 60, 35, 80, 49, 70, 20, 81],
            },
        ],
    };

    return (
        <Paper style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: "505px",
            border: "1px",
            borderRadius: "15px",
            boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px'
        }}>

            <div style={{
                marginLeft: "30px",
                marginRight: "30px",
                height: "90%",
                width: '100%',

            }}>
                <div>
                    <Typography variant="h6" style={{ fontWeight: "700" }}>{props?.title ? props?.title : 'Booking Details'}</Typography>
                </div>
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    width="100%"
                    height="90%"
                />
            </div>

        </Paper>
    )
}








