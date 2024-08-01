import React, { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../utils/CustomTextfield';
import { formatTime, validate } from '../../utils/validationUtils';
import CustomButton from '../../utils/CustomButton';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [showRecoveryResetPassword, setShowRecoveryResetPassword] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const formRef = useRef(null);
    const textFieldRef = useRef(null);
    const [timer, setTimer] = useState(20);
    // console.log(timer);
    const [isResendDisabeled, setIsResendDisabeled] = useState(true);

    useEffect(() => {
        let countdown
        if (isResendDisabeled) {
            countdown = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(countdown);
                        setIsResendDisabeled(false);
                        return 20;
                    } else {
                        return prev - 1;
                    }
                })
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [isResendDisabeled])


    const handleResend = () => {
        setIsResendDisabeled(true);
    }


    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: values => {
            setShowRecoveryResetPassword(false);
        },
    });

    const handleLoginRedirect = () => {
        navigate('/');
    };

    const isButtonDisabled = !!(formik.errors.email || !formik.values.email);

    useEffect(() => {
        const handleClickOutside = event => {
            if (formRef.current && !formRef.current.contains(event.target) &&
                textFieldRef.current && !textFieldRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Container
            maxWidth="xl"
            disableGutters
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '80%',
                    height: '80%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '35%',
                        height: '70%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 'auto',
                        padding: '30px',
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        <img
                            src="/assets/icons/loginLogo.svg"
                            alt="Logo"
                            style={{ width: '350px', height: 'auto' }}
                        />
                    </Box>
                    <Box sx={{ width: '100%', fontSize: '30px', fontWeight: '550' }}>
                        Lorem Ipsum is simply dummy text of the
                        <Typography sx={{ width: '90%', fontSize: '13px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere at augue ac ornare. Curabitur sed ligula felis. Ut efficitur laoreet elit ac euismod. Aliquam ne
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: '35%',
                        height: '70%',
                        boxShadow: 3,
                        borderRadius: '20px',
                        margin: 'auto',
                        padding: '30px',
                    }}
                >
                    {showRecoveryResetPassword ? (
                        <form onSubmit={formik.handleSubmit}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    gap: '20px',
                                    mt: 3
                                }}
                            >
                                <Box>
                                    <Typography variant="h4" component="h1" gutterBottom align="left" sx={{ fontWeight: '500', fontSize: '30px' }}>
                                        Forgot Password?
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px', color: '#202020B2' }}>
                                        No worries! Just enter your email and we’ll send you a reset password link.
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomTextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        error={!!formik.errors.email}
                                        helperText={formik.errors.email}
                                        InputProps=""
                                        sx={{
                                            marginBottom: formik.errors.email ? '0' : '10px',
                                        }}
                                    />
                                    <Typography
                                        align="left"
                                        onClick={handleLoginRedirect}
                                        sx={{ mt: 1, cursor: 'pointer', color: '#2465E9', textDecoration: 'underline' }}
                                    >
                                        Just remember? Login
                                    </Typography>
                                </Box>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 5, width: '100%', height: '45px', borderRadius: '5px' }}
                                    disabled={isButtonDisabled}
                                >
                                    Send Recovery Email
                                </Button>
                            </Box>
                        </form>
                    ) : (
                        <Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    bgcolor: '#FDFBEA',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    mb: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <img
                                        src="/assets/icons/notification.svg"
                                        alt="Notification"
                                        style={{ display: 'block', margin: '0 auto' }}
                                    />
                                </Box>
                                <Typography variant="body1">
                                    Check your email.
                                </Typography>
                                <Typography variant="body1">
                                    We've sent you a reset password link.
                                </Typography>
                            </Box>

                            <CustomTextField
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                error={!!formik.errors.password}
                                helperText={formik.errors.password}
                                InputProps=""
                                sx={{
                                    marginBottom: formik.errors.email ? '0' : '10px',
                                }}
                            />
                            <Box sx={{ display: "flex", alignItems: "center", gap: '10px', pt: 1 }}>
                                <Typography>
                                    Resend in{' '}
                                    <span style={{ color: '#187BCD', textDecoration: 'underline' }}
                                    >
                                        00:{timer}
                                    </span>
                                </Typography>
                                <Typography onClick={handleResend} sx={{ textTransform: 'capitalize', cursor: 'pointer', textDecoration: 'underline', color: '#187BCD' }}>
                                    {isResendDisabeled ? '' : 'Resend now'}
                                </Typography>
                            </Box>

                            <CustomButton
                                sx={{ mt: 5, width: '100%', height: '45px' }}
                                disabled={isButtonDisabled}
                                onClick={handleLoginRedirect}
                            >
                                Login
                            </CustomButton>
                        </Box>
                    )}
                </Box>
            </Box>
        </Container >
    );
}

export default ForgotPassword;
