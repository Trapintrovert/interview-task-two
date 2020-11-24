import React,{useState} from 'react'
import {Row, Col, FormGroup, Button} from 'reactstrap'

import FormInput from '../../components/form-input/FormInput'
import useValidator from '../validateHook/useValidator'

const initialState = {
    email: "",
    password: ''
}
const Login = () => {
    const [formData, setFormData] = useState(initialState)
    const [validator, showValidatorMessage] = useValidator();
    
    const{email, password }= formData
    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({ ...formData, [name] : value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(validator.allValid()){
            console.log(formData)
        }else{
            showValidatorMessage(true)
        }
    }

    return (
        <div className="login">
            <Row>
                <Col>
                    <div className="login__content">
                        <h2 className="login__title">Welcome Back</h2>
                        <p className="login__text">Login in Here</p>
                        <div className="login__form">
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormInput
                                    type='email'
                                    name='email'
                                    value={email}
                                    className="form-control"
                                    handleChange={handleChange}
                                    placeholder="Email Address"
                                />

                                {
                                    validator.message('email', email, 'required|email', {
                                        message: {
                                            required: 'Required'
                                        },
                                        className: 'text-danger'
                                    })
                                }
                            </FormGroup>
                            <FormGroup>
                                <FormInput
                                    type='password'
                                    name='password'
                                    value={password}
                                    className="form-control"
                                    handleChange={handleChange}
                                    placeholder="****"
                                />
                                {
                                    validator.message('password', password, 'required|min:3', {
                                        message: {
                                            required: 'Required'
                                        },
                                        className: 'text-danger'
                                    })
                                }
                            </FormGroup>
                            <span className="login__forgot--password">
                                <a href="#." >Forgot Password</a>
                            </span>
                            <Button type="submit">Login</Button>
                            <p className="login__signup-message">Dont't have an account? <a href="#.">Sign up</a></p>
                        </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login
