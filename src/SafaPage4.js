import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: "1", height: "100vh" },
  card: {
    width: "400px",
    backgroundColor: "green",
    height: "90vh",
    borderRadius: "0px",
    [theme.breakpoints.up("xl")]: {
      width: "600px",
    },
  },
}));

const Safapage4 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography style={{display: "flex",
      justifyContent:"center",
      alignItems:"center",
            fontFamily: "fantasy",
            borderBottom: "1.5px solid black",
            width: "250px",
            marginTop:"10px",height:"10vh",marginLeft:"550px", marginBottom:"10px"}} variant="h4">OUR WORKS</Typography>
       <Grid container direction="row" style={{display:"flex", justifyContent:"center"}}>
         
        <Grid>
          <Card
            className={classes.card}
            style={{
              // marginLeft: "80px",
              backgroundImage:
                "url(" +
                "https://lh3.googleusercontent.com/pnvMZbWbAFspmUajw3L2_XUs-MKP4bA2-Ygo_tq7OJ1W172YsU_zJ0o9mUIXiGbQ4d3TtInjhxB6Ajil=s1184" +
                ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Card>
        </Grid>
        <Grid>
          <Card
            className={classes.card}
            style={{
              backgroundImage:
                "url(" +
                "https://lh3.googleusercontent.com/1VMkhMvuM6Ugw5Z_BsXmSG9Ix9C-oArBgOF5uFLsbpB8padKa5TY1DOj7QUewSM-O32Pbta6NLCVxGMAjg=s1184" +
                ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Card>
        </Grid>
        <Grid>
          <Card
            className={classes.card}
            style={{
              backgroundImage: `url(
                "https://lh3.googleusercontent.com/P8rMGfK25SyJ1c9rSl7HOBcqmFEWijDquYLXLj1WiPtHZ40kwVdsUkEikfYqQpdPtEf8gIzozjQv_6cbgw=s1184" 
                )`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Safapage4;
