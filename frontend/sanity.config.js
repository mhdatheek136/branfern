/**
 * Sanity Studio Configuration
 * 
 * This embeds Sanity Studio in the frontend for unified Vercel deployment.
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
    name: 'default',
    title: 'Branfern Studio',

    projectId: 'u22yvmqh',
    dataset: 'production',

    basePath: '/studio', // Important: Must match the route path

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
