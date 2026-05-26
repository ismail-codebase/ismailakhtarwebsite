# AWS SES Setup Guide

Your portfolio website is now configured to send emails via **AWS SES**! ✅

## ✅ What's Done
- ✅ AWS SDK installed
- ✅ Contact API updated for AWS SES
- ✅ Domain `ismailakhtar.com` verified in AWS SES

## 📋 Next Steps: Add AWS Credentials

### Step 1: Create AWS IAM User (5 minutes)

1. **Go to AWS Console**
   - URL: https://console.aws.amazon.com/iam/

2. **Create New User**
   - Left menu → Users → Create user
   - Username: `portfolio-ses`
   - Next

3. **Set Permissions**
   - Select "Attach policies directly"
   - Search: `AmazonSESFullAccess`
   - Check the box
   - Next → Create user

4. **Create Access Key**
   - Click on the user `portfolio-ses`
   - Security credentials tab
   - Create access key
   - Choose: "Application running outside AWS"
   - Create access key
   - Download CSV or copy the keys

### Step 2: Add Credentials to `.env.local`

Create file: `.env.local` in your project root

```bash
cd /Users/ismail/Documents/project/mywebsite
cp .env.local.example .env.local
```

Edit `.env.local`:

```
AWS_SES_REGION=eu-north-1
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_SES_FROM_EMAIL=ismailakhtar.com
AWS_SES_TO_EMAIL=ismailakhtar786@gmail.com
```

**Replace with your actual values from AWS IAM:**
- `AWS_ACCESS_KEY_ID` - Copy from AWS IAM
- `AWS_SECRET_ACCESS_KEY` - Copy from AWS IAM  
- Region: `eu-north-1` (Stockholm - as shown in your AWS console)

### Step 3: Restart Development Server

```bash
# Stop current server (Ctrl+C)

# Start again
npm run dev
```

### Step 4: Test It

1. Go to: http://localhost:3000/contact
2. Fill the form with test data
3. Submit
4. Check your email: `ismailakhtar786@gmail.com`

You should receive the inquiry email! ✅

---

## 🔍 Troubleshooting

### Email not received?

**Check 1: Console logs**
```
Look for these messages in terminal:
✅ "Email sent successfully to..."  → Email was sent
❌ "Error sending email via AWS SES" → Check credentials/region
⚠️ "AWS SES credentials not configured" → .env.local missing
```

**Check 2: AWS SES Sandbox**
- If domain is in Sandbox mode, you can only send to verified email addresses
- In AWS SES Console → Verified identities → Check identity status
- Add ismailakhtar786@gmail.com as verified email

**Check 3: Credentials**
```bash
# Check if .env.local exists
cat /Users/ismail/Documents/project/mywebsite/.env.local

# Verify values are correct
```

**Check 4: Region**
- Your AWS console shows: **Europe (Stockholm)**
- Region code: `eu-north-1` ✅

---

## 📊 Email Features

Your contact emails will include:
- ✅ Professional HTML formatting
- ✅ Sender's name and email
- ✅ Phone number
- ✅ Inquiry subject
- ✅ Full message
- ✅ Reply-To address (auto-reply goes to sender)
- ✅ Timestamp
- ✅ Styled with your brand colors (blue #3B82F6)

---

## 💰 AWS SES Pricing

**Free Tier (First Year):**
- 62,000 emails/month
- Perfect for getting started

**After Free Tier:**
- $0.10 per 1,000 emails
- Very affordable (62k emails = $6.20/month)

---

## ✅ Verification Checklist

Before testing:
- [ ] AWS SES domain `ismailakhtar.com` verified ✅ (Already done)
- [ ] AWS IAM user created
- [ ] Access keys downloaded
- [ ] `.env.local` file created
- [ ] Credentials added to `.env.local`
- [ ] Development server restarted

---

## 🚀 Next: Deploy to Production

Once email is working locally:

1. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Add Environment Variables to Vercel**
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Add all AWS credentials
   - Redeploy

3. **Your domain**
   - Add DNS records for ismailakhtar.com
   - Or set up custom domain in Vercel

---

**Ready to send your first inquiry email?** 🎉

Get your AWS credentials and add them to `.env.local` to activate email sending!
