import React from 'react'
import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'

export default function Confirm(props) {
    const { open, title, onClose, onConfirm } = props;

    return (
        <Dialog
            open={open}
            onClose={() => onClose()}
        >
            <DialogTitle >{title || 'Você tem certeza ?'}</DialogTitle>
            <DialogActions className="justify-content-center mb-2">
                <Button onClick={() => onClose()} variant="contained">
                    Não
                </Button>
                <Button onClick={() => {
                    onClose();
                    onConfirm();
                }}
                    variant="outlined"
                    color="error"
                >
                    Sim
                </Button>
            </DialogActions>
        </Dialog>
    )
}
