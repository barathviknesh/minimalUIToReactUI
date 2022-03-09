import { Paper } from '@mui/material';





export const CardTypTwo = props => {



    return (
        <Paper style={{
            height: "290px",
            border: "1px",
            borderRadius: "15px",
            backgroundColor: props?.backgroundColor ?? "",
            boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
        }}>
            <div style={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                // marginLeft: "10px",
                // padding: "15px"
            }}>
                <img src={props?.img ? props?.img : "images/total_income.png"} alt="logo" style={{
                    height: "280px",
                    maxWidth: "96%",
                    "object-fit": "contain",

                }} />
            </div>
        </Paper>
    )
}
