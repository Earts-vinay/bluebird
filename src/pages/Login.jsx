import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { validate } from '../utils/validationUtils';
import CustomTextField from '../utils/CustomTextfield';
import CustomButton from '../utils/CustomButton';
import { login } from '../redux/actions/authActions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      dispatch(login(values))
        .unwrap()
        .then(() => {
          navigate('/dashboard');
        })
        .catch(() => {
        });
    },
  });


  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const isButtonDisabled = !!(formik.errors.email || !formik.values.email) || !!(formik.errors.password || !formik.values.password);

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
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              <Typography style={{ fontWeight: '500', fontSize: '30px' }}>Login</Typography>
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

                <Typography
                  onClick={handleForgotPassword}
                  sx={{ cursor: 'pointer', color: '#2465E9' }}
                >
                  Forgot Password
                </Typography>
              </Box>

              <CustomButton
                sx={{ mt: 2, width: '100%', height: '45px' }}
                disabled={isButtonDisabled}
                type="submit"
              >
                Submit
              </CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
