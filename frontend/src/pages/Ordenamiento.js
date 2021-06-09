import React from 'react';
import {Link} from 'react-router-dom'

import Button from '../components/Button'
import ItemOrdenamiento from '../items/ItemOrdenamiento'

import '../Global.css'

class Ordenamiento extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row Center ">
                    {ItemOrdenamiento.map((item, index) =>{
                        return (
                            <div className="col Center2">
                                <Link className="Link_text" to={item.path}>
                                    <Button 
                                        name={item.name}
                                        logo={item.logo}
                                        clas={item.class}
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

export default Ordenamiento;