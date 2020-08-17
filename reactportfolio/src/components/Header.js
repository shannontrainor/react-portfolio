import React from "react";

const styles = {
    headerStyle: {
        background: "black"
    },
    headingStyle: {
        fontSize: 30,
        color: "white"
    }
}



function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Shannon Trainor Portfolio</h1>
        </header>
    );
}

export default Header;
