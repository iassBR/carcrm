import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, CircularProgress, Typography } from '@mui/material';
import { changeLoading } from '../../store/actions/loading';

export default function Loading() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);

    return (
        <div>
            <Modal
                open={loading.open}
                onClose={() => dispatch(changeLoading({ open: false }))}
                className="d-flex justify-content-center align-items-center h-100 outline-none"
            >

                <div className="bg-white d-flex align-align-items-center rounded-lg p-3">
                    <div className="mr-3">
                        <CircularProgress size={20} />
                    </div>
                    <Typography variant="subtitle1" className="ml-3" > {loading.message} </Typography>
                </div>
            </Modal>

        </div>
    )
}
