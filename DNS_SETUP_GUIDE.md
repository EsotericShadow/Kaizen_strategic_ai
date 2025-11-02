# DNS Setup & Email Configuration Guide

## Part 1: Clean Up `evergreenwebsolutions.ca` DNS Records

### DNS Records to KEEP:
These are still needed for email or the redirect page:
- ✅ **A Record**: `evergreenwebsolutions.ca` → `76.76.21.21` (or update to `216.150.1.1` for Vercel)
- ✅ **CNAME**: `www.evergreenwebsolutions.ca` → `89df51101308f55b.vercel-dns-016.com` (for redirect)
- ✅ **MX Records**: Keep for email forwarding (if you're still using them)

### DNS Records to REMOVE (if not using SendGrid anymore):
- ❌ **CNAME**: `56199784.evergreenwebsolutions.ca` → `sendgrid.net`
- ❌ **CNAME**: `em4922.evergreenwebsolutions.ca` → `u56199784.wl035.sendgrid.net`
- ❌ **CNAME**: `url8295.evergreenwebsolutions.ca` → `sendgrid.net`
- ❌ **CNAME**: `s1._domainkey.evergreenwebsolutions.ca` → `s1.domainkey.u56199784.wl035.sendgrid.net`
- ❌ **CNAME**: `s2._domainkey.evergreenwebsolutions.ca` → `s2.domainkey.u56199784.wl035.sendgrid.net`
- ❌ **TXT**: `resend._domainkey.evergreenwebsolutions.ca` (if not using Resend)
- ❌ **CNAME**: `vw4pyxcsp33b.evergreenwebsolutions.ca` → `gv-hbka3m6hjicjkr.dv.googlehosted.com` (Google verification - only if not needed)

### DNS Records to KEEP (for email/verification):
- ✅ **MX**: `evergreenwebsolutions.ca` → `mx1.improvmx.com` (priority 10)
- ✅ **MX**: `evergreenwebsolutions.ca` → `mx2.improvmx.com` (priority 20)
- ✅ **TXT**: `evergreenwebsolutions.ca` → `v=spf1 include:sendgrid.net include:amazonses.com include:_spf.resend.com include:spf.improvmx.com ~all`
- ✅ **TXT**: `_dmarc.evergreenwebsolutions.ca` → `v=DMARC1; p=quarantine; rua=mailto:dmarc@evergreenwebsolutions.ca`
- ✅ **CNAME**: `rsvp.evergreenwebsolutions.ca` → `89c19fd21f2e31b1.vercel-dns-016.com` (if still using this subdomain)

---

## Part 2: Titan Email Setup for `kaizenstrategic.ai`

Titan Email is a free email service from name.com. Here's how to set it up:

### Step 1: Activate Titan Email in name.com
1. Go to your domain in name.com: `kaizenstrategic.ai`
2. Look for "Titan Email" or "Email" in the products section
3. Activate the free Titan Email plan

### Step 2: Configure Email Addresses
Once Titan Email is activated, you can create email addresses:
- `info@kaizenstrategic.ai`
- `governance@kaizenstrategic.ai`
- `gabriel@kaizenstrategic.ai`
- `admin@kaizenstrategic.ai`
- `noreply@kaizenstrategic.ai`

### Step 3: DNS Records for Titan Email
Titan Email will provide you with specific DNS records to add. Typically these include:

**MX Records** (for receiving email):
- Type: MX
- Host: (blank for root domain)
- Priority: 10
- Answer: `mx1.titan.email` (Titan will provide the exact hostname)
- TTL: 300

- Type: MX
- Host: (blank for root domain)
- Priority: 20
- Answer: `mx2.titan.email` (Titan will provide the exact hostname)
- TTL: 300

**TXT Records** (for SPF/DKIM/verification):
- Type: TXT
- Host: (blank for root domain)
- Answer: `v=spf1 include:titan.email ~all` (Titan will provide exact SPF record)
- TTL: 300

- Type: TXT
- Host: `_dmarc` (or `_dmarc.kaizenstrategic.ai`)
- Answer: `v=DMARC1; p=quarantine; rua=mailto:dmarc@kaizenstrategic.ai`
- TTL: 300

**CNAME Records** (for DKIM):
- Type: CNAME
- Host: `s1._domainkey` (or `s1._domainkey.kaizenstrategic.ai`)
- Answer: (Titan will provide the exact value)
- TTL: 300

- Type: CNAME
- Host: `s2._domainkey` (or `s2._domainkey.kaizenstrategic.ai`)
- Answer: (Titan will provide the exact value)
- TTL: 300

### Step 4: Wait for DNS Propagation
- DNS changes can take 24-48 hours to fully propagate
- Check DNS propagation: https://dnschecker.org

### Step 5: Test Email
Once DNS has propagated:
1. Send a test email to `info@kaizenstrategic.ai`
2. Check that it arrives in Titan Email inbox
3. Test reply functionality

---

## Part 3: Vercel Domain Configuration

### Add `evergreenwebsolutions.ca` to Vercel:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `evergreenwebsolutions.ca`
4. Add `www.evergreenwebsolutions.ca`
5. Update DNS A record to point to `216.150.1.1` (Vercel's IP) or use Vercel's provided DNS values

### Redirect Configuration:
The middleware (`middleware.ts`) will automatically:
- Detect visitors from `evergreenwebsolutions.ca`
- Show a popup explaining the evolution to Kaizen Strategic AI
- Redirect to `kaizenstrategic.ai` after 5 seconds or when user clicks "Continue"

---

## Summary Checklist

### `kaizenstrategic.ai` DNS:
- ✅ A record: `@` → `216.150.1.1`
- ✅ CNAME: `www` → `a47b8f0c98fed1bc.vercel-dns-016.com`
- ⏳ MX records: (to be added via Titan Email)
- ⏳ TXT records: (to be added via Titan Email)
- ⏳ CNAME for DKIM: (to be added via Titan Email)

### `evergreenwebsolutions.ca` DNS:
- ✅ A record: `@` → `216.150.1.1` (or keep `76.76.21.21` if not updating)
- ✅ CNAME: `www` → `89df51101308f55b.vercel-dns-016.com`
- ✅ MX records: (keep if using email forwarding)
- ❌ Remove SendGrid CNAME records (if not using)
- ❌ Remove unused Google verification CNAME (if not needed)

### Next Steps:
1. ✅ Clean up `evergreenwebsolutions.ca` DNS (remove SendGrid records)
2. ⏳ Activate Titan Email in name.com for `kaizenstrategic.ai`
3. ⏳ Add Titan Email DNS records to `kaizenstrategic.ai`
4. ⏳ Create email addresses in Titan Email dashboard
5. ⏳ Test email delivery
6. ⏳ Add `evergreenwebsolutions.ca` domain to Vercel project
7. ⏳ Test redirect and popup functionality

