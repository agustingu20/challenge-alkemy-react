import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "../assets/login.css";

export default function Login({ setToken }) {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://challenge-react.alkemy.org/",
        input
      );
      localStorage.setItem("token", JSON.stringify(data));
      setToken(data.token);
      history.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <Form onSubmit={handleSubmit} className="form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="example@example.com"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Your password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
