import React from 'react'
import { Typography, TextField, Button } from '@mui/material'
import { authChange, login } from '../../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function Auth() {
    const dispatch = useDispatch();

    const { credentials, success, errors } = useSelector(state => state.auth);

    return (
        <div className="d-flex bg-white min-vh-100">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group text-center">
                            <img src="" alt="" />
                            <Typography className="mt-3" variant="h6">Plataforma para revenda de veículos</Typography>
                        </div>

                        <TextField
                            helperText={errors.email ? <span className="text-danger">{errors.email}</span> : ''}
                            error={errors.email ? true : false}
                            label="Email"
                            type="email"
                            autoComplete="email"
                            value={credentials.email}
                            margin="normal"
                            onChange={input => dispatch(authChange({ email: input.target.value }))}
                        />

                        <TextField
                            error={errors.password ? true : false}
                            helperText={errors.password ? <span className="text-danger">{errors.password}</span> : ''}
                            label="Senha"
                            type="password"
                            value={credentials.password}
                            margin="normal"
                            onChange={input => dispatch(authChange({ password: input.target.value }))}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            className="my-4"
                            onClick={() => dispatch(login(credentials))}
                        >Entrar </Button>

                        {(success) && <Redirect to="/veiculos" />}
                    </div>
                </div>
            </div>

        </div>
    )
}
