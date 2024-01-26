import Container from "../../components/Container";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Container>
      <div className="w-[300px] sm:w-[320px] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.2)] p-5">
        <LoginForm />
      </div>
    </Container>
  );
};

export default Login;
