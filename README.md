# Droplink

A modern file sharing application with React frontend and Node.js/Express backend.

## Project Structure

```
droplink/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── config.py               # Configuration settings
├── models/                 # Database models
│   ├── __init__.py
│   └── user.py             # User model
├── routes/                 # Flask routes
│   ├── __init__.py
│   └── main.py             # Main routes
├── templates/              # HTML templates
│   ├── base.html           # Base template for shared layout
│   ├── index.html          # Homepage
│   ├── 404.html            # 404 error page
│   ├── features.html       # Features page
│   ├── pricing.html        # Pricing page
│   ├── templates.html      # Templates page
│   ├── login.html          # Login page
│   ├── get-started.html    # Get Started page
│   ├── create.html         # Create Droplink page
│   ├── demo.html           # Demo page
│   ├── photographer-alex.html  # Featured creator page
│   ├── blogger-luna.html   # Featured creator page
│   ├── chef-kai.html       # Featured creator page
│   ├── blog.html           # Company: The Droplink Blog
│   ├── engineering-blog.html  # Company: Engineering Blog
│   ├── marketplace.html    # Company: Marketplace
│   ├── whats-new.html      # Company: What's New
│   ├── about.html          # Company: About
│   ├── press.html          # Company: Press
│   ├── careers.html        # Company: Careers
│   ├── link-in-bio.html    # Company: Link in Bio
│   ├── social-good.html    # Company: Social Good
│   ├── contact.html        # Company: Contact
│   ├── enterprise.html     # Community: Droplink for Enterprise
│   ├── creator-report-2023.html  # Community: 2023 Creator Report
│   ├── creator-report-2022.html  # Community: 2022 Creator Report
│   ├── charities.html      # Community: Charities
│   ├── trending.html       # Community: What's Trending
│   ├── creator-directory.html  # Community: Creator Profile Directory
│   ├── explore-templates.html  # Community: Explore Templates
│   ├── help-topics.html    # Support: Help Topics
│   ├── getting-started.html  # Support: Getting Started
│   ├── droplink-pro.html   # Support: Droplink Pro
│   ├── features-how-tos.html  # Support: Features & How-Tos
│   ├── faqs.html           # Support: FAQs
│   ├── report-violation.html  # Support: Report a Violation
│   ├── terms-conditions.html  # Trust & Legal: Terms & Conditions
│   ├── privacy-notice.html  # Trust & Legal: Privacy Notice
│   ├── cookie-notice.html  # Trust & Legal: Cookie Notice
│   ├── trust-center.html   # Trust & Legal: Trust Center
│   └── cookie-preferences.html  # Trust & Legal: Cookie Preferences
├── static/                 # Static assets
│   ├── css/
│   │   └── styles.css      # Extracted CSS
│   ├── js/
│   │   └── scripts.js      # Placeholder for JavaScript
│   └── images/
│       └── logo.png        # Placeholder for logo
├── tests/                  # Unit tests
│   ├── __init__.py
│   └── test_routes.py      # Tests for routes
├── migrations/             # Database migrations
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## Prerequisites

- Docker and Docker Compose
- Node.js (v18 or higher)
- Python 3.8 or higher
- npm or yarn

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd droplink
```

2. Install dependencies:

Frontend:
```bash
cd frontend
npm install
```

Backend:
```bash
cd backend
npm install
```

Python dependencies:
```bash
pip install -r requirements.txt
```

3. Start the application using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: mongodb://localhost:27017

## Development

- Frontend development server: `cd frontend && npm start`
- Backend development server: `cd backend && npm run dev`
- Run tests: `npm test` in respective directories

## Features

- User authentication
- File upload and sharing
- Secure file storage
- Modern Material-UI interface
- RESTful API
- MongoDB database

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
