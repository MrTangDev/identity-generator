import React, { Component } from 'react'

export class Generator extends Component {
    constructor() {
        super();
        this.state = {
            gender: 'male',
            firstName: '',
            lastName: '',
            birth: '',
            username: '',
            password: '',
            email: '',
            nat: 'US',
            city: '',
            address: '',
            picture: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let apiCall = "https://randomuser.me/api/1.3/?nat=" + this.state.nat + "&gender=" + this.state.gender;
        fetch(apiCall)
            .then(response => response.json())
            .then(json => json.results[0])
            .then(data => {
                this.setState({
                    firstName: data.name.first,
                    lastName: data.name.last,
                    birth: data.dob.date.split('T')[0],
                    username: data.login.username,
                    password: data.login.password,
                    email: data.email,
                    city: data.location.city,
                    address: data.location.street.name + " " + data.location.street.number + ", " + data.location.postcode,
                    picture: data.picture.large
                })
            });
    }


    render() {
        return (
            <div>
                <main>
                    <br />
                    <form onSubmit={this.handleSubmit}>

                        <b>Gender</b><br />
                        <input name="gender" type="radio" value="male" id="male" onChange={this.handleChange} />
                        <label for="male">Male</label> <br />
                        <input name="gender" type="radio" value="female" id="female" onChange={this.handleChange} />
                        <label for="female">Female</label> <br /><br />



                        <b>Nationality</b><br />
                        <input name="nat" type="radio" value="US" id="US" onChange={this.handleChange} />
                        <label for="US">American</label> <br />

                        <input name="nat" type="radio" value="NO" id="NO" onChange={this.handleChange} />
                        <label for="NO">Norwegian</label> <br /><br />


                        <button>Generate identity!</button>
                    </form>


                    <table>
                        <tbody>
                            <tr>
                                <td className="muted">First name</td>
                                <td>{this.state.firstName}</td>
                            </tr>
                            <tr>
                                <td className="muted">Last name</td>
                                <td>{this.state.lastName}</td>
                            </tr>
                            <tr>
                                <td className="muted">Date of birth</td>
                                <td>{this.state.birth}</td>
                            </tr>
                            <tr>
                                <td className="muted">Username</td>
                                <td>{this.state.username}</td>
                            </tr>
                            <tr>
                                <td className="muted">Password</td>
                                <td>{this.state.password}</td>
                            </tr>
                            <tr>
                                <td className="muted">E-mail</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td className="muted">City</td>
                                <td>{this.state.city}</td>
                            </tr>
                            <tr>
                                <td className="muted">Address</td>
                                <td>{this.state.address}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Picture</h3>
                    <img src={this.state.picture} alt="User avatar here!" />
                </main>
            </div>
        )
    }
}

export default Generator
