
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './registration.scss'
import { signin } from '../../redux/authSlice';

const Signin = () => {
  const dispatch = useDispatch(); 

    const [state , setState]= useState({
        email: '',
        password:'',
    });

    const handleChange = e =>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
        signin({
          email: state.email,
          password: state.password,
        })
      );
    };

  return (
<div>
 <div className="signup-form">
    <div className="signup-form-wrapper">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h4>Sign In</h4>
          <div className='form-group'>
                
                <input 
                    type="email" 
                    name='email'
                    id='email'
                    value={state.email}
                    placeholder='Enter email' 
                    onChange={handleChange}
            
                />
                </div>
            <div className='form-group'>   
               <input type="password"
                  name='password'
                  id='password'
                  value={state.password}
                  placeholder='Enter password'
                  onChange={handleChange}
             
                />
            </div> 
            <div className='form-group'>   
               <button className='button '>Sign In</button>
            </div>
            
        </form>
    </div>

 </div>
</div> 
  );
};

export default Signin