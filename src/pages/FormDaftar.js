import React, { Component } from "react";
import { Link } from "react-router-dom";

class Daftar extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Masukkan nama lengkap"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Masukkan password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Alamat E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Masukkan alamat email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              Saya setuju semua pernyataan di{" "}
              <a href="" className="FormField__TermsLink">
                persyaratan layanan
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Daftar</button>{" "}
            <Link to="/Masuk" className="FormField__Link">
              Saya sudah menjadi member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Daftar;
