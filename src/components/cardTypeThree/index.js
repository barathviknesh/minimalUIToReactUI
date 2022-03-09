import { Paper, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';


const BorderLinearProgressOne = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? "#ffc107" : "#ffc107",
    },
}));



const BorderLinearProgressTwo = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? "#ff4842" : "#ff4842",
    },
}));



const BorderLinearProgressThree = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? "#54d62c" : "#54d62c",
    },
}));

// const usestyles = makeStyles((theme) => ({




// }));


export const CardTypThree = props => {



    return (
        <Paper style={{
            height: "290px",
            border: "1px",
            borderRadius: "15px",
            backgroundColor: props?.backgroundColor ?? "",
            boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px'
        }}>
            {/* <div style={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                // marginLeft: "10px",
                // padding: "15px"
            }}>
                <img src={ props?.img ? props?.img : "images/total_income.png"} alt="logo" style={{
                    height: "280px",
                    maxWidth: "96%",
                    "object-fit": "contain",

                }} />
            </div> */}


            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginTop: "20px", marginLeft: "20px" }}>
                    <Typography variant="subtitle1" style={{ fontWeight: '700' }}>{'Booked Room'}</Typography>
                </div>
                <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: "8px" }}>
                    <div style={{ marginTop: '8px' }}>
                        <BorderLinearProgressOne variant="determinate" value={20} />
                    </div>
                    <div style={{ marginTop: '28px' }}>
                        <BorderLinearProgressTwo variant="determinate" value={80} />
                    </div>
                    <div style={{ marginTop: '28px' }}>
                        <BorderLinearProgressThree variant="determinate" value={70} />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginLeft: "30px",
                    marginRight: "30px",
                    marginTop: "32px"
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ height: "12px", width: "12px", borderRadius: "4px", background: "#ffc107" }}></div>
                            <div style={{ marginLeft: "10px" }}>
                                <Typography variant="subtitle1" style={{ fontWeight: '600', color: '#7b8894' }}>{"Pending"}</Typography>
                            </div>
                        </div>
                        <div style={{ marginLeft: "8px", marginTop: "8px" }}>
                            <Typography variant="h6" style={{ fontWeight: '700' }}>{"8.62k"}</Typography>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ height: "12px", width: "12px", borderRadius: "4px", background: "#ff4842" }}></div>
                            <div style={{ marginLeft: "10px" }}>
                                <Typography variant="subtitle1" style={{ fontWeight: '600', color: '#7b8894' }}>{"Cancel"}</Typography>
                            </div>
                        </div>
                        <div style={{ marginLeft: "8px", marginTop: "8px" }}>
                            <Typography variant="h6" style={{ fontWeight: '700' }}>{"86.36k"}</Typography>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ height: "12px", width: "12px", borderRadius: "4px", background: "#54d62c" }}></div>
                            <div style={{ marginLeft: "10px" }}>
                                <Typography variant="subtitle1" style={{ fontWeight: '600', color: '#7b8894' }}>{"Done"}</Typography>
                            </div>
                        </div>
                        <div style={{ marginLeft: "8px", marginTop: "8px" }}>
                            <Typography variant="h6" style={{ fontWeight: '700' }}>{"73.99k"}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}
