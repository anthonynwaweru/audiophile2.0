import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { data } from "./data";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const speakersData = data.filter((dta) => dta.category === "speakers");
    setSpeakers(speakersData);
  });
};
