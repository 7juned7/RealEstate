import React from 'react'
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    let Navigate = useNavigate()
    const handleClick = () => {
        Navigate("/preview");
    }
    return (
        <div className="confirmation">


            <h2>POST PROPERTY ON DYLAN ESTATE?</h2>
            <button type="submit" className='submit' onClick={handleClick} >Continue</button>
            <p style={{ color: "blue", marginTop: "-1rem" }}>By continuing you agree to our Terms and Conditions & Privacy Policy</p>
        </div>
    )
}

export default Confirmation