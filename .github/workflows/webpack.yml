-- Users (Job Seekers & Employers)
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  user_type VARCHAR(20) DEFAULT 'job_seeker',
  linkedin_url TEXT,
  resume_text TEXT,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Companies/Employers
CREATE TABLE companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  website_url TEXT,
  industry VARCHAR(100),
  size VARCHAR(50),
  location TEXT,
  logo_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Job Listings (from employers + aggregated)
CREATE TABLE jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  requirements TEXT,
  location VARCHAR(255),
  salary_min INTEGER,
  salary_max INTEGER,
  salary_currency VARCHAR(10) DEFAULT 'USD',
  job_type VARCHAR(50), -- full-time, part-time, contract, remote, hybrid
  experience_level VARCHAR(50),
  is_remote BOOLEAN DEFAULT false,
  source VARCHAR(100), -- 'employer', 'naukri', 'linkedin', 'government'
  source_url TEXT,
  posted_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  metadata JSONB DEFAULT '{}'
);

-- Job Applications
CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  job_id UUID REFERENCES jobs(id),
  status VARCHAR(50) DEFAULT 'applied',
  resume_version TEXT,
  cover_letter TEXT,
  applied_at TIMESTAMP DEFAULT NOW(),
  notes TEXT
);

-- Resume Analyses
CREATE TABLE resume_analyses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  job_id UUID REFERENCES jobs(id),
  original_text TEXT,
  optimized_text TEXT,
  ats_score INTEGER,
  match_score INTEGER,
  improvements JSONB,
  keywords_matched TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Skills & Gap Analysis
CREATE TABLE skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  skill_name VARCHAR(100),
  proficiency INTEGER DEFAULT 0,
  target_level INTEGER,
  is_missing BOOLEAN DEFAULT false,
  recommended_courses JSONB
);

-- Interview Prep Sessions
CREATE TABLE interviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  job_id UUID REFERENCES jobs(id),
  questions JSONB,
  answers JSONB,
  feedback JSONB,
  video_url TEXT,
  score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Salary Data
CREATE TABLE salaries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  role VARCHAR(255),
  location VARCHAR(255),
  experience_years INTEGER,
  salary_avg INTEGER,
  salary_min INTEGER,
  salary_max INTEGER,
  company VARCHAR(255),
  source VARCHAR(100),
  collected_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for Performance
CREATE INDEX idx_jobs_location ON jobs(location);
CREATE INDEX idx_jobs_source ON jobs(source);
CREATE INDEX idx_jobs_is_active ON jobs(is_active);
CREATE INDEX idx_jobs_posted_at ON jobs(posted_at);
CREATE INDEX idx_applications_user_id ON applications(user_id);
CREATE INDEX idx_jobs_company_id ON jobs(company_id);
