import React from "react";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import "./main.css";
import { Grid } from "@material-ui/core";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import BusinessSharpIcon from "@material-ui/icons/BusinessSharp";
import EqualizerSharpIcon from "@material-ui/icons/EqualizerSharp";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NatureSharpIcon from "@material-ui/icons/NatureSharp";
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import PeopleOutlineSharpIcon from "@material-ui/icons/PeopleOutlineSharp";
import AssignmentIndTwoToneIcon from '@material-ui/icons/AssignmentIndTwoTone';
const Main = () => {
  return (
    <Grid container direction="row" spacing={3} maxWidth="lg">
      <Grid
        className="grid"
        container
        direction="row"
        justify="center"
        alignItems="center"
        item
        xs={12}
        sm={1}
        style={{ padding: 60 }}
      >
        <AlternateEmailIcon
          style={{ fontSize: 60, color: "white", padding: 10 }}
        />
        <LaunchSharpIcon
          style={{ fontSize: 60, color: "white", padding: 10 }}
        />
        <NatureSharpIcon
          style={{ fontSize: 60, color: "white", padding: 10 }}
        />
        <PeopleOutlineSharpIcon
          style={{ fontSize: 60, color: "white", padding: 10 }}
        />

        <BusinessSharpIcon
          style={{ fontSize: 60, color: "white", padding: 10 }}
        />

        <EqualizerSharpIcon
          style={{ fontSize: 60, color: "white", padding: 10 }}
        />
      </Grid>
      <Grid
        className="grid2"
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        item
        xs={12}
        sm={1}
        elevation={3}
      >
        <h1 className="h1">Tools</h1>

        <MailOutlineIcon
          
          style={{ fontSize: 60,color:"#bb8fe5", padding: 10 }}
        />
         <CalendarTodayTwoToneIcon
         style={{ fontSize: 60,color:"#eec360", padding: 10 }}
        />

<LaunchSharpIcon
          style={{ fontSize: 60, color: "#93d2f0", padding: 10 }}
        />

<AccountCircleTwoToneIcon
          style={{ fontSize: 60, color: "#93d2f0", padding: 10 }}
        />
        <AssignmentIndTwoToneIcon
          style={{ fontSize: 60, color: "#adee82", padding: 10 }}
        />
        
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        xs={12}
        sm={8}
      >
        <h1>test3</h1>
      </Grid>
    </Grid>
  );
};

export default Main;
