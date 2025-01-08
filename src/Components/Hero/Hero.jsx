import React from 'react';
import './Hero.css'; // Assuming you use a CSS file for styling

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Welcome to Buffalo Run Dental!</h1>
                <p>
                    Providing you the highest quality dental care from a state of the art, friendly, family practice.
                    Our dental care team is warm and welcoming and value prevention and care for our patients.
                    We work hard to provide you with treatments that are carefully suited to your needs.
                </p>
                <p>
                    We accept all insurance providers and offer direct billing. We look forward to welcoming you to our practice.
                </p>
            </div>

            <div className="hero-form">
                <h2>Request an Appointment</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Full Name" required />
                        <input type="text" placeholder="Phone" required />
                    </div>
                    <input type="email" placeholder="Email" required />
                    <div className="form-group">
                        <select required>
                            <option value="">Appointment type</option>
                            <option value="checkup">Checkup</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="emergency">Emergency</option>
                        </select>
                        <select required>
                            <option value="">Preferred time</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                        </select>
                    </div>
                    <textarea placeholder="Additional Details"></textarea>
                    <button type="submit">Submit</button>
                </form>
                <p>
                    To book by phone, please call <a href="tel:403-226-9627">403-226-9627</a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
