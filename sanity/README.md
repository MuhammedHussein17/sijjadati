# Sijjadati Sanity Studio

This folder is a **Sanity Studio** for managing carpet content. It is deployable to **sanity.io/manage** so the client can edit content in the browser without touching code.

## First-time setup

1. **Create a Sanity project** (if you don’t have one):
   - Go to [sanity.io/manage](https://sanity.io/manage) and log in.
   - Click **Create project**, choose a name (e.g. “Sijjadati”), and create the project.
   - Note the **Project ID** and **Dataset** (usually `production`).

2. **Configure environment**:
   - In the project root, copy `.env.example` to `.env.local`.
   - Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` so the Next.js site can fetch content.
   - In the `sanity` folder, create `.env` with the same values (for running the studio locally):
     ```
     SANITY_STUDIO_PROJECT_ID=your_project_id
     SANITY_STUDIO_DATASET=production
     ```
   - Or export them when running Sanity commands.

3. **Install and run the studio locally**:
   ```bash
   cd sanity
   npm install
   npm run dev
   ```
   Open the URL shown (e.g. http://localhost:3333) and add your first carpets.

## Deploy studio to sanity.io (browser editing)

From the `sanity` folder:

```bash
cd sanity
npm run deploy
```

Follow the prompts to link the project (or create one). After deploy, the studio will be available at a URL like:

**https://&lt;your-project&gt;.sanity.studio**

Share this URL with the client so they can manage carpets from the browser. No code or repo access is required.

## Schema

- **Carpet**: `name_he`, `name_ar`, `description_he`, `description_ar`, `images`, `category`, `sizes`, `colors`, `price_range`, `featured`.

The Next.js app reads this content via `@sanity/client` / `next-sanity` and the GROQ queries in `lib/sanity.queries.ts`.
