# Student Registration Page

## Overview
The student registration page allows students to register either directly or through a school link. When accessed with a school ID, it automatically fetches school information and pre-fills relevant fields.

## URL Structure
- **Direct Registration**: `/st/reg`
- **School-linked Registration**: `/st/reg?schoolId={schoolId}`

## Features

### 1. Direct Registration
- Students can register without a school association
- All fields are manually filled
- Overseas status is manually selected

### 2. School-linked Registration
- Automatically fetches school data when `schoolId` is provided
- School name field is disabled and pre-filled
- Overseas status is automatically set based on school data
- School information is displayed below the form

### 3. Form Fields
- **Required Fields**: Name, Email, Phone, Date of Birth, School Name, Grade, City
- **Optional Fields**: Section
- **Auto-filled**: Overseas status (when school-linked)

### 4. Validation
- Client-side validation for required fields
- Email format validation
- Phone number validation

## API Integration

### Backend Requirements
- Strapi backend with `students` and `schools` collections
- Student schema includes all form fields plus school relation
- School schema includes overseas status

### Data Flow
1. **School Fetch**: If `schoolId` present, fetch school data
2. **Form Pre-fill**: Auto-populate school name and overseas status
3. **Student Creation**: Submit form data to create student record
4. **Success Handling**: Show success message and reset form

## Usage Examples

### For Schools
1. After school registration, copy the generated student registration URL
2. Share the URL with students: `/st/reg?schoolId=123`
3. Students will see pre-filled school information

### For Students
1. Access the registration page directly or via school link
2. Fill in personal information
3. Submit the form to complete registration

## Technical Implementation

### Architecture
- **Server Component**: `StudentRegistrationPage` - Handles SSR and school data fetching
- **Client Component**: `StudentRegistrationForm` - Handles form state and user interactions
- **Custom Hooks**: `useStudent` for student API operations

### Components
- `StudentRegistrationPage`: Server component that fetches school data on the server
- `StudentRegistrationForm`: Client component that handles the registration form
- `useStudent`: Custom hook for student API operations

### State Management
- Form data state with validation
- Loading states for API calls
- Error handling for failed operations
- Success state for completed registrations

### Styling
- Responsive design with Tailwind CSS
- Modern UI components matching existing design system
- Loading and error states with appropriate visual feedback

## Benefits of SSR Architecture

### Performance Improvements
- **Faster Initial Load**: School data is fetched on the server, reducing client-side API calls
- **Better SEO**: Page content is rendered on the server for search engines
- **Improved User Experience**: No loading states for school information
- **Reduced Client Bundle**: Form logic is separated from data fetching

### Error Handling
- **Server-side Validation**: Invalid school IDs are caught early with `notFound()`
- **Graceful Degradation**: Page handles missing school data gracefully
- **Better Error Messages**: Clear feedback when school data cannot be loaded

## Future Enhancements
- Form validation with react-hook-form
- File upload for documents
- Payment integration
- Email confirmation system
- Student dashboard access
