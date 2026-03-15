## Overview

Implement the ecommerce store based on the approved PLAN.md.

## Prerequisites

- PLAN.md must exist in the project root
- User has reviewed and approved the plan
- PostgreSQL and Redis are running (via Docker or local)

## Implementation Steps

### 1. Read and Validate Plan

Read `PLAN.md` and verify it contains:
- Store overview and specifications
- Medusa configuration details
- Storefront layout and design
- Theme customization tokens
- Implementation phases

### 2. Configure Medusa Backend

Spawn the `medusa-configurator` agent to:
- Edit `backend/medusa-config.ts`
- Add regions with currencies
- Configure payment providers (Stripe)
- Set up fulfillment providers
- Create product types and categories (if needed)
- Set up workflows (if needed)

### 3. Customize Storefront

Spawn the `storefront-generator` agent to:
- Customize the existing `storefront/` directory based on PLAN.md
- Configure Medusa client connection
- Update environment variables
- Create/update pages based on plan
- **IMPORTANT**: Edit files in place, do NOT copy or create new directories

### 4. Customize Theme

Spawn the `theme-customizer` agent to:
- Apply color palette to Tailwind config
- Configure typography
- Update spacing and border radius
- Apply theme tokens throughout

### 5. Quality Checks

After agents complete:

```bash
# Type checking
cd backend && npm run type-check
cd storefront && npm run type-check

# Linting
cd backend && npm run lint
cd storefront && npm run lint

# Build verification
cd backend && npm run build
cd storefront && npm run build
```

### 6. Local Testing

Start all services:

```bash
# Start PostgreSQL and Redis
cd backend && docker-compose up -d

# Run database migrations
cd backend && npm run migrate

# Start Medusa backend
cd backend && npm run dev

# In another terminal, start storefront
cd storefront && npm run dev
```

Verify:
- Backend runs at http://localhost:9000
- Admin dashboard at http://localhost:9000/app
- Storefront runs at http://localhost:3000
- No console errors
- Can navigate pages
- API connections work

### 7. Report Completion

Provide user with:

```markdown
## Store Implementation Complete! ✅

**Store ID**: {store-id}
**Location**: `storefront/`

### Services Running

- **Medusa Backend**: http://localhost:9000
- **Admin Dashboard**: http://localhost:9000/app
- **Storefront**: http://localhost:3000

### Next Steps

1. **Access Admin Dashboard**
   - Navigate to http://localhost:9000/app
   - Create admin user
   - Add products

2. **Test Storefront**
   - Visit http://localhost:3000
   - Browse products
   - Test cart and checkout

3. **Make Edits**
   - Run `/edit-store` to make changes
   - Edit files directly in `storefront/`

4. **Deploy**
   - Run `/deploy-store` when ready for production

### Configuration

Backend environment: `backend/.env`
Storefront environment: `storefront/.env.local`

### Documentation

See `CLAUDE.md` for detailed documentation.
```

## Agents to Spawn

The implementation spawns these specialized agents in parallel:

### medusa-configurator
- Configures Medusa backend
- Sets up regions, payments, fulfillment
- Creates product types and workflows

### storefront-generator
- Generates Next.js storefront
- Copies and customizes template
- Configures Medusa connection

### theme-customizer
- Applies design tokens
- Customizes colors and typography
- Updates Tailwind configuration

## Error Handling

If any agent fails:
1. Read the error message
2. Fix the issue in PLAN.md or configuration
3. Re-run the failed agent
4. Continue with remaining steps

Common issues:
- Missing environment variables → Check .env files
- Database connection errors → Ensure PostgreSQL is running
- Port conflicts → Stop other services on ports 9000/3000
- Type errors → Run type-check and fix issues

## Parallel Execution

For efficiency, spawn agents in parallel when possible:

```
medusa-configurator + storefront-generator + theme-customizer
(all can run simultaneously since they work on different files)
```

Wait for all to complete before running quality checks.

## Important Notes

1. **Don't Skip Steps**: Follow the sequence for reliable results
2. **Verify Each Phase**: Test after each major step
3. **Keep User Informed**: Report progress throughout
4. **Handle Errors Gracefully**: Don't fail silently, report issues
5. **Document Changes**: Note any deviations from PLAN.md

## After Implementation

User can:
- Access admin dashboard to add products
- Customize further with `/edit-store`
- Deploy to production with `/deploy-store`
- Edit files directly in the generated store

## Next Commands

- `/edit-store` - Make iterative changes
- `/deploy-store` - Deploy to production
