import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";

import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Flowpoint, Flowspace } from 'flowpoints';
import Flow from './FlowP'
const style = {
    height: '100%',
    width: '100%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
export const Dustbin = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const offset = monitor.getClientOffset();
            if (offset) {
                let listOfOffset = props.list
                let ObjToset ={
                    offset,
                    item,
                     
                }
                if(listOfOffset!==undefined)
                listOfOffset.push(ObjToset)
                 props.setList(listOfOffset)
             }
          },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
 
    return (<div ref={drop} style={{ ...style }}>



<Flow list={props.list}/>


        
        {/* {props.list.map(item=>
        item.item.name==="MailOutlineIcon"?
       <MailOutlineIcon  style={{ position:"absolute",top:item.offset.y,left:item.offset.x,fontSize: 60, color: "#eec360"}}/>
       :item.item.name==="CalendarTodayTwoToneIcon"?
       
       <CalendarTodayTwoToneIcon  style={{ position:"absolute",top:item.offset.y,left:item.offset.x,color: "#eec360",fontSize:60}}/>
       :item.item.name==="LaunchSharpIcon"?
       <LaunchSharpIcon  style={{ position:"absolute",top:item.offset.y,left:item.offset.x, fontSize: 60, color: "#93d2f0"}}/>
       :item.item.name==="AssignmentIndTwoToneIcon"?
       <AssignmentIndTwoToneIcon  style={{ position:"absolute",top:item.offset.y,left:item.offset.x,fontSize:60,color: "#adee82"}}/>
    :null
             )} */}
 		</div>);
};
