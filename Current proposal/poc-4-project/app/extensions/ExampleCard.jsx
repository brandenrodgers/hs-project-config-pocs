import React from "react";
import { Text, hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ context }) => <Extension constants={context.constants} />);

const Extension = ({ constants }) => (
  <Text>Example Card: {constants.API_DOMAIN}</Text>
);
