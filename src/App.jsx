import { Route, Switch, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";


const App = () => {
  return (
    <div className="body">

<Routes>
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/invitation" component={Invitation} />
  </Switch>
</Routes>
    </div>
  );
};

export default App;
