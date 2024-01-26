import Container from "../../components/Container";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <Container>
      <div className="w-[300px] sm:w-[320px] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.2)] p-5">
        <RegisterForm />
      </div>
    </Container>
  );
};

export default Register;
