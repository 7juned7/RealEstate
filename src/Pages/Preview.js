import React, { useContext } from 'react'
import Header from '../components/Header'
import "../components/styles/Preview.css"
import PageContext from '../Context/PageContext'

const Preview = () => {
    const { values, socialAmenities, additionalFeatures } = useContext(PageContext)
    console.log(additionalFeatures)
    return (<>
        <Header />
        <div className="preview_container">
            <img src="" />
            <h2>1 BHK Flat / Apartment For Rent in Gokul Village Chs 2
                (545 Sq.ft.)</h2>
            <div className="address">
                <p>Gokul village chs 2 Shanti Park, near st. Xaviours High schoo</p>
                <div>
                    <img src="" />
                    <img src="" />
                </div>
            </div>
            <div className="appartment_photos">
                <div className="propimages__container">

                    <div className="upload_images">
                        <img src="" />
                        <button className='add_photo' >+ Add Photos Now</button>
                    </div>


                </div>
            </div>
            <div className="propertyOverview">
                <div className='flex'><h2>Property Overview</h2>
                    <p>Society: Gokul Village</p></div>

                <div >
                    <div>
                        {additionalFeatures ?
                            (
                                <div className='overviews'>
                                    {additionalFeatures.map(((data, index) => {
                                        return <div key={index} >{data}</div>
                                    }))}
                                </div>) : (<>
                                    Noting selected</>)}
                    </div>

                </div>
                <div className='flex' ><h2>Amenities</h2></div>
                <div className="amenities">
                    <div>
                        {socialAmenities ? (<div className='overviews'>
                            {socialAmenities.map(((data, index) => {
                                return <div>
                                    <div key={index} className='rendered_amenities' dangerouslySetInnerHTML={{ __html: data }} />
                                </div>
                            }))}
                        </div>) : (<>
                            Nothing selected</>)}
                    </div>
                </div>
                <div className="description">
                    <div className='flex' ><h2>Description</h2></div>
                    <p>Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.

                        If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic.

                        Never miss out on lifestyle as Rassaz Mall......</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Preview