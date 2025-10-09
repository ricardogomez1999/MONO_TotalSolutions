# Admin Panel Setup Guide

## Overview

The admin panel allows you to manage website images directly through Cloudinary's upload widget without modifying code.

## Access

- **URL**: `http://localhost:5173/admin` (or your domain + `/admin`)
- **Password**: `mono-admin-2024` (change this in `src/Views/AdminPage.tsx`)

## Cloudinary Setup Required

### 1. Create Upload Preset

1. Go to your Cloudinary Dashboard
2. Navigate to **Settings** → **Upload**
3. Click **Add upload preset**
4. Configure:
   - **Preset name**: `ml_default`
   - **Signing Mode**: `Unsigned` (for public uploads)
   - **Folder**: `samples/Mono`
   - **Tags**: `mono, admin`
   - **Auto-upload**: Enable
   - **Quality**: `auto`
   - **Format**: `auto`

### 2. Update Cloud Name

If your cloud name is different from `dnrdf85ss`, update it in:

- `src/Components/ImageManager.tsx` (line 18)

### 3. Configure CORS (if needed)

If you encounter CORS issues:

1. Go to **Settings** → **Security**
2. Add your domain to **Restricted media types**
3. Configure **CORS** settings if needed

## Features

### Image Categories

- **Logo Images**: Company logos
- **Hero Section**: Main banner image
- **About Us**: About section image
- **Contact Us**: Contact section image
- **Service Cards**: Service category images
- **Social Media Icons**: Social platform icons

### How to Use

1. Login with the admin password
2. Navigate to any image category
3. Click **Upload New** for any image
4. Cloudinary widget opens
5. Upload/select new image
6. Image updates immediately on the website
7. Changes are temporary until you update the code

### Making Changes Permanent

1. Copy the new URLs from the admin panel
2. Update `src/config/images.ts` with the new URLs
3. Deploy the changes

## Security Notes

- Change the admin password in production
- Consider implementing proper authentication
- Restrict admin access by IP if possible
- Use HTTPS in production

## Troubleshooting

### Upload Widget Not Loading

- Check Cloudinary script in `index.html`
- Verify cloud name and upload preset
- Check browser console for errors

### Images Not Updating

- Ensure ImageProvider wraps the app in `main.tsx`
- Check that components use `useImagesHook()`
- Verify Cloudinary URLs are accessible

### CORS Errors

- Configure CORS in Cloudinary dashboard
- Check domain restrictions
- Verify upload preset settings

## File Structure

```
src/
├── Views/
│   └── AdminPage.tsx          # Main admin interface
├── Components/
│   └── ImageManager.tsx       # Image management component
├── contexts/
│   └── ImageContext.tsx       # Image state management
├── hooks/
│   └── useImages.ts           # Image hook
├── types/
│   └── cloudinary.d.ts        # TypeScript definitions
└── config/
    └── images.ts              # Default image configuration
```
