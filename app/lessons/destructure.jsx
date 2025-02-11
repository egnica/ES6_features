import React from "react";
import BBC from "../../bbcObject.json";
function destructure() {
  return (
    <div>
      <p>Destructuret</p>
      {Object.values(BBC.event).map(({ title, speakers }) => {
        const [{ fName, lName }] = speakers;

        return (
          <>
            <h3>{title}</h3>
            <p>
              {fName} {lName}
            </p>
          </>
        );
      })}
    </div>
  );
}

export default destructure;
