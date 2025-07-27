# Email Setup Guide for Portfolio Contact Form

## Problem Fixed ✅
Your contact form wasn't working because the email service wasn't configured. I've updated the code to handle this properly.

## What I Fixed:

1. **Added missing dependencies**: Installed `nodemailer` and `@types/nodemailer`
2. **Improved error handling**: Better error messages and validation
3. **Enhanced email formatting**: Added HTML email support and better formatting
4. **Environment variable validation**: Checks if email config is set up

## Setup Steps:

### 1. Create Environment File
Create a `.env.local` file in your project root with:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER=your-email@gmail.com
```

### 2. Get Gmail App Password
For Gmail, you need an App Password (not your regular password):

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password as your `SMTP_PASS`

### 3. Update Your Email
Replace `your-email@gmail.com` with your actual Gmail address in the `.env.local` file.

### 4. Test the Form
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email for the message

## Alternative Email Services

If you prefer other email services:

### Outlook/Hotmail:
```env
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
CONTACT_RECEIVER=your-email@outlook.com
```

### Custom SMTP Server:
Update the API route with your SMTP settings.

## Troubleshooting

### Common Issues:
1. **"Invalid login"**: Check your app password is correct
2. **"Email service not configured"**: Make sure `.env.local` exists and has the right values
3. **"ENOTFOUND"**: Check your internet connection

### Debug Steps:
1. Check browser console for errors
2. Check server logs for detailed error messages
3. Verify environment variables are loaded correctly

## Security Notes:
- Never commit `.env.local` to git (it's already in `.gitignore`)
- Use app passwords, not regular passwords
- Consider using email services like SendGrid for production

Your contact form should now work properly! 🎉 