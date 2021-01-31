
 	import ReactDOM from 'react-dom'
     import React, {  useRef,useState } from "react";
     import "./styles.css";
     import { DndProvider, useDrag, useDrop } from "react-dnd";
      import { HTML5Backend } from 'react-dnd-html5-backend'
 
     function App() {
         const [list, setList] = useState([]);
          return (
             <div className="App">
                 <DndProvider backend={HTML5Backend}>
                 <>
             <GlobalBox list={list}  setList={setList} />
             <LocalBox  list={list}  setList={setList}/>
             <Thing list={list}  setList={setList}/>
           </>				</DndProvider>
             </div>
         )
     }
 
 
 
  
     function GlobalBox(props) {
        const ref = useGlobalDrop(console.log);
       return <div ref={ref} className="GlobalBox" > 
       
           
          
        
        </div>;
     }
     
     function LocalBox(props) {
        const ref = useLocalDrop(console.log,props);
       return <div ref={ref} className="LocalBox" >
            <Thing  Child={		  		   <img src="https://e-businessuploads.s3.eu-west-3.amazonaws.com/ProfilePictures/U-ines.chkir.1-2021-01-29T08-21-16-IconSplasb.png" style={{height:30,width:20,position:"absolute"}} />
 }>
         </Thing>
          
            
          
            </div>;
     }
     
     function Thing(props) {
       const [, drag] = useDrag({
         item: { type: "thing" }
       });
       return (
         <div   ref={drag}>
              {props.Child}
          </div>
       );
     }
     
     function useLocalDrop(onDrop,props) {
 
       const ref = useRef();
 
       const [, dropTarget] = useDrop({
         accept: "thing",
         drop(item, monitor) {
           const offset = monitor.getSourceClientOffset();
           if (offset && ref.current) {
             const dropTargetXy = ref.current.getBoundingClientRect();
             let NewObject={
                 x: offset.x - dropTargetXy.left,
                 y: offset.y - dropTargetXy.top
             }
  
              let News=props.list
             News.push(NewObject)
             props.setList(News)
              console.log(props.list)
              onDrop("local", {
               x: offset.x - dropTargetXy.left,
               y: offset.y - dropTargetXy.top
             });
           }
         }
       });
     
       return elem => {
         ref.current = elem;
         dropTarget(ref);
       };
     }
     
     function useGlobalDrop(onDrop) {
       const [, dropTarget] = useDrop({
         accept: "thing",
         drop(item, monitor) {
           const offset = monitor.getClientOffset();
           if (offset) {
              onDrop("global", offset);
           }
         }
       });
     
       return dropTarget;
     }
     
 
     const rootElement = document.getElementById('root')
     ReactDOM.render(<App />, rootElement)