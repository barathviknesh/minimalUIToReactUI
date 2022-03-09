import { Paper, Typography } from '@mui/material';





export const CardTypOne = props => {



    return (
        <Paper style={{
            height: "152px",
            border: "1px",
            borderRadius: "15px",
          
            // boxShadow: '0px 5px 10px #0000000A',


            boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
         
        }} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    marginLeft: "20px",
                }}>
                    <div style={{}}>
                        <Typography style={{ fontWeight: "700", fontSize: '44px' }}>{props?.count ? props?.count : '714 K'}</Typography>
                    </div>
                    <div>
                        <Typography variant='subtitle2' style={{color:'#7b8894', fontWeight:'600'}}>{props?.title ? props?.title : 'Total Booking'}</Typography>
                    </div>
                </div>
                <div style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: "15px"
                }}>
                    <img
                        src={props?.img ? props?.img : "icons/total_booking.svg"}
                        alt="logo"
                        style={{
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
    )
}
