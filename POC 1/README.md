# POC 1: Simplify config
An initial effort to draft up a simpler version of project configuration. This POC aims to standardize the component config file naming and format. It also cuts down on the total number of configuration files required to represent the app subcomponents. There is no major change to the Theme or JS rendering components, other than the renaming of the theme.json file to hscomponent.json.

## Major ideas represented
- All components are defined by a standardized `hscomponent.json` file
  - Required fields: `"type", "name", "uid"`
  - Optional fields: `"data"` (Object that contains component-specific fields)
- Reduce total number of app subcomponent config files, and move more config into the app config file
- This is almost entirely config, and there is very little convention in place
  - There would likely have to be some convention around handling the package.json files

## Pros and Cons
- [<span style="color:green">PRO</span>] Fewer total configuration files in the app component. App subcomponents do not require additional configuration files. It all takes place in the app component config.
- [<span style="color:red">CON</span>] We relinquish control over the extensions and app.functions folders
  - How would this impact the extension and function dependencies as defined in the package.json files?
- [<span style="color:green">PRO</span>] Component config files are predictable and easy to learn. There are standardized fields that are consistent across components.
- [<span style="color:green">PRO</span>] User gets more control over file and folder organization. There are no folder structure conventions in place. The user is free to organize as they please.

