"use client";

import { Hydrate, HydrateProps } from "@tanstack/react-query";
import React from "react";

function HydrateClient(props: HydrateProps) {
  return <Hydrate {...props} />;
}

export default HydrateClient;
