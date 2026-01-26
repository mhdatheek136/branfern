
import { createClient } from '@sanity/client';

const projectId = 'u22yvmqh';
const dataset = 'production';
// Hardcoded token for testing (from .env.local)
const token = 'skL8DIFHOlTo7ZMgho5Og0VyvJsOxdHKQIfuO8klGI5hiSwj4X9sRFnhyoqwKhR0T06I4k6ykr1W2vRBD8ZNDXeYivi7FJfPtUWZumZTbD1VtzYF780LnJqnJcD9irKrOPbxWXqoQBP5tCFnDCAFTu3P9HKVYKoFhU6aimYzSYt0oaIMBzI4';

console.log('--- Config ---');
console.log('Project ID:', projectId);
console.log('Dataset:', dataset);
console.log('Token exists:', !!token);

// 1. Public Client (No Token) - Simulates Frontend
const publicClient = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: false,
});

// 2. Auth Client (With Token) - Simulates Backend checks / Private visibility
const authClient = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: false,
    token: token // Using the read token
});

async function runTests() {
    console.log('\n--- 1. Testing Public Access (Frontend Simulation) ---');
    try {
        const projects = await publicClient.fetch('*[_type == "project"]{_id, name, _createdAt}');
        console.log(`[Public] Found ${projects.length} projects.`);
        if (projects.length > 0) console.log(projects);
    } catch (err) {
        console.error('[Public] Error:', err.message);
    }

    console.log('\n--- 2. Testing Authenticated Access (Private/Draft Check) ---');
    try {
        // Fetch including drafts
        const query = '*[_type == "project"]{_id, name, _createdAt}';
        const projects = await authClient.fetch(query);
        console.log(`[Auth] Found ${projects.length} projects (Published).`);

        // Check for drafts specifically if token allows
        const drafts = await authClient.fetch('*[_id in path("drafts.**") && _type == "project"]{_id, name}');
        console.log(`[Auth] Found ${drafts.length} drafts.`);

        if (projects.length === 0 && drafts.length > 0) {
            console.log('>>> CONCLUSION: You have drafts but no published content! Click "Publish" in the Studio.');
        } else if (projects.length > 0) {
            console.log('>>> CONCLUSION: Published content exists. If frontend is empty, check CORS.');
        } else {
            console.log('>>> CONCLUSION: No content found at all. Check Project ID / Dataset name.');
        }

    } catch (err) {
        console.error('[Auth] Error:', err.message);
    }
}

runTests();
