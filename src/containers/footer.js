import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import './footer.css'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>OUR OFFICES</Footer.Title>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">About Us</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Locations</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Our Services</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Meet Our Doctors</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>PATIENT RESOURCES</Footer.Title>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Patient Forms</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Pay Online</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Special Offers</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Emergency Services</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>WORK WITH US</Footer.Title>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">Careers</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">HP Team Login</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">HP Team TimeClock</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>FOLLOW US!</Footer.Title>
                    <Footer.Link className='hvr-bounce-to-right' href="#/"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link className='hvr-bounce-to-right' href="#/"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>MAIN ADDRESS</Footer.Title>
                    <Footer.Link className='hvr-bounce-to-right' href="#/">12345 Oki Rd. CityName, State 00000</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}