import React from "react";
import { Text, hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ context }) => <Extension constants={context.constants} />);

const Extension = ({ constants }) => (
  <Text>POC 4 Card: {constants.API_DOMAIN}</Text>
);
