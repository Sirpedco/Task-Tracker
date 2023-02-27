//import PropTypes from 'prop-types'
import React from "react"
import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className= "header">
      <h1 /*style={headingStyle}{color: "red", backgroundColor: "black" }}*/>{title}</h1>
     <Button onClick={onAdd} color={showAdd ?"red" : "green"} text={showAdd ? "Close" : "Add" }></Button>
    </header> 
  )
}
 
Header.defaultProps = {
    title: "Task Tracker"
}
 
// Header.PropTypes = {
//     title: PropTypes.string.isRequired
// }


//     css in JS
//  const headingStyle = {
//     color: "red",
//     backgroundColor: "black" 
// }
export default Header
