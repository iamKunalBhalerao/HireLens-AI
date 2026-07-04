# HireLens AI - Core Backend

HireLens AI Core is the backend server that powers the resume analysis platform. It provides RESTful APIs for user authentication, resume processing, AI-powered job compatibility analysis, and evaluation management.

## Features

### 🔐 Authentication System
- **User Registration**: Secure sign-up with email, username, and password
- **User Login**: JWT-based authentication with HTTP-only cookies
- **Token Management**: Access tokens (7 days) and refresh tokens (30 days)
- **Token Refresh**: Automatic token rotation for seamless user experience
- **Secure Logout**: Cookie clearing and token invalidation
- **Current User Profile**: Retrieve authenticated user information
- **Password Security**: bcrypt hashing for secure password storage

### 🧠 AI-Powered Resume Analysis
- **Google Gemini Integration**: Uses Google Gemini 2.5 Flash for intelligent analysis
- **PDF Resume Parsing**: Extracts text content from uploaded PDF resumes
- **Multi-Format Support**: Handles PDF, DOC, DOCX, and TXT file formats
- **Structured Output**: JSON-based response with validated schema using Zod
- **Intelligent Prompts**: Expert interview coach prompts for accurate analysis

### 📊 Comprehensive Analysis Generation
- **Match Score Calculation**: Objective 0-100 compatibility score based on resume-job alignment
- **Technical Questions**: AI-generated technical interview questions with:
  - Question content and context
  - Interviewer intention behind each question
  - Detailed answer guidance with approach suggestions
- **Behavioral Questions**: Curated behavioral interview questions including:
  - Personality and teamwork assessment questions
  - Problem-solving approach evaluation
  - Communication style analysis
  - Model answers for effective preparation
- **Skill Gap Analysis**: Identification of missing skills with severity levels:
  - LOW: Nice-to-have skills
  - MEDIUM: Important for the role
  - HIGH: Critical requirements
- **Preparation Plans**: Day-by-day study roadmaps with:
  - Daily focus areas (data structures, system design, mock interviews, etc.)
  - Specific tasks to complete each day
  - Structured timeline for interview preparation

### 📋 Review Management
- **Create Reviews**: Generate new analysis reports from resume and job descriptions
- **Retrieve All Reviews**: Fetch all evaluations for a specific user
- **Get Review by ID**: Access detailed analysis for a specific evaluation
- **Delete Reviews**: Remove unwanted evaluations with user authorization
- **User Isolation**: All reviews are scoped to authenticated users

### 🛡️ Security & Middleware
- **Authentication Middleware**: JWT verification for protected routes
- **Input Validation**: Zod schema validation for all API inputs
- **Error Handling**: Centralized error handling with custom error classes
- **CORS Configuration**: Cross-origin resource sharing with credentials
- **Cookie Security**: HTTP-only, secure, same-site cookies
- **Request Size Limits**: JSON and URL-encoded payload limits (16KB)

### 🗄️ Database Integration
- **Data Access Objects (DAO)**: Structured database operations
- **User Management**: User creation, retrieval, and updates
- **Review Storage**: Persistent storage of analysis results
- **Transaction Support**: Reliable database operations

### 📁 File Upload Handling
- **Multer Integration**: Memory-based file upload processing
- **Resume Upload**: Single file upload endpoint for resumes
- **File Validation**: Type and size validation for uploaded files
- **Buffer Processing**: Direct buffer-to-text conversion for PDF parsing

## API Endpoints

### Authentication Routes (`/api/v1/auth`)

