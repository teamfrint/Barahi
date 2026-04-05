# Landing Kit | Minimal React Boilerplate

A clean, production-ready foundation built with React 18, Vite, and TypeScript.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Folder Structure

- `src/components/layout/`: Global components like Header and Footer.
- `src/components/sections/`: Page-specific sections (Hero, etc.).
- `src/styles/`: Vanilla CSS with a focus on modern, premium aesthetics.
- `index.html`: Entry point.
- `vite.config.ts`: Vite configuration.

## Deployment

This project is automatically deployed to Cloudflare Pages via GitHub Actions.

### Setup

To enable automatic deployments, you need to add the following secrets to your GitHub repository (**Settings > Secrets and variables > Actions**):

1.  `CLOUDFLARE_API_TOKEN`: Create a token at [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens) with the **Cloudflare Pages** "Edit" permission.
2.  `CLOUDFLARE_ACCOUNT_ID`: Found in your Cloudflare dashboard (Account ID is visible in the URL or the dashboard home).

The workflow is defined in [.github/workflows/deploy.yml](file:///home/devendra/Desktop/Customer%20Projects/Barahi/.github/workflows/deploy.yml).
