# School Registration System

This document describes the school registration system implemented in the NAC application.

## Overview

The school registration system allows schools to register with the platform through a web form. The system consists of:

- **Frontend**: Next.js application with React Hook Form and Zod validation
- **Backend**: Strapi CMS with REST API
- **Database**: Strapi-managed database with school schema

## Features

### School Registration Form (`/school-registration`)

- Collects school information: name, address, phone, email, branch, principal
- Overseas school indicator
- Form validation using Zod schema
- Real-time error handling
- Success/error feedback
- API connection test component for debugging

### Schools List (`/schools`)

- Displays all registered schools
- Responsive grid layout
- School information cards with icons
- Overseas school badges
- Registration date and ID display

### API Integration

- Custom `useSchool` hook for all school operations
- Strapi client integration
- Error handling and loading states
- TypeScript interfaces for type safety

## Database Schema

The school content type includes the following fields:

```json
{
  "name": "string",
  "address": "string",
  "phone": "string",
  "email": "email",
  "is_overseas": "boolean",
  "branch": "string",
  "principle": "string"
}
```

## API Endpoints

- `POST /api/schools` - Create new school
- `GET /api/schools` - Get all schools
- `GET /api/schools/:id` - Get school by ID
- `PUT /api/schools/:id` - Update school
- `DELETE /api/schools/:id` - Delete school

## Setup Instructions

### Backend (Strapi)

1. Ensure Strapi is running on `http://localhost:1337`
2. CORS is configured to allow frontend connections
3. School content type is created with the schema above

### Frontend (Next.js)

1. Install dependencies: `npm install` or `pnpm install`
2. Start development server: `npm run dev`
3. Navigate to `/school-registration` to test the form
4. Navigate to `/schools` to view registered schools

## Usage

### Registering a School

1. Navigate to `/school-registration`
2. Fill out the form with school details
3. Submit the form
4. Check for success/error messages
5. Use the API test component to verify connection

### Viewing Schools

1. Navigate to `/schools`
2. View all registered schools in a grid layout
3. Click "Register New School" to add another school

## Technical Details

### Form Validation

- Uses React Hook Form with Zod resolver
- Client-side validation for immediate feedback
- Server-side validation through Strapi

### State Management

- Local state for form data and submission status
- Custom hook for API operations
- Loading states and error handling

### Styling

- Tailwind CSS for responsive design
- Custom UI components (Button, Input)
- Consistent design system

## Troubleshooting

### Common Issues

1. **CORS errors**: Ensure backend CORS is configured correctly
2. **API connection failed**: Check if Strapi is running on port 1337
3. **Form submission errors**: Check browser console for detailed error messages
4. **Validation errors**: Ensure all required fields are filled correctly

### Debug Tools

- API test component on the registration page
- Browser developer tools console
- Network tab for API request inspection

## Future Enhancements

- School profile editing
- Bulk school import/export
- Advanced search and filtering
- School approval workflow
- Email notifications
- File uploads for school documents

## Dependencies

### Frontend

- Next.js 15
- React 19
- React Hook Form
- Zod validation
- Tailwind CSS
- Strapi client

### Backend

- Strapi CMS
- Node.js
- Database (SQLite/PostgreSQL/MySQL)

## Support

For technical support or questions about the school registration system, please refer to the project documentation or contact the development team.
