import "./styles.css";
import ProviderFormLayout from "./ProviderFormLayout";
import Notes from "./Notes";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Demo Sandbox</h1>
      <h3>Use this form to apply changes to your Check-in form</h3>
      <hr />
      <ProviderFormLayout />
      <hr />

      <Notes />
    </div>
  );
}
