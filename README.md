# AutomationQuantixRepoQA

## Playwright + TypeScript (POM) Framework

### Prerequisites
- Node.js 18+ (recommended: 20 LTS)
- Git

### Setup
1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

3. Create a `.env` file (do not commit) based on `.env.example`.

### Run tests
- Headless (default):
```bash
npm test
```

- Headed:
```bash
npm run test:headed
```

### Reports
After a run:
```bash
npm run report
```

## Manual Test Cases
See `docs/manual-regression-test-cases.md`
