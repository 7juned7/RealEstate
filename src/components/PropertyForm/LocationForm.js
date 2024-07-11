import React, { useContext } from 'react'
import PageContext from '../../Context/PageContext'

const LocationForm = () => {
    const { values, handleChange } = useContext(PageContext)


    console.log(values)
    return (
        <div className="locationform">
            <form>
                <div className='grid'>
                    <div className='flex'>
                        <div className='width' >

                            <label className='flex' >Building/Society Name <span>*</span></label>
                            <div>

                                <input type="text"
                                    value={values.buildingName}
                                    onChange={handleChange}
                                    name='buildingName' />
                            </div>
                        </div>
                        <div className='width' >

                            <label className='flex' >Locality / Area <span>*</span></label>
                            <div>

                                <input
                                    value={values.locality}
                                    onChange={handleChange}
                                    name='locality' />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='width'>

                            <label className='flex' >Landmark / Street Name <span>*</span></label>
                            <div>

                                <input
                                    value={values.landmark}
                                    onChange={handleChange}
                                    name='landmark' />
                            </div>
                        </div>
                        <div className='width' >

                            <label className='flex' >City<span>*</span></label>
                            <div>

                                <input
                                    value={values.city}
                                    onChange={handleChange}
                                    name='city' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Mark Locality on Map</label>

                    </div>


                </div>
            </form>
        </div>
    )
}

export default LocationForm