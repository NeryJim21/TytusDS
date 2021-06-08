import React from 'react';
import {Link} from 'react-router-dom'

import Button from '../components/Button'
import ItemHome from '../items/ItemHome'

import '../Global.css'

class Home extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row Center ">
                    {ItemHome.map((item, index) =>{
                        return (
                            <div className="col-4">
                                <Link className="Link_text" to={item.path}>
                                    <Button 
                                        name={item.name}
                                        logo={item.logo}
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home;