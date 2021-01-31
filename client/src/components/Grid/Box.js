import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
export const Box = ({ iconToShow,name,color}) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.BOX,color },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
         
           
             if (item && dropResult) {


              }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.4 : 1;
    return (<div ref={drag}  style={{display:"block"}} >
			{iconToShow}
		</div>);
};
