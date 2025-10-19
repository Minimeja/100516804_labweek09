import React from "react";

function WelcomeCard(props) {
    return (
        <div style={styles.card}>
            <h1>{props.course}</h1>
            <h3>{props.lab}</h3>
            <p><strong>Student ID:</strong> {props.studentId}</p>
            <p><strong>Name:</strong> {props.studentName}</p>
            <p><em>{props.college}</em></p>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: "#ffffff",
        width: "600px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
    }
};

export default WelcomeCard;
