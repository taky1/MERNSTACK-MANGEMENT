import React, { useEffect, useState } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";

import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
 const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};
const OverviewFlow = (props) => {

console.log("props",props)

const Elem =
[
   
    {
        id: '1',
        type: 'input',
        data: {
          label: (
            <>
              Welcome to <strong>React Flow!</strong>
            </>
          ),
        },
        position: { x: 250, y: 250 },
      },
  ]; 

  const [elements, setElements] = useState(Elem);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

 

    useEffect(() => {
        console.log(elements)       
         let el =[]
        props.list.map((items,index)=>
    
            {
                let ObjeTopush=  {
                    id: index.toString(),
                    type: 'input',
                    data: {
                      label: (
                        <>
          { items.item.name==="MailOutlineIcon"?
       <MailOutlineIcon  style={{ fontSize: 20, color: "#eec360"}}/>
       :items.item.name==="CalendarTodayTwoToneIcon"?
       
       <CalendarTodayTwoToneIcon  style={{ color: "#eec360",fontSize:20}}/>
       :items.item.name==="LaunchSharpIcon"?
       <LaunchSharpIcon  style={{  fontSize: 20, color: "#93d2f0"}}/>
       :items.item.name==="AssignmentIndTwoToneIcon"?
       <AssignmentIndTwoToneIcon  style={{ fontSize:20,color: "#adee82"}}/>
    :null
             }


                         </>
                      ),
                    },
                    position: { x: items.offset.x-380, y: items.offset.y+20},
                  }
                  el.push(ObjeTopush)
                //   el.push(  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
                //   )
        
            }
            )
            setElements(el)

            console.log("je suis la")
       }, [props]); 
  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}

    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';
          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;
          return '#fff';
        }}
        nodeBorderRadius={2}
      />
     </ReactFlow>
  );
};
export default OverviewFlow;