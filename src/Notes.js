import React from "react";

export default function Notes() {
  return (
    <div>
      <h2>Notes:</h2>
      <ul>
        <li>Using react json form.</li>
        <li>
          The output of this form should be saved in a backend as a JSON object.
          (provider form)
        </li>
        <li>
          On load of this form should fetch that JSON object from a backend to
          render this form. (provider form)
        </li>
        <li>
          The real Check-in form should fetch that JSON object form a backend
          and render the check-in form. (end-user form)
        </li>
        <li>
          The real Check-in form's submissions should be sent to a backend.
          (end-user answers)
        </li>
      </ul>
      <h2>Todos:</h2>
      <ul>
        <li>☑️ Implement default required questions</li>
        <li>☑️ Implement default questions library</li>
        <li>☑️ Implement side-by-side instant preview</li>
        <li>☑️ Impelment question alternative options</li>
        <li>☑️ Implement the end-user form itself, and each field</li>
        <li>Implement translation</li>
        <li>Implement Initial form values</li>
        <li>Implement submit logic</li>
        <li>Implement add new question logic</li>
        <li>Implement delete logic</li>
        <li>Implement re-order by drag and drop</li>
      </ul>
      <h2>Quesitons:</h2>
      <ul>
        <li>What is the current Check-in form like?</li>
      </ul>
    </div>
  );
}
