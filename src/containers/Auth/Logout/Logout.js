import React, { useEffect } from 'react';
import { Redirect } from 'react-router'
import { useDispatch } from 'react-redux';

import { logout } from '../../../store/actions/auth';

const Logout = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logout());
    })

    return <Redirect to='/' />
}

export default Logout;