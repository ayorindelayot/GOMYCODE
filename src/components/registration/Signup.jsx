
import './registration.scss'
import '../../styles/components/_button.scss';
import { useState } from 'react';
import { register } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch(); 
    const [state , setState]= useState({
        email: '',
        password:'',
        username:'',
    });

    const handleSubmit = (e) => {
   
       try {
        e.preventDefault();
        dispatch(
          register({
            username: state.username,
            email: state.email,
            password: state.password,
          })
        );
       } catch (error) {
        console.log(e)
        alert(error)
       }
      
    };

    const handleChange = e =>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    };

  return (
<div>
 <div className="signup-form">
    <div className="signup-form-wrapper">
      <form className="form" onSubmit={(e) => handleSubmit(e) }>
        <h4>Sign Up</h4>
          <div className='form-group'>
                <input
                 type="text" 
                 name='username'
                 value={state.username}
                 placeholder='Enter name '
                 onChange={handleChange}
                 />
           </div>
           <div className="form-group">
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
               <button className='button ' type='submit'>Sign Up</button>
            </div>
            
        </form>
    </div>

 </div>
</div> 
  );
}
;

export default Signup