import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import Context from '../../utils/context';

const Logout = () => {
    const context: any = useContext(Context);

    const handleLogout = () => {
        /*      event?.preventDefault();
        context.handleUserLogout();*/
    }

    return (
        <div>
            <Button variant="contained" onClick={() => handleLogout()} >LOGOUT</Button>
        </div>
    )
}

export default Logout
