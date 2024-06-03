# POC 4: Environment support
This shows one option for supporting several environment-related needs:
- The ability to define constants in the config that can be leveraged in JS files. This helps support the use case where a dev wants to quickly swap out the domain that their crm card is targeting.
- The ability to override specific config values at upload/local dev time


## Major ideas represented
- No more required `srcDir` in the hsproject.json file. We default to `"."`
- Support `constants` field in the app config file. These constants are accessible via `context.constants` in the app's JS files
- Support app config layered overrides via additional config files that use the `hscomponent.<name>.json` naming convention. These files will reference the parent config file, and they can override specific config values at upload/local dev time.

## Pros and Cons
- **[PRO]** Devs are given more dynamic config options, which should cut down on the number of manual steps often needed to switch an app from one environment to another.
- **[CON]** Can we support this layered overrides behavior for every app field? What if the user overrides the app's name or uid? Would we need to re-upload a brand new app? Is that expected behavior?
