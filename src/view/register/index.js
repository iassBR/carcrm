import React from 'react'
import { TextField, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeRegister, register } from '../../store/actions/register';
import { Link, Redirect } from 'react-router-dom';

export default function Register() {

    const dispatch = useDispatch();
    const { user, error, success } = useSelector(state => state.register);

    return (
        <div className="d-flex bg-white min-vh-100">
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group text-center">
                            <img height="48" src="/logo.png" alt="Car CRM" />
                            <Typography className="mt-3" variant="h6" component="h1">
                                Cria sua conta
                            </Typography>
                        </div>
                        {/* Nome */}
                        <TextField
                            error={(error.name) && true}
                            margin="normal"
                            label="Nome"
                            value={user.name}
                            onChange={(event) => {
                                dispatch(changeRegister({ name: event.target.value }));
                                if (error.name && delete error.name);
                            }}
                        />
                        {(error.name) &&
                            <strong className="text-danger">{error.name[0]}</strong>
                        }

                        {/* Email */}
                        <TextField
                            error={(error.email) && true}
                            margin="normal"
                            label="Nome"
                            type="email"
                            autoComplete="email"
                            value={user.email}
                            onChange={(event) => {
                                dispatch(changeRegister({ email: event.target.value }));
                                if (error.email && delete error.email);
                            }}
                        />
                        {(error.email) &&
                            <strong className="text-danger">{error.email[0]}</strong>
                        }


                        {/* Password */}
                        <TextField
                            error={(error.password) && true}
                            margin="normal"
                            label="Senha"
                            type="password"
                            value={user.password}
                            onChange={(event) => {
                                dispatch(changeRegister({ password: event.target.value }));
                                if (error.password && delete error.password);
                            }}
                        />
                        {(error.password) &&
                            <strong className="text-danger">{error.password[0]}</strong>
                        }

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            className="my-4"
                            onClick={() => { dispatch(register(user)) }}
                        >
                            Registrar
                        </Button>

                        <div className="text-center">
                            <Link to="/login" className="text-danger mt-4">
                                Já possui cadastro ? Entrar no sistema
                            </Link>
                        </div>
                        {(success) &&
                            <Redirect to="veiculos" />}

                    </div>
                </div>
            </div>
        </div>
    );
}
