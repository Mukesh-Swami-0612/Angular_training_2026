# Job Portal Application

A modern job portal application built with Angular 17 that allows users to browse jobs, save favorites, and apply for positions.

## Features

- **Browse Jobs**: View all available job listings with company details and experience requirements
- **Job Details**: See detailed information about each job posting
- **Save Jobs**: Save interesting jobs to your favorites list
- **Apply for Jobs**: Submit applications with your details and cover letter
- **Client Dashboard**: View statistics and quick access to key features
- **User Authentication**: Login system with demo credentials

## Project Structure

```
src/app/
├── home/           # Job listings page
├── job/            # Job details page
├── apply/          # Job application form
├── saved-job/      # Saved jobs list
├── client/         # Client dashboard
├── login/          # Login page
└── job-service.service.ts  # Shared service for job data
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17.3.17)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Navigate to `http://localhost:4200/`

### Demo Credentials

- Username: `mukeshswami`
- Password: `mukesh0612`

## Available Routes

- `/` - Home page with job listings
- `/job/:id` - Job details page
- `/apply/:id` - Job application form
- `/saved` - Saved jobs list
- `/client` - Client dashboard
- `/login` - Login page

## Technologies Used

- Angular 17.3.0 (Standalone Components)
- TypeScript 5.4.2
- Bootstrap 5.3.8
- RxJS 7.8.0
- Angular Router

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Tests

Run `ng test` to execute the unit tests via Karma.

## Key Features Implemented

✅ Standalone components architecture  
✅ Reactive routing with Angular Router  
✅ Service-based state management  
✅ Form handling with FormsModule  
✅ Responsive design with Bootstrap  
✅ Duplicate prevention for saved jobs  
✅ Navigation guards and resolvers ready  
✅ Clean and modern UI with animations

## Future Enhancements

- Backend API integration
- User authentication with JWT
- Advanced job search and filters
- Resume upload functionality
- Email notifications
- Admin panel for job management

## Development Notes

This project uses Angular's latest standalone components approach, eliminating the need for NgModules. All components are self-contained with their own imports.

## License

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.
