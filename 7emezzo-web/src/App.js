import { Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen"; 
import SignupScreen from "./screens/SignupScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </div>
  );
}

export default App;
