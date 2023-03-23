import React from "react";
import { Header, Products, ProfileCard } from "./component";

function App() {
  return (
    <div className="bg-[#FCFCFD] px-4 sm:px-8 py-10">
      <Header />
      <ProfileCard />
      <Products />
    </div>
  );
}

export default App;
