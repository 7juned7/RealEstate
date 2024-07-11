import React from 'react'
import Header from '../components/Header'


import PropertyListingForm from '../components/PropertyForm/PropertyListingForm'

import "../components/styles/Listproperty.css"
const PropertyFormPage = () => {
    return (<>

        <div className='propformpage'>

            <PropertyListingForm />


        </div>

    </>
    )
}

export default PropertyFormPage