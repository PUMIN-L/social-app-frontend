import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
    </>
  );
}

export default LoginPage;
