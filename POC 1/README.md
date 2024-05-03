# POC 1: Simplify config
An initial effort to draft up a simpler version of project configuration. This POC aims to standardize the component config file naming and format. It also cuts down on the total number of app subcomponent configuration files.

## Major ideas represented
- All components are defined by a standardized `hscomponent.json` file
  - Required fields: `"type", "name", "uid"`
  - Optional fields: `"data"` (Object that contains component-specific fields)
- Reduce total number of app subcomponent configuration files

## Pros and Cons
- [<span style="color:green">PRO</span>] Fewer total configuration files in the app component
- [<span style="color:red">CON</span>] We relinquish control over the extensions and app.functions folders
  - How would this impact the extension and function dependencies as defined in the package.json files?
- [<span style="color:green">PRO</span>] Component config files are predictable and easy to learn
- [<span style="color:green">PRO</span>] User gets more control over file and folder organization

