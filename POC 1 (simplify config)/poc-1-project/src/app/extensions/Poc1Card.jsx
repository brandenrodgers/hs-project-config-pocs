import React from "react";
import { Text, hubspot } from "@hubspot/ui-extensions";

hubspot.extend(() => <Extension />);

const Extension = () => <Text>POC 1 Card</Text>;
