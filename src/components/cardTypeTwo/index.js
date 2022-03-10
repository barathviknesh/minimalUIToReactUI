import { Paper, Typography } from '@mui/material';
import Chart from "react-apexcharts";
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';



export const CardTypTwo = props => {


    let ChartData = {
        series: [{
            name: '$',
            data: [11, 32, 45, 32, 34, 52, 41],
        }],
        options: {
            colors: ['#00ab55'],
            chart: {
                stacked: true,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                show: false,
                labels: { show: false },
                tooltip: {
                    enabled: false
                }
            },
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    show: false
                }
            },
            yaxis: {
                show: false,
                labels: { show: false }
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            },
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    }

    return (
        <Paper style={{
            height: "290px",
            border: "1px",
            borderRadius: "15px",
            backgroundColor: props?.backgroundColor ?? "",
            boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
        }}>
            <div style={{
                height: "100%",
                width: "100%",
                overflow: 'hidden'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginLeft: "14px", marginTop: "14px" }}>
                        <Typography variant="subtitle1" style={{ fontWeight: "600", color: "#458c76" }}>Total Income</Typography>
                        <Typography variant="h4" style={{ fontWeight: "700", color: '#005249' }}>$18,765</Typography>
                    </div>
                    <div style={{ marginRight: "14px", marginTop: "18px" }}>
                        <div style={{ display: 'flex' }}>
                            <InsightsOutlinedIcon style={{ color: "#126155" }} />
                            <Typography variant="p" style={{ fontWeight: "700", color: '#126155', marginLeft: "4px" }}>+2.6%</Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" style={{ color: '#70b092', marginTop: '6px' }}>than last month</Typography>
                        </div>

                    </div>
                </div>

                < Chart
                    options={ChartData.options}
                    series={ChartData.series}
                    type="area"
                    width="100%"
                    height="70%"
                />
            </div>
        </Paper >
    )
}
