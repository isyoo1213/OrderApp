import React, { Fragment } from "react";
import Header from "./conponents/Layout/Header";
import Meals from "./conponents/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
