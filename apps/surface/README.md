# HireLens AI - Surface Frontend

HireLens AI is an intelligent resume analysis platform that matches your resume against real job descriptions, providing objective eligibility scoring and personalized interview preparation strategies.

## Features

### 🎯 Smart Resume Analysis
- **AI-Powered Matching**: Upload your resume and get instant insights into how well your profile matches specific job roles
- **Compatibility Scoring**: Receive a detailed match percentage that objectively evaluates your fit for a position
- **Multi-Format Support**: Upload resumes in PDF, DOC, DOCX, or TXT format (up to 5MB)

### 📝 Comprehensive Job Evaluation
- **Job Description Input**: Paste complete job descriptions or role requirements for accurate analysis
- **Self Description/Bio**: Add your personal summary, key accomplishments, and career goals to enhance matching accuracy
- **Real-Time Validation**: Instant feedback on input requirements with word count tracking

### 📊 Detailed Analysis Results
- **Match Score Dashboard**: Visual representation of your job compatibility with color-coded indicators
  - 80%+ : High match (green)
  - 60-79% : Medium match (indigo)
  - Below 60% : Low match (amber)

### 🧠 Interview Preparation
- **Technical Questions**: AI-generated technical interview questions tailored to the specific job role
  - Each question includes the intention behind it and suggested answers
  - Expandable format for detailed study
  - Search functionality to find specific topics

- **Behavioral Questions**: Curated behavioral interview questions with:
  - Question context and interviewer intention
  - Model answers for effective preparation
  - STAR method guidance

### 🔍 Skill Gap Analysis
- **Identified Gaps**: Comprehensive analysis of missing or underdeveloped skills
- **Severity Levels**: Skill gaps categorized by impact:
  - LOW : Nice-to-have skills
  - MEDIUM : Important for the role
  - HIGH : Critical requirements
- **Actionable Insights**: Clear identification of areas needing improvement

### 📚 Personalized Preparation Plans
- **Day-by-Day Roadmap**: Structured study plans with daily focus areas
- **Task Checklists**: Specific tasks to complete each day
- **Progress Tracking**: Interactive checkboxes to track your preparation progress
- **Persistent Storage**: Your progress is saved locally for continuity

### 📋 Evaluation Management
- **Review History**: Access all past job evaluations in one place
- **Search & Filter**: Quickly find specific evaluations by job title
- **Sorting Options**: Organize reviews by:
  - Latest analyzed
  - Oldest analyzed
  - Highest match score
  - Lowest match score
- **Delete Evaluations**: Remove outdated or unwanted analyses
- **Quick Stats**: View number of technical and behavioral questions per evaluation

### 🎨 Modern User Interface
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic theme adaptation for comfortable viewing
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Intuitive Navigation**: Clear user flow from analysis to review

### 🔐 User Authentication
- **Secure Sign In/Sign Up**: Protected access to your personal evaluation history
- **User Profile**: Manage your account information and preferences

## How to Analyze Your Resume

### Step 1: Navigate to Analysis
- Click the "Get Started" button on the home page
- Or access directly via the analyze page

### Step 2: Provide Job Information
- **Job Description**: Paste the complete job posting, including:
  - Role title and responsibilities
  - Required skills and qualifications
  - Company information and culture
  - Any specific requirements mentioned

- **Self Description**: Share information about yourself:
  - Your professional background
  - Key accomplishments and projects
  - Career goals and aspirations
  - What you're looking for in a role

### Step 3: Upload Your Resume
- **Drag & Drop**: Drag your resume file directly into the upload zone
- **Browse Files**: Click to select from your device
- **Supported Formats**: PDF, DOC, DOCX, TXT
- **File Size Limit**: Maximum 5MB

### Step 4: Analyze
- Click the "Analyze Job" button
- Wait for the AI to process your information (typically a few seconds)
- You'll be automatically redirected to your detailed results

### Step 5: Review Your Results
- **Match Score**: See your overall compatibility percentage
- **Technical Questions**: Study role-specific technical questions
- **Behavioral Questions**: Prepare for behavioral interviews
- **Skill Gaps**: Identify areas for improvement
- **Preparation Plan**: Follow your personalized study roadmap

### Step 6: Track Progress
- Use the interactive checkboxes in your preparation plan
- Your progress is automatically saved
- Return anytime to continue your preparation

### Step 7: Manage Evaluations
- Access all your past evaluations from the reviews page
- Search and filter to find specific analyses
- Compare your match scores across different roles
- Delete evaluations you no longer need

## Key Components

- **Home Page**: Landing page with feature overview and user testimonials
- **Analyze Page**: Resume upload and job description input interface
- **Review Detail Page**: Comprehensive analysis results with interactive elements
- **Review All Page**: Management dashboard for all past evaluations
- **Authentication Pages**: Secure sign in and sign up flows
- **User Dashboard**: Personal overview and account management

## Technology Highlights

- **Next.js 16**: React framework for optimal performance
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern utility-first styling
- **shadcn/ui**: Beautiful, accessible component library
- **Motion**: Smooth animations and transitions
- **Zustand**: Lightweight state management
- **React Hook Form**: Efficient form handling with validation

## Data Privacy

- Your resume and job descriptions are processed securely
- Evaluation results are stored in your personal account
- Local storage for preparation plan progress
- Control over your data with delete functionality