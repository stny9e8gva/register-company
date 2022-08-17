const Register = () => {
    return (
        <section className="contact_section layout_padding">
            <div className="container contact_heading">
                <h2>Register</h2>

            </div>
            <div className="container">
                <form>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="inputCompany4">Company name</label>
                            <input type="text" className="form-control" id="inputCompany4" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputRepeatPassword4">Repeat password</label>
                            <input type="password" className="form-control" id="inputRepeatPassword4" />
                        </div>

                    </div>

                </form>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="">
                    Send
                </button>
            </div>
        </section>
    );
}

export default Register;