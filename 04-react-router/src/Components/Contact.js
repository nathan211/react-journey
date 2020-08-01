import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
      super(props);
      this.state = {
        isRedirect: false,
        fDate: "tuesday"
      }
    }

    submitForm = (event) => {
      event.preventDefault();
      this.setState({
        isRedirect: true
      });
    }

    isChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        [name]: value
      });
    }

    render() {
        if(this.state.isRedirect === true){
          console.log(this.state);
          return <Redirect to="/"/>;
        }
        return (
            <div>
                <header className="masthead news">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-7 my-auto mx-auto mt-5 pt-5">
                  <div className="header-content mx-auto">
                    <h1 className="mb-5 text-center text-uppercase">trang liên hệ</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>
            <section className="page-section" id="contact">
            <div className="container">
              {/* Contact Section Heading*/}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
              {/* Icon Divider*/}
              {/* Contact Section Form*/}
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                  <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input onChange={ (event) => this.isChange(event) } name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email Address</label>
                        <input onChange={ (event) => this.isChange(event) } name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." aria-invalid="false" />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input onChange={ (event) => this.isChange(event) } name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Message</label>
                        <textarea onChange={ (event) => this.isChange(event) } name="fMessage" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Chọn ngày</label>
                        <select value={ this.state.fDate } onChange={ (event) => this.isChange(event)} name="fDate" className="form-control">
                          <option value="monday">Thứ 2</option>
                          <option value="tuesday">Thứ 3</option>
                          <option value="wednesday">Thứ 4</option>
                        </select>
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />
                    <div id="success" />
                    <div className="form-group"><button onClick={ (event) => this.submitForm(event) } className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
            </div>
            
        );
    }
}

export default Contact;
