import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import FLAG from '../../assets/images/Vector.png'
import SESSION from '../../assets/images/Vector5.png'
import WORKSHOP from '../../assets/images/Vector3.png'
import styled from "styled-components";

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #fff;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000;
    
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const useStyles = makeStyles({
    card: {
        width: "90%",
        height: "100%",
        // backgroundColor: "#FFF",
        background: "#2B0032",
        alignSelf: "center",
        borderRadius: "10px",
        margin: "3rem 5rem 3rem 5rem",
        padding: 20
    },

    heading: {
        fontSize: "32px",
        color: "#f6f6f6",
        fontWeight: "600",
        textAlign: 'left'
    },

    img: {
        width: "160px",
        image: "https://res.cloudinary.com/webwiznitr/image/upload/v1629310954/webwiz-portfolio/others/events_wid9o0.png"
    },
    header: {
        display: "flex",
        justifyContent: 'space-between'
    },
    textContainer: {
        display: "flex",
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 50,
        flexWrap: 'wrap'
    }
})

const HomeCard = () => {

    const classes = useStyles();
    return (
        <Card className={classes.card} gutterBottom >
            <div className={classes.header}>
                <Typography style={{ borderRight: "4px solid #fff", flex: 1, padding: 30 }} className={classes.heading} >
                    <span style={{
                        color: "#f6f6f6"
                    }}>Webwiz</span> brings you some<br />
                    Amazing Events
                </Typography>
                <div style={{ padding: 30, flex: 1, display: "flex", justifyContent: "space-between" }}>
                    <div style={{ textAlign: 'center' }}>
                        <Typography style={{
                            color: "#f6f6f6",
                            textAlign: 'center'
                        }} className={classes.heading} >
                            1
                        </Typography>
                        <Typography className={classes.heading} >
                            Year
                        </Typography>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Typography style={{
                            color: "#f6f6f6",
                            textAlign: 'center'
                        }} className={classes.heading} >
                            3
                        </Typography>
                        <Typography style={{ textAlign: 'center' }} className={classes.heading} >
                            Flagship
                            <br /> Events
                        </Typography>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Typography style={{
                            color: "#f6f6f6",
                            textAlign: 'center'
                        }} className={classes.heading} >
                            50+
                        </Typography>
                        <Typography style={{ textAlign: 'center' }} className={classes.heading} >
                            Workshop &
                            <br /> Sessions
                        </Typography>
                    </div>
                </div>
            </div>

            <CardContent className={classes.textContainer}>
                <div style={{ width: "350px", textAlign: 'left', backgroundColor: "#C7EFEE", padding: 25, borderRadius: 25 }}>
                    <img src={FLAG} alt="" />
                    <h4 style={{ margin: 0 }}>Flagship Event</h4>
                    <p>
                        Hackodisha was one of the recent flagship event of Webwiz.
                    </p>
                </div>
                <div style={{ width: "350px", textAlign: 'left', backgroundColor: "#FFE8CD", padding: 25, borderRadius: 25 }}>
                    <img src={SESSION} alt="" />
                    <h4 style={{ margin: 0 }}>Sessions</h4>
                    <p>
                        We have various sessions on different domains.
                    </p>
                </div>
                <div style={{ width: "350px", textAlign: 'left', backgroundColor: "#E0F0FF", padding: 25, borderRadius: 25 }}>
                    <img src={WORKSHOP} alt="" />
                    <h4 style={{ margin: 0 }}>Workshop</h4>
                    <p>
                        We conduct hands-on sessions on various topics.
                    </p>
                </div>
            </CardContent>
            <Link href="/events">
                <Button>Let’s check out more events</Button>
            </Link>


        </Card>
    )
}

export default HomeCard
