Skillspark Hub

Demo Next.js app scaffolded for Skillspark Hub. Includes product types, a Cart context, and homepage components (Hero + ProductGrid) with Tailwind styling.

Getting started

1. Install dependencies

npm install

2. Run type checks and lint

npx tsc --noEmit
npx next lint --max-warnings=0

3. Start development server

npm run dev

Docker (build & run)

docker build -t skillspark-hub:latest .
docker run -p 3000:3000 skillspark-hub:latest

Deployment

- Connect this repository to Vercel for automatic deployments from main.
- Alternatively, use GitHub Actions / Docker for custom CI/CD.

License: MIT
