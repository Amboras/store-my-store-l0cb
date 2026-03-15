## Overview

Deploy a generated store to production with comprehensive deployment instructions.

## Prerequisites

- Store has been generated and tested locally
- All edits are complete
- Store runs without errors locally
- Environment variables are documented

## Deployment Strategy

### Two-Part Deployment

1. **Medusa Backend** → Railway, Medusa Cloud, or AWS
2. **Next.js Storefront** → Vercel or Netlify

Both must be deployed separately but connected.

## Step 1: Prepare for Deployment

### Backend Preparation

```bash
cd backend

# Verify build works
npm run build

# Verify all environment variables are documented
cat .env.example
```

### Storefront Preparation

```bash
cd storefront

# Verify build works
npm run build

# Verify environment variables
cat .env.local.example
```

## Step 2: Deploy Medusa Backend

### Option A: Railway (Recommended for Beginners)

**Why Railway?**
- One-click PostgreSQL and Redis
- Simple environment variable management
- Automatic deployments from git
- Free tier available

**Steps:**

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repository
   - Select the `backend` directory

3. **Add PostgreSQL**
   - In project, click "New"
   - Select "Database" → "PostgreSQL"
   - Railway provisions automatically

4. **Add Redis**
   - Click "New" again
   - Select "Database" → "Redis"
   - Railway provisions automatically

5. **Configure Environment Variables**
   ```
   NODE_ENV=production
   POSTGRES_URL=${DATABASE_URL}
   REDIS_URL=${REDIS_URL}
   JWT_SECRET=<generate-random-secret>
   COOKIE_SECRET=<generate-random-secret>
   MEDUSA_ADMIN_BACKEND_URL=https://<your-app>.railway.app
   MEDUSA_ADMIN_URL=https://<your-app>.railway.app/app
   STORE_CORS=https://<your-storefront-domain>
   STRIPE_API_KEY=<your-stripe-key>
   STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
   ```

6. **Deploy**
   - Railway auto-deploys on git push
   - Or click "Deploy Now"

7. **Run Migrations**
   - In Railway terminal: `npm run migrate`

8. **Access Admin**
   - Visit: `https://<your-app>.railway.app/app`

### Option B: Medusa Cloud (Easiest)

**Why Medusa Cloud?**
- Fully managed Medusa hosting
- Auto-scaling
- Database and Redis included
- Official support

**Steps:**

1. Go to https://medusajs.com/cloud/
2. Create account
3. Create new project
4. Upload backend code
5. Configure environment variables
6. Deploy

### Option C: AWS (Advanced)

**Why AWS?**
- Full control
- Enterprise-grade
- Custom scaling

**Steps:**
1. Set up ECS/Fargate for Medusa
2. Create RDS PostgreSQL instance
3. Create ElastiCache Redis instance
4. Configure Load Balancer
5. Set up ECR for Docker images
6. Deploy via CloudFormation/CDK

(See full AWS deployment guide in `docs/deploy-aws.md`)

## Step 3: Deploy Next.js Storefront

### Option A: Vercel (Recommended)

**Why Vercel?**
- Built for Next.js
- Automatic deployments
- Global CDN
- Free tier generous

**Steps:**

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Import your repository
   - Select `storefront` as root directory

3. **Configure Build Settings**
   ```
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Environment Variables**
   ```
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://<your-backend>.railway.app
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

6. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration

7. **Access Storefront**
   - Visit: `https://<your-project>.vercel.app`
   - Or your custom domain

### Option B: Netlify

**Why Netlify?**
- Simple setup
- Great for static/hybrid Next.js
- Edge functions support

**Steps:**

1. Create Netlify account
2. Import from git
3. Configure build:
   ```
   Build command: npm run build
   Publish directory: .next
   ```
4. Add environment variables
5. Deploy

## Step 4: Connect Backend to Storefront

### Update CORS Settings

Edit backend `medusa-config.ts`:

```typescript
{
  store_cors: process.env.STORE_CORS || "https://yourstorefront.vercel.app",
  admin_cors: "https://youradmin.com",
}
```

Redeploy backend after changing CORS.

### Test Connection

Visit storefront and verify:
- Products load from Medusa
- Cart works
- Checkout initiates
- No CORS errors in console

## Step 5: Configure Stripe Webhooks

1. **Stripe Dashboard**
   - Go to https://dashboard.stripe.com/webhooks
   - Click "Add endpoint"

2. **Webhook URL**
   ```
   https://<your-backend>.railway.app/webhooks/stripe
   ```

3. **Select Events**
   - payment_intent.succeeded
   - payment_intent.payment_failed
   - checkout.session.completed

