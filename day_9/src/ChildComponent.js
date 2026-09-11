import react from "react";

const ChildComponent = ({user}) => {
    const {name, section, email} = user;
    return (
        <div style={{textAlign: "center", border: "1px solid black", margin: "20px", padding: "20px"}}>
            <h1>Name: "Krishna"</h1>
            <h2>Section: "CSE-18"</h2>
            <h3>Email: "kgarg8320@gmail.com"</h3>
        </div>
    )

}

export default ChildComponent;