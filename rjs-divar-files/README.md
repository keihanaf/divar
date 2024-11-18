# Divar

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">

A full-stack web application clone of Divar.ir, Iran's popular classified ads platform, built with React.js and Node.js.


## Features

- 🔐 User Authentication with OTP
- 🌙 Dark/Light Theme
- 📱 Responsive Design
- 📝 Post Management (Create, Read, Delete)
- 🗂️ Category Management (Admin Panel)
- 🔍 Category-based Filtering
- 🎨 Modern UI with CSS Modules
- 🌐 RTL Support for Persian Language
- 🔄 Real-time Data Updates
- 🎯 Role-based Access Control

## Tech Stack

### Frontend
- React.js
- React Router DOM
- React Query (TanStack Query)
- Axios
- CSS Modules
- React Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Custom OTP System

## Project Structure

src/
├── assets/         # Static assets (fonts, images)
├── components/     # React components
│   ├── modules/    # Reusable components
│   └── templates/  # Page-specific components
├── configs/        # Configuration files
├── hooks/          # Custom React hooks
├── layouts/        # Layout components
├── pages/          # Page components
├── router/         # Routing configuration
├── services/       # API service calls
├── styles/         # Global styles
└── utils/          # Utility functions

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the frontend repository:

```bash
git clone https://github.com/keihanaf/rjs-divar-files.git
cd rjs-divar-files
```

2. Install dependencies:

```bash
npm install
```

3. Clone and set up the backend repository:

```bash
git clone https://github.com/keihanaf/rjs-divar-api.git
cd rjs-divar-api
npm install
```

4. Start the backend server:

```bash
npm start
```

5. Start the frontend development server:

```bash
npm run dev
```

### Environment Variables

Create a `.env` file in the frontend root directory:

```env
VITE_BASE_URL=http://localhost:3400/
```

This environment variable is used to connect the frontend with your backend API running on port 3400. Make sure your backend server is running on this port before starting the frontend application.

Note: If you change the backend port, make sure to update this environment variable accordingly.

## Key Components

- `App.jsx`: Main application component with routing and global providers
- `Router.jsx`: Route configurations with protected routes
- `Layout.jsx`: Main layout wrapper with header and footer
- `Header.jsx`: Navigation and user controls including dark mode toggle
- `Main.jsx`: Home page main content display
- `CategoryForm.jsx`: Admin interface for category management
- `AddPost.jsx`: Form for creating new classified ads

## Authentication Flow

1. User enters mobile number
2. OTP is sent to the mobile number
3. User verifies OTP
4. JWT tokens (access + refresh) are stored in cookies
5. Automatic token refresh handling

## API Integration

- Axios instance with interceptors for token management
- Automatic refresh token handling
- React Query for server state management

## Styling

- CSS Modules for component-scoped styling
- Dark mode support with CSS variables
- Responsive design breakpoints
- RTL layout support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [Divar.ir](https://divar.ir)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Font: Vazir

## Languages and Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,vite,css,vscode" />
  </a>
</p>