4. **Copy Webhook Secret**
   - Update `STRIPE_WEBHOOK_SECRET` in backend environment

5. **Redeploy Backend**

## Step 6: Post-Deployment Checklist

### Backend Checklist

- [ ] Backend accessible at URL
- [ ] Admin dashboard loads
- [ ] Can create admin user
- [ ] Database migrations ran successfully
- [ ] Redis connection works
- [ ] Environment variables all set
- [ ] Stripe webhook configured
- [ ] CORS configured for storefront

### Storefront Checklist

- [ ] Storefront loads
- [ ] Products fetch from backend
- [ ] Images load correctly
- [ ] Cart functionality works
- [ ] Checkout initiates
- [ ] Responsive design works
- [ ] No console errors
- [ ] Performance is good (Lighthouse score)

### Integration Checklist

- [ ] Storefront connects to backend
- [ ] No CORS errors
- [ ] Stripe payment flow works end-to-end
- [ ] Webhooks trigger correctly
- [ ] Orders appear in admin dashboard

## Step 7: Production Readiness

### Security

- [ ] HTTPS enabled (automatic on Vercel/Railway)
- [ ] Environment variables secure (not in code)
- [ ] JWT secrets are random and strong
- [ ] API keys are production keys
- [ ] CORS is restrictive (not wildcard)

### Performance

- [ ] Images optimized
- [ ] CDN enabled
- [ ] Caching configured
- [ ] Database indexed
- [ ] Redis caching active

### Monitoring

- [ ] Error tracking (Sentry, etc.)
- [ ] Uptime monitoring
- [ ] Performance monitoring
- [ ] Log aggregation

### Backup

- [ ] Database backups enabled (Railway auto-backups)
- [ ] Code in git repository
- [ ] Environment variables documented

## Troubleshooting Deployment Issues

### Backend Won't Start

- Check PostgreSQL connection string
- Verify Redis URL is correct
- Check environment variables
- Review build logs
- Ensure migrations ran

### Storefront Can't Connect

- Verify MEDUSA_BACKEND_URL is correct
- Check CORS settings in backend
- Ensure backend is running
- Check network tab for errors
- Verify environment variables deployed

### Stripe Not Working

- Verify API keys are production keys
- Check webhook secret is correct
- Ensure webhook URL is accessible
- Test webhook in Stripe dashboard
- Check webhook events are selected

### Performance Issues

- Enable caching in Medusa
- Optimize images (use Next.js Image)
- Use CDN (Vercel auto-provides)
- Check database queries
- Review bundle size

## Deployment Report

After successful deployment, provide user with:

```markdown
## 🎉 Deployment Complete!

### Deployed URLs

**Storefront**: https://yourstorefront.vercel.app
**Medusa Backend**: https://your-backend.railway.app
**Admin Dashboard**: https://your-backend.railway.app/app

### Next Steps

1. **Set Up Admin**
   - Visit admin dashboard
   - Create admin user
   - Add your products

2. **Test Checkout**
   - Use Stripe test card: 4242 4242 4242 4242
   - Complete a test order
   - Verify it appears in admin

3. **Custom Domain** (Optional)
   - Configure in Vercel settings
   - Point DNS to Vercel
   - SSL auto-provisions

4. **Go Live**
   - Switch Stripe to live mode
   - Update Stripe keys in environment
   - Remove test products
   - Add real products

### Important Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Railway Dashboard](https://railway.app/dashboard)
- [Stripe Dashboard](https://dashboard.stripe.com)
- [Medusa Docs](https://docs.medusajs.com)

### Support

See `CLAUDE.md` for troubleshooting and documentation.
```

## Continuous Deployment

For automatic deployments:

### Backend (Railway)
- Push to main branch → Auto-deploys
- Or use Railway CLI for manual deploys

### Storefront (Vercel)
- Push to main branch → Auto-deploys
- Or use Vercel CLI: `vercel --prod`

## Rollback

If deployment fails:

### Railway
- Go to Deployments tab
- Click previous deployment
- Rollback to that version

### Vercel
- Go to Deployments
- Select working deployment
- Click "Promote to Production"

## Cost Estimate

### Free Tier (Hobby Projects)

- Railway: Free tier ($5 credit/month)
- Vercel: Free for personal projects
- Total: ~$0-10/month

### Production (Small Business)

- Railway Pro: $20/month
- Vercel Pro: $20/month
- Database: Included in Railway
- Redis: Included in Railway
- Total: ~$40/month

### Enterprise

- Medusa Cloud: Custom pricing
- AWS: Variable ($100-1000+/month)
- Vercel Enterprise: Custom
- Total: $100+/month
