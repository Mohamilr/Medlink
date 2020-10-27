import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="down-section">
            <section className="down-section-icons">
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter-square"></i>
                <i className="fa fa-facebook-official"></i>
            </section>
            <section className="container-fluid down-section-footer hidden-xs">
                <div className="down-main-grid">
                    <p className="down-grid-1">2020 Medlink Inc. All content posted on this site is the responsibility of the party postig such content, participation on this site by a party does not endorsement of any other party's contents, products or services.
                     Contents should not be used for medical advice, diagnosis or treatmeant.
                    </p>
                    <div className="down-grid-2 down-button-info">
                        <a href="#">AD CHOICES</a>
                        <a href="#">PRIVACY</a>
                        <a href="#">COOKIES</a>
                        <a href="#">SITEMAP</a>
                    </div>
                </div>
            </section>
            <section className="container-fluid down-section-footer hidden-lg">
                <div className="down-grid-2 down-button-info">
                    <a href="#">AD CHOICES</a>
                    <a href="#">PRIVACY</a>
                    <a href="#">COOKIES</a>
                    <a href="#">SITEMAP</a>
                </div>
            </section>
        </div>
    ) 
}

export default Footer;