# squad-sandbox

Throwaway target application for testing the [AI SDLC Squad](https://github.com/joanjpx/ai-sdlc-squad) end to end: a static calculator served by GitHub Pages.

| Environment | URL |
|---|---|
| Staging | https://joanjpx.github.io/squad-sandbox/staging/ |
| Production | https://joanjpx.github.io/squad-sandbox/ |

Deploys are dispatched by the Squad's DevOps Agent (`deploy-staging.yml`, `deploy-production.yml`, `rollback.yml`). Site content is kept in the `gh-pages` branch (`staging/` and the root) and published with `actions/deploy-pages`, which authenticates with OIDC; no long-lived secrets are used.

Run the tests with `npm test`.
