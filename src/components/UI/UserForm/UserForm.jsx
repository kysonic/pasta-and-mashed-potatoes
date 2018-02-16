import React, {Component} from 'react';
import './UserForm.css';


class UserForm extends Component{
    state = {
        email: '',
        fullName: '',
        emailError: '',
        fullNameError: ''
    }
    constructor(props: Props,context:any){
        super(props,context);
        this.emailRegexp = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;
    }
    componentDidMount(){
        this.validateEmail(this.state.email);
        this.validateFullName(this.state.fullName);
    }
    render() {
        return (
            <form className="UserForm" onSubmit={this.handleSubmit}>
                <div className="title">Log in</div>
                <fieldset>
                    <div className="group">
                        <label>Full name:</label>
                        <input  name="fullName" type="text" value={this.state.fullName} onChange={this.handleChange} placeholder="Enter your name"/>
                        <div className="error">{this.state.fullNameError}</div>
                    </div>
                    <div className="group">
                        <label>E-mail</label>
                        <input  name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email"/>
                        <div className="error">{this.state.emailError}</div>
                    </div>
                    <input disabled={this.state.emailError || this.state.passwordError} type="submit" value="Submit order"/>
                </fieldset>
            </form>
        );
    }
    handleChange = (e: Object)=>{
        const target = e.target;
        const name = target.name;
        this['validate'+name.charAt(0).toUpperCase()+name.substr(1)](target.value);
        this.setState({
            [name]: target.value
        });
    }
    validateEmail(value){
        if(!value) return this.setState({emailError:'Email cannot be empty'});
        if(!this.emailRegexp.test(value)) return this.setState({emailError:'Email is not correct.'});
        this.setState({emailError:''});
    }
    validateFullName(value){
        if(!value) return this.setState({fullNameError:'Name cannot be empty'});
        this.setState({fullNameError:''});
    }
    handleSubmit = (e)=>{
        window.location.hash = '#/';
        // Send ajax request with fetch or axios
        this.setState({email:'',password:'',emailError:'',fullNameError:''});
        this.props.clearBasket();
        e.preventDefault();
    }
}

export default UserForm;