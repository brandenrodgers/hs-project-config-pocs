# POC 3: More convention
This pulls from the exploration that the UIE teams did in their [examples repo here](https://git.hubteam.com/tkim/projects-with-public-app-react-extensions). The main idea is to leverage convention as much as possible to derive reasonable values without the user having to explicitly state them via config. This leans on many of the config ideas represented in POC 1 when it comes to folder structure. The main area to focus on for this example is the hscomponent.json file in the app folder.

## Major ideas represented
- Most of the explicit CRM card config fields have been removed. The values for these fields can be derived like this:
  - `type`: We can assume that anything defined in the "extensions" list is a crm card
  - `uid`: We can use the file name as the uid
  - `objectTypes`: Defaults to render for all objects. Devs can override by specifying target object types.
  - `location`: Defaults to allow all locations. Dev can override this behavior by specifying target locations. Portal admins can use these cards wherever the dev allows for them to be placed.
- The `extensions` and `functions` fields in the app config are now lists. We can use filenames as unique ids wherever necessary

## Pros and Cons
- **[PRO]** Significantly less up-front config required for devs to define new extensions
- **[PRO]** Reasonable and overrideable conventions means devs only add more config when more control is needed
- **[CON]** How do we surface to the devs when, where, and how convention is happening? How do they know that overrides are available?
