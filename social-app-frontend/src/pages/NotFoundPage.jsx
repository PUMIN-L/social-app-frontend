import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div>NotFoundPage</div>
      <Link to={"/"}>Go back to home page</Link>
    </>
  );
}

export default NotFoundPage;
