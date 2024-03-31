import React from "react";
import { useParams } from "react-router-dom";

export default function Portfolio() {
  const uid = useParams();
  return <div>Portfolio :{uid}</div>;
}
