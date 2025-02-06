import React from "react";

const welcome=(props)=>{
    const{name ,greeting}=props;
    return(
        <h1 className='message'>{greeting},{name}</h1>
    )
}
export default welcome;