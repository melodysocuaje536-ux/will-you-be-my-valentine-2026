# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly.

**Do not open a public issue.** Instead, email:

- **Email:** yourfiyan@proton.me

### Response time

You can expect an initial response within **48 hours**.

## Scope

This is a static client-side website with no backend, no database, and no user data collection. Security considerations are limited to:

- Cross-site scripting (XSS) if user-modified content is improperly handled
- Service Worker cache integrity
- CDN-hosted font dependencies
