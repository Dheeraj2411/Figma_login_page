import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Testing from "./Testing";

import LoginForm from "./components/LoginForm";

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
