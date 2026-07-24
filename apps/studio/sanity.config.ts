import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// TODO: doplň projectId a dataset po založení Sanity projektu (`sanity init`
// nebo Sanity MCP). title nastav na název webu.
export default defineConfig({
  name: 'default',
  title: '{{PROJECT_NAME}}',

  projectId: 'TODO_PROJECT_ID',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
