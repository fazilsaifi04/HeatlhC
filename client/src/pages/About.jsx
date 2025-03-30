import Navbar from "../components/Navbar";
import "../App.css";
import "./about.css";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
import { Card, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<Navbar buttons={true} />
			<div id="about-container" style={{ minHeight: "80vh" }}>
				<div id="about-left-container">
					<Fade
						delay={10}
						direction="top"
						style={{ color: "black" }}
						triggerOnce
					>
						<h2>About Us</h2>
					</Fade>

					<p id="about-text">
Revolutionizing Healthcare Logistics
At HealthC, we are on a mission to transform the way healthcare companies manage their logistics and deliver services to patients. Our Real-Time Logistics App is designed to streamline the coordination of technicians, tests, and appointments, ensuring efficiency, transparency, and convenience for everyone involved.
<hr/>
<h2>Our Story</h2>
The idea for HealthC was born out of a simple yet critical observation: healthcare companies often struggle with managing their technicians and test schedules, leading to delays, inefficiencies, and frustrated customers. We realized that by integrating real-time logistics into healthcare operations, we could create a seamless experience for technicians, healthcare providers, and patients alike.

With a team of passionate developers, healthcare experts, and logistics specialists, we set out to build a solution that bridges the gap between healthcare services and logistics management. Today, HealthC is empowering healthcare companies to deliver faster, more reliable services while enhancing patient satisfaction.
<hr/>
<h2>Our Mission
</h2>
Our mission is to simplify healthcare logistics by providing a cutting-edge platform that connects healthcare companies, technicians, and patients in real-time. We aim to:

Improve the efficiency of healthcare operations.

Enhance patient experience through timely and accurate service delivery.

Empower technicians with tools to manage their schedules and tasks effectively.
<hr/>
<h2>Our Vision</h2>
We envision a future where healthcare logistics is no longer a bottleneck but a seamless part of the healthcare ecosystem. By leveraging technology, we strive to create a world where every patient can access healthcare services quickly and effortlessly, and every healthcare company can operate at its full potential.

What We Offer
Real-Time Technician Tracking: Track the location and availability of technicians in real-time.

Efficient Test Booking: Allow patients to book tests at their preferred time and location.

Seamless Coordination: Enable healthcare companies to manage technicians and tests with ease.

Transparent Communication: Keep patients informed about their bookings and technician assignments.
<hr/>
<h2>Our Values</h2>
Innovation: We constantly push the boundaries of technology to deliver smarter solutions.

Efficiency: We prioritize solutions that save time and resources for healthcare companies.

Patient-Centricity: We put patients at the heart of everything we do.

Reliability: We build trust by delivering consistent and dependable services.


Join Us in Transforming Healthcare Logistics
We are always looking for passionate individuals and forward-thinking healthcare companies to join us on this journey. Whether you’re a technician, a healthcare provider, or a patient, HealthC is here to make your life easier.

Together, let’s build a future where healthcare logistics is no longer a challenge but a strength.

Feel free to customize this template with your team’s details, app name, and any additional information you’d like to include! Let me know if you need further assistance. 😊

<br/>


					</p>
				</div>

				
			</div>
			<Footer />
		</>
	);
};

export default About;