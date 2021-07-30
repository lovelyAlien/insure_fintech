import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ApiExample from "./pages/ApiExample";
import AxiosTest from "./pages/AxiosTest";
import Carinfo from "./pages/Carinfo";
import CipherTest from "./pages/CipherTest";
import HospitalDetail from "./pages/HospitalDetail";
import HospitalList from "./pages/HospitalList";
import ListPage from "./pages/ListPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListPage></ListPage>
        </Route>
        <Route path="/header" exact>
          <Header title="hello router"></Header>
        </Route>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/api01" exact>
          <ApiExample />
        </Route>
        <Route path="/hospital" exact>
          <HospitalList />
        </Route>
        <Route path="/hospitalDetail" exact>
          <HospitalDetail />
        </Route>
        <Route path="/enTest" exact>
          <CipherTest />
        </Route>
        <Route path="/carInfo" exact>
          <Carinfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;