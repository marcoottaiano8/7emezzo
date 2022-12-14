import { Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

//screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import RankingScreen from "./screens/RankingScreen";
import GameScreen from "./screens/GameScreen";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/ranking" element={<RankingScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Provider>
  );
}

export default App;
