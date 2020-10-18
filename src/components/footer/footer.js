import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div class="down-section">
            <section class="down-section-icons">
                <i class="fa fa-instagram"></i>
                <i class="fa fa-twitter-square"></i>
                <i class="fa fa-facebook-official"></i>
            </section>
            <section class="container-fluid down-section-footer hidden-xs">
                <div class="down-main-grid">
                    <p class="down-grid-1">2020 Medlink Inc. All content posted on this site is the responsibility of the party postig such content, participation on this site by a party does not endorsement of any other party's contents, products or services.
                     Contents should not be used for medical advice, diagnosis or treatmeant.
                    </p>
                    <div class="down-grid-2 down-button-info">
                        <a>AD CHOICES</a>
                        <a>PRIVACY</a>
                        <a>COOKIES</a>
                        <a>SITEMAP</a>
                    </div>
                </div>
            </section>
            <section class="container-fluid down-section-footer hidden-lg">
                <div class="down-grid-2 down-button-info">
                    <a>AD CHOICES</a>
                    <a>PRIVACY</a>
                    <a>COOKIES</a>
                    <a>SITEMAP</a>
                </div>
            </section>
        </div>
    ) 
}

export default Footer;