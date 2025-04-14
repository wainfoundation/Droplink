# Droplink

A modern file sharing application with React frontend and Node.js/Express backend.

## Project Structure

```
droplink/
├── frontend/           # React frontend
├── backend/           # Node.js/Express backend
├── docker-compose.yml # Docker composition
└── requirements.txt   # Python dependencies
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
