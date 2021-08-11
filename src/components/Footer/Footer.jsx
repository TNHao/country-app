import React, { Component } from 'react';
import { FaFacebookF, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center mt-5">
                <div className="container py-3 h-100">
                    <section>
                        <a className="footer-link btn btn-lg mx-3 d-inline-flex align-items-center justify-content-center" href="https://www.facebook.com/TranNhatHao1516/" role="button"><FaFacebookF /></a>
                        <a className="footer-link btn btn-lg mx-3 d-inline-flex align-items-center justify-content-center" href="mailto: trannhathao1516@gmail.com" role="button"><FaMailBulk /></a>
                        <a className="footer-link btn btn-lg mx-3 d-inline-flex align-items-center justify-content-center" href="https://www.linkedin.com/in/tr%E1%BA%A7n-nh%E1%BA%ADt-h%C3%A0o-843914195/" role="button"><FaLinkedin /></a>
                        <a className="footer-link btn btn-lg mx-3 d-inline-flex align-items-center justify-content-center" href="https://github.com/TNHao" role="button"><FaGithub /></a>
                    </section>
                </div>
            </footer>
        )
    }
}
