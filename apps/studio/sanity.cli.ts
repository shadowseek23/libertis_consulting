import {defineCliConfig} from 'sanity/cli'

// TODO: doplň projectId a dataset (shodné se sanity.config.ts).
export default defineCliConfig({
  api: {
    projectId: 'TODO_PROJECT_ID',
    dataset: 'production',
  },
  deployment: {
    // Auto-updaty studia — https://www.sanity.io/docs/studio/latest-version-of-sanity
    autoUpdates: true,
  },
})
