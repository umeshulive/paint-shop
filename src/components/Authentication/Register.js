import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullName: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text darken-3">Registeration</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

}

export default Register;