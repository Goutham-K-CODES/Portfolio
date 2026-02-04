# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijk123456`)

## Step 5: Update Contact.tsx
1. Open `src/components/Contact.tsx`
2. Replace these values around line 16-18:
   ```typescript
   const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
   ```

## Example Configuration
```typescript
const SERVICE_ID = 'service_abc123';
const TEMPLATE_ID = 'template_xyz789';
const PUBLIC_KEY = 'abcdefghijk123456';
```

## Testing
1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all IDs are correct
- Make sure you've verified your email with EmailJS
- Check EmailJS dashboard for error logs

## Free Tier Limits
- 200 emails/month
- Perfect for portfolio websites
