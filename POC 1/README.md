# POC 1: Simplify config
An initial effort to draft up a simpler version of project configuration. This POC aims to standardize the component config file naming and format. It also cuts down on the total number of configuration files required to represent the app subcomponents. There is no major change to the Theme or JS rendering components, other than the renaming of the theme.json file to hscomponent.json.

## Major ideas represented
- All components are defined by a standardized `hscomponent.json` file
  - Required fields: `"type", "name", "uid"`
  - Optional fields: `"data"` (Object that contains component-specific fields)
- Reduced the total number of app subcomponent config files and moved more config into the app's top-level config file
- This POC is almost entirely config-based, and there is very little convention in place
  - NOTE: There would likely have to be some convention around handling the package.json files (see cons section)

## Pros and Cons
- [PRO] Fewer total configuration files in the app component. App subcomponents do not require additional configuration files. It all takes place in the app component config.
- [CON] We relinquish control over the extensions and app.functions folders. There is no longer any convention around folder naming. Extensions can live in any folder that the dev chooses because the files are directly referenced in the config by path.
  - Question: How does this pattern impact the extension and function dependencies as defined in the package.json files? How should a dev define dependencies for their extensions if we don't require them to put all of their extensions in the same folder?
- [PRO] Component config files are predictable and easy to learn. There are standardized fields that are consistent across components.
- [PRO] The dev gains control over file and folder organization. There are no folder structure conventions in place. The user is free to organize as they please because all of the important references take place explicitly in the config.
- [CON] The hscomponent.json files can potentially get very lengthy with this pattern. Consider an app with many extensions, functions, and webhooks defined.
