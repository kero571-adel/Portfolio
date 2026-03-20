# Deployment Guide 🚀

## Quick Start - Deploy to Vercel (Recommended)

### Prerequisites

- GitHub account
- Vercel account (free)

### Steps

#### 1. Push to GitHub

```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

#### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your portfolio is live! 🎉

**That's it!** Vercel will automatically:

- Deploy every push to main
- Generate preview URLs for pull requests
- Optimize images and performance
- Provide SSL certificates

---

## Alternative Deployment Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Manual Deployment (Any Server)

```bash
# Build for production
npm run build

# Start production server
npm start
```

Then deploy the `.next` folder to your server.

---

## Environment Variables

If you need to add environment variables:

1. Create a `.env.local` file (for local development)
2. In Vercel: Project Settings → Environment Variables
3. Add your variables

Example:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Performance Optimization

The portfolio is already optimized with:

- ✅ Next.js Image Optimization
- ✅ Automatic Code Splitting
- ✅ CSS Minification
- ✅ Compression
- ✅ Caching Headers

Check performance:

```bash
npm run build
```

---

## Custom Domain

### On Vercel

1. Project Settings → Domains
2. Add your custom domain
3. Update DNS records
4. Wait for verification (usually instant)

---

## Monitoring & Analytics

### Vercel Analytics

- Automatic Web Vitals tracking
- Performance monitoring
- Error tracking

### SEO

The portfolio includes:

- Proper meta tags
- Open Graph support
- Mobile-friendly design
- Fast load times

---

## Troubleshooting

### Build fails?

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port already in use?

```bash
# Use different port
npm run dev -- -p 3001
```

### Need to rollback?

- Vercel automatically keeps deployment history
- Click "Deployments" → Select previous version → "Promote to Production"

---

## CI/CD Pipeline

Your GitHub repository + Vercel = Automatic deployment!

```
GitHub Push → Vercel Detects → Builds → Deploys → Live ✅
```

---

## Security Checklist

- ✅ No sensitive data in code
- ✅ Environment variables used for secrets
- ✅ HTTPS enabled (automatic on Vercel)
- ✅ Security headers configured
- ✅ XSS protection enabled

---

## Support

Need help? Check these resources:

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Docs](https://docs.netlify.com/)

---

**Happy Deploying! 🎊**
