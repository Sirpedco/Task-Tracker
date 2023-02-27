import React from 'react'
import PropTypes from "prop-types"


const Button = ({color, text, onClick}) => {
    // function onClick(e){
    //     console.log(e)
    // }
  return (
    <div>
       <button onClick={()=>onClick()} style={{backgroundColor:color}}
        className="btn">{text}</button>
    </div>
  )
}

Button.defaultProps={
    color: "steelblue"
}

Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
         
}

export default Button



// const Button = ({props}) => {
//     function onClick(){
        
//     }



//   return (
//     <div>
//        <button onClick={()=>onClick()} style={{backgroundColor: props.color}}
//         className="btn">{props.text}</button>
//     </div>
//   )
// }