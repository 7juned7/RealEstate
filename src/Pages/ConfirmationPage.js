import React from 'react'
import Header from '../components/Header'
import "../components/styles/ConfirmationPage.css"
const ConfirmationPage = () => {
    return (<>
        <Header />
        <div className="ConfirmationPage">

            <h1>Thank you for listing your property with us</h1>
            <p style={{ margin: "-2rem 0" }} >Your listing will be reviewed and will go live within 24 hours</p>
            <p>We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference.</p>

            <p>Dylan Estates</p>
            <div>

                <button className="editPropListing confirmationbtn">Edit Property Listing</button>
                <button className="prevPropListing confirmationbtn">Preview Property Listing</button>

            </div>
        </div>
    </>
    )
}

export default ConfirmationPage