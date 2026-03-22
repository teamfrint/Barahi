import fs from 'fs';
import path from 'path';

/**
 * CLI Script to initialize a new client project from the Landing Kit template.
 * Usage: ts-node scripts/init-client.ts --name "Client Name" --color "#hex" --industry "Barber"
 */

const args = process.argv.slice(2);
const params: Record<string, string> = {};

args.forEach(arg => {
  if (arg.startsWith('--')) {
    const [key, value] = arg.split('=');
    params[key.slice(2)] = value;
  }
});

const clientName = params.name || 'New Client';
const primaryColor = params.color || '#2563EB';
const industry = params.industry || 'Service';

console.log(`🚀 Initializing Landing Kit for: ${clientName}...`);

const configPath = path.join(__dirname, '../apps/web/src/config/siteConfig.ts');
let configContent = fs.readFileSync(configPath, 'utf8');

// Simple regex replacement for demo purposes
// In production, we would use a more robust AST-based approach or a template file
configContent = configContent.replace(/name: ".*"/, `name: "${clientName}"`);
configContent = configContent.replace(/primary: ".*"/, `primary: "${primaryColor}"`);
configContent = configContent.replace(/industry: ".*"/, `industry: "${industry}"`);

fs.writeFileSync(configPath, configContent);

console.log(`✅ Successfully updated siteConfig.ts`);
console.log(`🎨 Theme applied: ${primaryColor}`);
console.log(`🏢 Industry set to: ${industry}`);
console.log(`\nNext steps:`);
console.log(`1. Run 'cd apps/web && npm run dev' to see the changes.`);
console.log(`2. Deploy to Vercel/Netlify for the client.`);
