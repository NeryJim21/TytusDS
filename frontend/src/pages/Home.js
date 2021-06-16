import React from 'react';
import {Link} from 'react-router-dom'

import Button from '../components/Button'
import ItemHome from '../items/ItemHome'

import '../Global.css'

class Home extends React.Component{
    render() {
        (console.log(this.props.location.pathname, "home"))
        return (
            <div className="container">
                <div className="row Center">
                    {ItemHome.map((item) =>{
                        return (
                            <div className="col Center2">
                                {(console.log(item.path, "home"))}
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

export default Home;