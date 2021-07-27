import React, { PureComponent } from 'react'
import { Default } from 'react-spinners-css';
class Spinner extends  PureComponent {
    
    render() {
        return (
            <div className="spinner">
                <Default color="LightSlateGrey" />
            </div>
        )
    }
}
export default Spinner