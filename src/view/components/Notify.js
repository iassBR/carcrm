import React from 'react'
import { Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { changeNotify } from '../../store/actions/notify';


export default function Notify() {

    const dispatch = useDispatch();

    const notify = useSelector(state => state.notify);

    return (
        <Snackbar
            anchorOrigin={{
                horizontal: notify.horizontal,
                vertical: notify.vertical
            }}
            open={notify.open}
            autoHideDuration={notify.time}
            onClose={() => dispatch(changeNotify({ open: false }))}
        >
            <Alert onClose={() => dispatch(changeNotify({ open: false }))} severity={notify.class} sx={{ width: '100%' }}>
               {notify.message}
            </Alert>
        </Snackbar>
    )
}
