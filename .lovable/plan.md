

## AI Crawler Optimization Plan

### What we'll do

Optimize the site so AI crawlers from OpenAI, Anthropic, Google (Gemini), Perplexity, and others can fully index and cite Swisscoast content. Two changes:

### 1. Update `public/robots.txt`

Add explicit `Allow` rules for all major AI crawler user agents:

- **GPTBot** — OpenAI training/retrieval
- **OAI-SearchBot** — OpenAI search features
- **ChatGPT-User** — ChatGPT real-time browsing
- **ClaudeBot** — Anthropic (Claude)
- **anthropic-ai** — Anthropic alternate agent
- **Google-Extended** — Google Gemini AI training
- **PerplexityBot** — Perplexity search
- **Amazonbot** — Amazon AI
- **FacebookBot** — Meta AI
- **Bytespider** — ByteDance / MiniMax (shares crawl infrastructure)
- **CCBot** — Common Crawl (used by many AI companies)

Also add a `Sitemap` directive pointing to `https://www.swisscoast.ch/sitemap.xml`.

### 2. Create `public/sitemap.xml`

A static sitemap listing all public routes (`/`, `/projects`, `/services`, `/about`, `/blog`, `/learn`, `/contact`, `/privacypolicy`) with `lastmod`, `changefreq`, and `priority` values. This helps AI crawlers discover all pages efficiently.

### 3. Add `public/.well-known/ai-plugin.json` (optional but beneficial)

A lightweight manifest that AI agents (especially OpenAI's) use to understand the site's purpose. Contains the site name, description, and contact info.

### Technical details

- All files are static assets in `public/` — no code changes needed in React components
- No build step required; Vite serves `public/` files as-is
- The robots.txt explicitly allows all AI bots rather than relying on the wildcard `*` rule, because some AI crawlers only respect their own named directives

