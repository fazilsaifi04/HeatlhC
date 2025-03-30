import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Toast, Container, Row, Col, Card } from "react-bootstrap";
import { FaHospital, FaMoneyBill } from "react-icons/fa";
import "./admin.css";

const Admin = () => {
	const [doctorName, setDoctorName] = useState("");
	const [speciality, setSpeciality] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [clinicOrHospitalName, setClinicOrHospitalName] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [district, setDistrict] = useState("");
	const [state, setState] = useState("");
	const [fees, setFees] = useState(0);
	const [fetchedData, setFetchedData] = useState(null);
	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// !!!HANDLE POST REQUEST HERE
		const axios = require("axios");
		let data = JSON.stringify({
			doctorName: doctorName,
			speciality: speciality,
			phoneNumber: phoneNumber,
			clinicOrHospitalName: clinicOrHospitalName,
			addressLine1: address,
			city: city,
			district: district,
			state: state,
			fees: fees,
		});

		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/doctors",
			headers: { "Content-Type": "application/json" },
			data,
		};

		axios
			.request(config)
			.then(() => setShow(true))
			.catch(() => setError(true));
	};

	const fetchData = async () => {
		try {
			const response = await axios.get("https://medpal-backend.onrender.com/api/doctors");
			setFetchedData(response.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Container className="mt-4">
			<h1 className="text-center mb-4">Admin Page for Doctors</h1>
			<Row>
				<Col md={6} className="p-3">
					<Card className="p-4 shadow-lg">
						<h4 className="text-center mb-4">Add a Doctor</h4>
						<Form>
							<Form.Group className="mb-3" controlId="doctorName">
								<Form.Label>Doctor Name</Form.Label>
								<Form.Control type="text" placeholder="Enter name" onChange={(e) => setDoctorName(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="speciality">
								<Form.Label>Speciality</Form.Label>
								<Form.Control type="text" placeholder="Enter speciality" onChange={(e) => setSpeciality(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="phoneNumber">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="text" placeholder="Enter phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="clinicOrHospitalName">
								<Form.Label>Clinic/Hospital Name</Form.Label>
								<Form.Control type="text" placeholder="Enter name" onChange={(e) => setClinicOrHospitalName(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="fees">
								<Form.Label>Address Line 1</Form.Label>
								<Form.Control type="textarea" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="cityName">
								<Form.Label>City</Form.Label>
								<Form.Control type="text" placeholder="Enter the City" onChange={(e) => setCity(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="districtName">
								<Form.Label>District</Form.Label>
								<Form.Control type="text" placeholder="Enter District Name" onChange={(e) => setDistrict(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="stateName">
								<Form.Label>State</Form.Label>
								<Form.Control type="text" placeholder="Enter the State " onChange={(e) => setState(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-3" controlId="fees">
								<Form.Label>Fees</Form.Label>
								<Form.Control type="number" placeholder="Enter fees" onChange={(e) => setFees(e.target.value)} />
							</Form.Group>

							<Button variant="primary" onClick={handleSubmit} className="w-100">Submit</Button>
						</Form>
					</Card>
				</Col>

				<Col md={6} className="p-3">
					<Card className="p-4 shadow-lg">
						<h4 className="text-center mb-4">Doctors List</h4>
						<Button variant="success" onClick={fetchData} className="w-100 mb-3">Fetch Data</Button>
						<div style={{ maxHeight: "400px", overflowY: "auto" }}>
							<ol>
								{fetchedData &&
									fetchedData.map((element, i) => (
										<li key={i} className="mb-3">
											<strong>{element.doctorName}</strong> - {element.speciality} <br />
											<FaHospital /> {element.clinicOrHospitalName} <br />
											<FaMoneyBill /> {element.fees}
										</li>
									))}
							</ol>
						</div>
					</Card>
				</Col>
			</Row>
			<Toast show={show} onClose={() => setShow(false)} bg="success" className="position-fixed top-0 end-0 m-3">
				<Toast.Header><strong>Doctor Added Successfully!</strong></Toast.Header>
				<Toast.Body>Doctor {doctorName} has been added.</Toast.Body>
			</Toast>
			<Toast show={error} onClose={() => setError(false)} bg="danger" className="position-fixed top-0 end-0 m-3">
				<Toast.Header><strong className="text-danger">Error</strong></Toast.Header>
				<Toast.Body>Please check all details before submitting.</Toast.Body>
			</Toast>
		</Container>
	);
};

export default Admin;
