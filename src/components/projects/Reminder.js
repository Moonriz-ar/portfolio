import React from "react";

function Reminder() {
  return (
    <div className="text-slate-200">
      <p>Try the app with following login:</p>
      <ul>
        <li>
          <span className="underline underline-offset-2">Username</span>:
          challenge@alkemy.org
        </li>
        <li>
          <span className="underline underline-offset-2">Password</span>: react
        </li>
      </ul>
    </div>
  );
}

export default Reminder;
