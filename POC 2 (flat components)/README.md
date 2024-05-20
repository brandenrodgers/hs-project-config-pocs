# POC 2: Flat components
The main goal of this POC is to make project components as atomic/modular as possible. It removes the hierarchical structure of an app and its subcomponents in favor of a flatter overall project structure. Each subcomponent moves up one layer and becomes its own top-level component. We trade hierarchy for inter-component dependencies. This enables auth-reliant components to continue to work the same way that they work today.

## Major ideas represented
- All components are defined by a standardized `hscomponent.json` file (see POC 1 for more on this idea)
- All app subcomponents move up one layer and become top-level components
- The only function of the app config file is to create the app (i.e. a manifest file)
  - There is only one "app" component type. Public vs. private is specified within the app's config via `public`
- Auth-reliant components can reference the auth component using the `auth` field and passing in the app's uid

## Pros and Cons
- **[PRO]** The flatter and more module config structure means it is (in theory) easier to add new components and features to the project
- **[CON]** The config structure for apps and app subcomponents will no longer match the in-app representation which utilizes a hierarchical structure
- **[CON]** It becomes less natural to share code between different files of the same type. For example, sharing code between two CRM card in the same app
- **[PRO]** There is only one type of app config file. The public vs. private behavior of apps is specified via a field in the config, not by the component type
- **[CON]** This may not scale well and could easily become overly verbose. Lots of boilerplate needed to add a single new component (formerly subcomponent)


