#!/bin/bash
echo "🚀 Deploying CareerCopilot..."

# Build the application
npm run build

# Run tests
npm run test

# Deploy to Vercel
vercel --prod

# Setup cron jobs for job aggregation
echo "Setting up cron jobs..."
curl -X POST https://api.cron-job.org/jobs \
  -H "Authorization: Bearer $CRONJOB_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "job": {
      "url": "https://careercopilot.vercel.app/api/cron/update-jobs",
      "enabled": true,
      "saveResponses": true,
      "schedule": {
        "timezone": "Asia/Kolkata",
        "hours": [0, 6, 12, 18],
        "mdays": [-1],
        "minutes": [0],
        "months": [-1],
        "wdays": [-1]
      }
    }
  }'

echo "✅ Deployment complete!"
