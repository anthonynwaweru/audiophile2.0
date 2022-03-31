import "./App.css";
import WebFont from "webfontloader";
import styled from "styled-components";
import Home from "./components/Home";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeadPhones from "./components/HeadPhones";

const Container = styled.div`
  font-family: "Manrope";

  // min-height: 100vh;
`;
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Manrope", "sans-serif"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/headphones">
            <HeadPhones />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
