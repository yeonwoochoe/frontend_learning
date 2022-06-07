import React from "react";
import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Oders from "./components/Oders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Oders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
