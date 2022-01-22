import React, { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
};


