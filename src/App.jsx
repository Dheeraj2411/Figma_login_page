import { BrowserRouter } from "react-router-dom";
import "./App.css";

import LoginForm from "./components/LoginForm";
// import Testing from "./Testing";

function App() {
  return (
    <>
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
      {/* <Testing /> */}
    </>
  );
}

export default App;
