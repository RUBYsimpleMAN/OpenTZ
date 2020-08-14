import React from "react";
import { ReactComponent as EmptyStar } from "./EmptyStar.svg";
import { ReactComponent as FilledStar } from "./FilledStar.svg";

function Star({ isFilled, ...other }) {
  const Component = isFilled ? FilledStar : EmptyStar;
  return <Component { ...other }/>;
}

export default Star;
