import React from 'react';
import {Link} from 'react-router-dom'

import Button from '../components/Button'
import ItemLineal from '../items/ItemLineal'

import '../Global.css'

class Lineal extends React.Component{
    render() {
        (console.log(this.props.location.pathname, "lineal"))
        return (
            <div className="container">
                <div className="row Center ">
                    {ItemLineal.map((item, index) =>{
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

export default Lineal;