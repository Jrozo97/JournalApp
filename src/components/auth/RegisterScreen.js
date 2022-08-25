import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui'
import { startRegisterEmailPassword } from '../../actions/auth'

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const { msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { name, email, password, confirmPassword } = formValues

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterEmailPassword(email, password, name))
    }
  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password !== confirmPassword || password.length < 5) {
      dispatch(setError('Password should be at least 6 characters and match each other'));
      return false;
    }

    dispatch(removeError());
    return true;

  }

  return (
    <>
      <img
        className='logo-journal'
        src="https://firebasestorage.googleapis.com/v0/b/journalapp-4d018.appspot.com/o/Grupo%203.png?alt=media&token=1c5e189f-bf18-47bd-af98-22a3b96ad07a"
        alt="logo journal" />
      <form
        onSubmit={handleRegister}
        className="form-info animate__animated animate__fadeIn animate__faster"
      >

        {
          msgError && (
            <div className='auth__alert-error'>
              {msgError}
            </div>
          )
        }

        <input
          type="text"
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          placeholder='Confirm Password'
          name='confirmPassword'
          className='auth__input'
          value={confirmPassword}
          onChange={handleInputChange}
        />
        <button className='btn-register' type='submit'>Register</button>


        <h3 className='text-login-signup'>
          Do you already have an account? <Link to="/auth/login" className='link'> Log in</Link>
        </h3>

      </form>

    </>
  )
}
