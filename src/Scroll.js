import React from "react";

const Scroll = props => {
  return (
    <div style={{overflowY: 'scroll', border: '2px solid #888', margin: '2rem 0', height: '700px'}}>
        {props.children}
    </div>  
    
  );
};

export default Scroll;
