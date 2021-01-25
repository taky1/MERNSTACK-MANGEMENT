import React from "react";
import { Sidebar, Item } from "react-sidebar-ui";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import "react-sidebar-ui/dist/index.css";



const Sidebare2 = () => {
  return (
    <div >
      <Sidebar bgColor="black" className="Sidebare">
        <Item bgColor="black" align="centre">
        <AlternateEmailIcon style={{ fontSize: 100 }} />
        </Item>
        <Item bgColor="black">
        <EqualizerIcon  style={{ fontSize: 100}} />
        </Item>
      </Sidebar>
    </div>
  );
};

export default Sidebare2;
