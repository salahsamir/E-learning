import React from "react";
import Error404 from "./Error404";
import Error401 from "./Error401";

function ErrorPage({ error, redirectTo }) {
  switch (error.response.status) {
    case 401 || 407:
      return <Error401 />;
    case 403:
      return <Error404 redirectTo={redirectTo} />;
    default:
      return <Error404 redirectTo={redirectTo} />;
  }
}

export default ErrorPage;
