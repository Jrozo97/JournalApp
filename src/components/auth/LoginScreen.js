import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: 'nando@gmail.com',
    password: '123456'
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <>
      {/* <div> */}
      <img
        className='logo-journal'
        src="https://firebasestorage.googleapis.com/v0/b/journalapp-4d018.appspot.com/o/Grupo%203.png?alt=media&token=1c5e189f-bf18-47bd-af98-22a3b96ad07a"
        alt="logo journal" />
      {/* </div> */}
      <form
        onSubmit={handleLogin}
        className="form-info animate__animated animate__fadeIn animate__faster"
      >

        <input
          type="text"
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />

        <button
          className='btn-register'
          type='submit'
          disabled={isLoading}
        >
          Login
        </button>


        <div className='auth__social-networks'>
          <p className='tile-social-networks'>Or <br></br>Login with social networks</p>
          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <h3 className='text-login-signup'>
          You do not have an account? <Link to="/auth/register" className='link'> Create an account</Link>
        </h3>

      </form>

    </>
  )
}