#### POST `/api/v1/auth/signup`
- **Description**: Register a new user account
- **Access**: Public
- **Request Body**:
  ```json
  {
    "userName": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User data with access and refresh tokens in HTTP-only cookies

#### POST `/api/v1/auth/signin`
- **Description**: Authenticate user and issue tokens
- **Access**: Public
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User data with access and refresh tokens in HTTP-only cookies

#### POST `/api/v1/auth/signout`
- **Description**: Logout user and invalidate tokens
- **Access**: Private (requires authentication)
- **Response**: Success message with cleared cookies

#### POST `/api/v1/auth/refresh-token`
- **Description**: Refresh access token using refresh token
- **Access**: Public (reads refresh token from cookie/body)
- **Response**: New access and refresh token pair

#### GET `/api/v1/auth/me`
- **Description**: Get current authenticated user profile
- **Access**: Private (requires authentication)
- **Response**: Current user information

### Analysis Routes (`/api/v1/analysis`)

#### POST `/api/v1/analysis/review`
- **Description**: Generate a new resume analysis review
- **Access**: Private (requires authentication)
- **Request**: Multipart form data
  - `resume`: File (PDF, DOC, DOCX, TXT)
  - `jobDescription`: String
  - `selfDescription`: String
- **Response**: Complete analysis report including:
  - Match score (0-100)
  - Technical questions with intentions and answers
  - Behavioral questions with intentions and answers
  - Skill gaps with severity levels
  - Preparation plan with daily tasks
  - Job title

#### GET `/api/v1/analysis/all/review`
- **Description**: Get all reviews for the authenticated user
- **Access**: Private (requires authentication)
- **Response**: Array of user's review summaries

#### GET `/api/v1/analysis/:reviewId/review`
- **Description**: Get detailed review by ID
- **Access**: Private (requires authentication)
- **Parameters**: `reviewId` (path parameter)
- **Response**: Complete review details with all analysis components

#### DELETE `/api/v1/analysis/:reviewId/review`
- **Description**: Delete a specific review
- **Access**: Private (requires authentication)
- **Parameters**: `reviewId` (path parameter)
- **Response**: Success message

### User Routes (`/api/v1/user`)
- **Description**: User profile management endpoints
- **Access**: Private (requires authentication)
- **Features**: Profile updates, user settings management

### Health Check
- **GET `/health`**: Server health status endpoint
- **Response**: Server status and health message

## How the Analysis Works

### Step 1: Resume Processing
- User uploads resume file (PDF, DOC, DOCX, or TXT)
- Server validates file type and size
- PDF parser extracts text content from the resume
- Text content is prepared for AI analysis

### Step 2: Data Collection
- **Resume Text**: Extracted content from uploaded file
- **Job Description**: Pasted job posting from user
- **Self Description**: User's personal summary and career goals

### Step 3: AI Analysis
- Data is sent to Google Gemini 2.5 Flash model
- Expert interview coach prompt guides the analysis
- Structured schema ensures consistent JSON output
- AI generates comprehensive evaluation including:
  - Match score calculation
  - Technical interview questions
  - Behavioral interview questions
  - Skill gap identification
  - Preparation roadmap

### Step 4: Response Processing
- AI response is validated against Zod schema
- Structured data is extracted from JSON response
- Analysis is saved to database with user association
- Complete report is returned to frontend

### Step 5: Storage & Retrieval
- Review data is persisted in database
- User can retrieve all their past analyses
- Individual reviews can be accessed by ID
- Reviews can be deleted when no longer needed

## Architecture Overview

### Module Structure
```
src/
├── app.ts                 # Express app configuration
├── server.ts              # Server entry point
├── common/
│   ├── errors/           # Custom error classes and handlers
│   ├── middleware/       # Authentication and validation middleware
│   └── utils/            # Utility functions (API response, file handling)
├── config/               # Configuration files (database, environment)
├── modules/
│   ├── auth/             # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.dao.ts
│   │   ├── auth.routes.ts
│   │   ├── auth.types.ts
│   │   └── auth.validations.ts
│   ├── analysis/         # Resume analysis module
│   │   ├── analysis.controller.ts
│   │   ├── analysis.service.ts
│   │   ├── analysis.dao.ts
│   │   ├── analysis.routes.ts
│   │   ├── analysis.types.ts
│   │   └── analysis.validations.ts
│   ├── user/             # User management module
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   ├── user.dao.ts
│   │   ├── user.routes.ts
│   │   ├── user.types.ts
│   │   └── user.validations.ts
│   └── ai/               # AI integration module
│       ├── ai.service.ts
│       ├── prompts/
│       │   └── prompt.ts
│       └── ai.validations.ts
└── jobs/                 # Background job processing
```

### Request Flow
1. **Incoming Request** → Express app receives HTTP request
2. **Middleware Chain** → CORS, JSON parsing, cookie parsing
3. **Route Matching** → Request matched to appropriate route
4. **Authentication** → JWT verification (if protected route)
5. **Validation** → Zod schema validation
6. **Controller** → Request handling and response orchestration
7. **Service Layer** → Business logic execution
8. **DAO Layer** → Database operations
9. **AI Integration** → External AI service calls (if needed)
10. **Response** → Structured API response sent back

## Technology Stack

### Core Framework
- **Node.js**: JavaScript runtime environment
- **Express 5**: Fast, minimalist web framework
- **TypeScript**: Type-safe development with strict typing

### Authentication & Security
- **jsonwebtoken**: JWT token generation and verification
- **bcrypt**: Secure password hashing
- **cookie-parser**: Cookie parsing middleware
- **cors**: Cross-origin resource sharing

### AI & Processing
- **@google/genai**: Google Gemini AI SDK
- **pdf-parse**: PDF text extraction
- **zod-to-json-schema**: Schema conversion for AI validation

### Data & Validation
- **Zod**: Schema validation and type inference
- **Multer**: File upload handling

### Development Tools
- **tsx**: TypeScript execution engine
- **dotenv**: Environment variable management

## Environment Variables

Required environment variables (see `.env.example`):

- `PORT`: Server port (default: 8000)
- `NODE_ENV`: Environment (development/production)
- `CORS_ORIGIN`: Allowed CORS origins
- `GOOGLE_GEMINI_API_KEY`: Google Gemini API key for AI analysis
- Database configuration variables (host, port, username, password, database name)
- JWT secret keys for token generation

## Security Features

- **HTTP-Only Cookies**: Tokens stored in secure, HTTP-only cookies
- **Secure Flag**: Cookies marked secure in production
- **Same-Site Strict**: CSRF protection via same-site cookie policy
- **Password Hashing**: bcrypt with appropriate salt rounds
- **Token Expiration**: Short-lived access tokens with refresh token rotation
- **Input Validation**: All inputs validated against Zod schemas
- **Error Handling**: Sensitive information not exposed in error messages
- **CORS Configuration**: Controlled cross-origin access
- **Request Size Limits**: Protection against payload size attacks

## Error Handling

The application implements a comprehensive error handling system:

- **Custom Error Classes**: Specific error types (BadRequestError, UnauthorizedError, etc.)
- **Global Error Handler**: Centralized error processing
- **Structured Error Responses**: Consistent error response format
- **Logging**: Error logging for debugging and monitoring
- **User-Friendly Messages**: Clear error messages without exposing internals

## Database Schema

### Users Table
- `id`: Unique identifier
- `userName`: User's display name
- `email`: User's email (unique)
- `password`: Hashed password
- `refreshToken`: Current refresh token
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp

### Reviews Table
- `id`: Unique identifier
- `userId`: Foreign key to users table
- `resume`: Resume text content
- `selfDescription`: User's self-description
- `jobDescription`: Job description text
- `matchScore`: Compatibility score (0-100)
- `title`: Job title/position
- `technicalQuestions`: JSON array of technical questions
- `behavioralQuestions`: JSON array of behavioral questions
- `skillGaps`: JSON array of skill gaps
- `preparationPlan`: JSON array of preparation plan
- `createdAt`: Review creation timestamp
- `updatedAt`: Last update timestamp

## Development

### Running the Server
```bash
# Development mode with hot reload
pnpm run dev

# Build TypeScript
pnpm run build

# Production mode
pnpm run start
```

### Code Quality
```bash
# Type checking
pnpm run check-types

# Linting
pnpm run lint
```

## Key Features Implementation Details

### AI Prompt Engineering
The system uses expert interview coach prompts that instruct the AI to:
- Provide honest, critical, yet constructive feedback
- Generate specific technical questions based on job requirements
- Create behavioral questions for personality assessment
- Identify critical skill gaps
- Develop realistic preparation plans
- Maintain professional and helpful tone

### Response Validation
All AI responses are validated against strict Zod schemas ensuring:
- Correct data types for all fields
- Required fields are present
- Enum values are valid (severity levels)
- Array structures are correct
- No malformed or unexpected data

### Authentication Flow
1. User signs up → Password hashed → User created → Tokens issued
2. User signs in → Credentials verified → Tokens issued
3. Access protected route → Token verified → Request processed
4. Token expires → Refresh token used → New tokens issued
5. User signs out → Tokens cleared → Refresh token invalidated
