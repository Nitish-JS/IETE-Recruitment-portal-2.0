import React,{useState} from 'react'
import Login_form from './Login_form'

const App_form = () => {
    const [submitted,setSubmitted]=useState(false)

    function submitForm()
    {
        setSubmitted(true);
    }

    return (
        <div className='form-container'>
            <Login_form />
        </div>
    )
}

export default App_form
