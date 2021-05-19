import React, { Component } from 'react'

export class Generator extends Component {
    constructor() {
        super();
        this.state = {
            gender: 'male',
            name: '',
            birth: '',
            username: '',
            password: '',
            email: '',
            nat: 'US',
            cellphone: '',
            address: '',
            nationalId: '',
            picture: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    randomEmail() {
        let domains = ["gmail.com", "hotmail.com", "tutanota.com", "protonmail.com", "yahoo.com"];
        return "@" + domains[Math.floor(Math.random() * domains.length)];
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let apiCall = "https://randomuser.me/api/1.3/?nat=" + this.state.nat + "&gender=" + this.state.gender + "&password=upper,lower,number,8-16&noinfo";
        fetch(apiCall)
            .then(response => response.json())
            .then(json => json.results[0])
            .then(data => {
                this.setState({
                    name: data.name.first + " " + data.name.last,
                    birth: data.dob.date.split('T')[0],
                    username: data.login.username,
                    password: data.login.password,
                    email: data.email.split('@')[0] + this.randomEmail(),
                    cellphone: data.cell,
                    address: data.location.street.name + " " + data.location.street.number + ", " + data.location.postcode + " " + data.location.city,
                    nationalId: data.id.value,
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
                        <label htmlFor="male">Male</label> <br />
                        <input name="gender" type="radio" value="female" id="female" onChange={this.handleChange} />
                        <label htmlFor="female">Female</label> <br /><br />

                        <b>Nationality</b><br />
                        <input name="nat" type="radio" value="US" id="US" onChange={this.handleChange} />
                        <label htmlFor="US">American</label> <br />

                        <input name="nat" type="radio" value="NO" id="NO" onChange={this.handleChange} />
                        <label htmlFor="NO">Norwegian</label> <br /><br />

                        <button>Generate identity</button>
                    </form>


                    <table>
                        <tbody>
                            <tr>
                                <td className="muted">Name</td>
                                <td>{this.state.name}</td>
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
                                <td className="muted">Phone number</td>
                                <td>{this.state.cellphone}</td>
                            </tr>
                            <tr>
                                <td className="muted">Address</td>
                                <td>{this.state.address}</td>
                            </tr>
                            <tr>
                                <td className="muted">National ID</td>
                                <td>{this.state.nationalId}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Picture</h3>
                    <img src={this.state.picture} alt="User avatar here." />
                </main>
            </div>
        )
    }
}

export default Generator
