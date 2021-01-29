import React, { useState, useEffect } from "react";

import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import { getPosts } from "../../Mern/actions/posts";

import "./main.css";
import Modal1 from "..\\..\\testt\\Modal1";
import { Grid } from "@material-ui/core";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";

import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Main = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

 
  useEffect(
    () => {
      dispatch(getPosts());
    },
    [dispatch]
  );
  return (
    <div>
      <div>
        {React.Children.map(child => {
          console.log(child);
          return React.cloneElement(child, null);
        })}
      </div>

      <Grid container direction="row" spacing={3} maxWidth="lg">
        {/*  <Grid
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
      </Grid> */}
        <Grid
          className="grid2"
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          item
          xs={12}
          sm={2}
          elevation={3}
          style={{ padding: 20 }}
        >
          <h1 className="h1">Tools</h1>
          <br />
          <Draggable>
            <MailOutlineIcon
              style={{ fontSize: 60, color: "#bb8fe5", padding: 10 }}
            />
          </Draggable>
          <Draggable>
            <CalendarTodayTwoToneIcon
              style={{ fontSize: 60, color: "#eec360", padding: 10 }}
            />
          </Draggable>
          <Draggable>
            <LaunchSharpIcon
              style={{ fontSize: 60, color: "#93d2f0", padding: 10 }}
            />
          </Draggable>

          <Draggable>
            <AssignmentIndTwoToneIcon
              style={{ fontSize: 60, color: "#adee82", padding: 10 }}
            />
          </Draggable>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          xs={12}
          sm={10}
        >
          <h1>Work Flow</h1> 
         
          <Modal1 />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
