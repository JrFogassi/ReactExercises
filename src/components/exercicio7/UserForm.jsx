import React, { useState } from "react"

const UserForm = () => {
    function handleClick(){
        alert(`Welcome ${name} ${surname} !`)
    }
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    return (
        <>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <label>Surname</label>
            <input
                type="text"
                name="name"
                value={surname}
                onChange={(e)=>setSurname(e.target.value)}
            />
            <button onClick={handleClick}>GREET ME</button>
        </>
    )
}

export default UserForm