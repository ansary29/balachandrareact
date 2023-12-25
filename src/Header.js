//component name start with capital 
//ctrl+alt+r to search a snippet
import React from 'react'

const Header = ({title}) => {
    // const headerStyle = {
    //     backgroundColor:"mediumblue",
    //     color:"white"
    // }
  return (
    <header >
        <h1>
            {title}
        </h1>
    </header>
  )
}

Header.defaultProps = {
  title: "To Do List"
}

export default Header;
