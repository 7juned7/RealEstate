import React, { useContext } from 'react'
import PageContext from '../Context/PageContext';
import Home from './Home'
import Homepage from './Homepage';

const SellerHomePage = () => {
    const { formPage } = useContext(PageContext);
    return (
        <>{formPage < 2 && (<>
            <Home />
        </>)}
            {formPage >= 2 && (<>
                <Homepage />
            </>)}</>
    )
}

export default SellerHomePage;