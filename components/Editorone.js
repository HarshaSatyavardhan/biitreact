import React from "react";
import { Jsme } from "jsme-react";

const Editorone = ({ setSoluteState }) => {
  return (
    <div>
      <Jsme
        height="300px"
        width="400px"
        options="oldlook,star"
        onChange={setSoluteState}
      />
    </div>
  );
};

export default Editorone;
