import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px dashed ', height:'45.5rem'}}>
            {props.children}
        </div>
    )
}

export default Scroll;