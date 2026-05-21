# Deployment Guide — Mechatronopolis

## Objective

Publish and maintain a testable Website-in-Test surface on Vercel for S2M validation.

## Recommended Deployment Path

1. Create or connect the web app directory for Mechatronopolis UI.
2. Import repository into Vercel.
3. Configure environment variables in Vercel project settings.
4. Enable automatic deployments from the default branch.
5. Verify post-deploy URL and add it to `README.md`.

## Deployment Validation Checklist

- Vercel deployment succeeds with no build errors
- Website-in-Test URL is reachable
- Login, admin access, and checkout flows are testable (when UI stack is present)
- README reflects the active Website-in-Test URL
