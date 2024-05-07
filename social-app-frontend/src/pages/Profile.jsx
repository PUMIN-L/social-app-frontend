import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <Link to={"/login"}>LoginPage</Link>
      <Link to={"/"}>Home Page</Link>
    </>
  );
}

export default Profile;
