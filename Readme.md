# Project Boilerplate

A modern, **fully TypeScript** and fully decoupled full-stack application boilerplate featuring a backend and frontend with shared type definitions.

## 🎯 Problems I was looking to solve

This boilerplate addresses several key challenges in modern full-stack development:

### 1. **Type Safety from Backend ↔ Frontend** 🔒
The biggest challenge was ensuring **complete type safety** between backend and frontend. Traditional approaches often lead to:
- Manual type duplication and maintenance
- Runtime errors due to type mismatches
- Inconsistent API contracts
- Time-consuming debugging when types drift apart

**Solution**: Automatic type synchronization with a single source of truth (`shared/Types.ts`) that keeps both backend and frontend perfectly in sync.

### 2. **Complete Decoupling for Reusability** 🔄
Backend endpoints should be reusable across different clients:
- **Mobile apps** (React Native, Flutter, etc.)
- **Cron job services** and background workers
- **Third-party integrations** and webhooks
- **Multiple frontend applications**

**Solution**: Fully decoupled architecture where the backend is a standalone API service that can be consumed by any client, with shared types ensuring consistent contracts across all consumers.

## 🏗️ Architecture

This boilerplate is designed with a **fully decoupled architecture** where the backend and frontend are completely independent applications that can be developed, deployed, and scaled separately.

### Key Features

- **Backend**: **Express.js/Node.js** with **TypeScript**
- **Frontend**: **React** with **TypeScript** and **Vite**
- **Shared Types**: Automatic type synchronization between backend and frontend
- **Git Hooks**: Pre-push validation to ensure type consistency
- **Modern Tooling**: **Full TypeScript** support, ESLint, and optimized build configurations

## 📁 Project Structure

```
project-boilerplate/
├── backend/                 # Express.js/Node.js with TypeScript
│   ├── src/
│   │   ├── server.ts       # Main Express server file
│   │   └── shared/         # Shared types (auto-synced)
│   └── package.json
├── frontend/               # React with TypeScript and Vite
│   ├── src/
│   │   ├── App.tsx         # Main React component
│   │   └── shared/         # Shared types (auto-synced)
│   └── package.json
├── shared/                 # Source of truth for shared types
│   └── Types.ts
└── scripts/                # Build and setup scripts
    ├── copy-shared.js      # Type synchronization script
    └── pre-push.sh         # Git pre-push hook
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd project-boilerplate
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure Git hooks** ⚠️ **IMPORTANT**
   ```bash
   # Make the setup script executable
   chmod +x scripts/setup-hooks.sh
   
   # Run the setup script
   ./scripts/setup-hooks.sh
   ```
   
   **Note**: You must configure the Git hooks for the type synchronization to work properly. The setup script will install the pre-push hook that ensures type consistency between backend and frontend.

4. **Start development servers**
   ```bash
   # Terminal 1: Start backend
   cd backend
   npm run dev
   
   # Terminal 2: Start frontend
   cd frontend
   npm run dev
   ```

## 🔄 Type Synchronization

The boilerplate automatically keeps types synchronized between backend and frontend:

- **Source of Truth**: `shared/Types.ts` contains all shared type definitions
- **Automatic Sync**: The `copy-shared.js` script copies types to both `backend/src/shared/` and `frontend/src/shared/`
- **Pre-push Validation**: Git hooks ensure types are always in sync before pushing

### Adding New Shared Types

1. Edit `shared/Types.ts`
2. The types will be automatically copied to both backend and frontend
3. Import and use in your code:
   ```typescript
   // In backend or frontend
   import { YourType } from './shared/Types';
   ```

## 🛠️ Development

### Backend Development

- **Location**: `backend/`
- **Framework**: Express.js with Node.js and TypeScript
- **Scripts**:
  - `npm run dev`: Start development server
  - `npm run build`: Build for production
  - `npm start`: Start production server

### Frontend Development

- **Location**: `frontend/`
- **Framework**: React with TypeScript and Vite
- **Scripts**:
  - `npm run dev`: Start Vite dev server
  - `npm run build`: Build for production
  - `npm run preview`: Preview production build

## 🔒 Git Hooks

The boilerplate includes a pre-push hook that:

- Ensures shared types are synchronized
- Prevents pushing if types are out of sync
- Runs automatically before each `git push`

### Manual Hook Setup

If the automatic setup doesn't work, manually configure:

```bash
# Copy the pre-push hook
cp scripts/pre-push.sh .git/hooks/pre-push

# Make it executable
chmod +x .git/hooks/pre-push
```

## 📦 Building for Production

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

The built frontend files will be in `frontend/dist/` and can be served by any static file server.

## 🔧 Customization

### Adding New Dependencies

- **Backend**: Add to `backend/package.json`
- **Frontend**: Add to `frontend/package.json`
- **Shared**: Add to both if needed across the stack

### Modifying Build Configuration

- **Backend**: Edit `backend/tsconfig.json`
- **Frontend**: Edit `frontend/vite.config.ts` and `frontend/tsconfig.json`

## 🐛 Troubleshooting

### Types Not Syncing

1. Ensure Git hooks are properly configured
2. Run the copy script manually: `node scripts/copy-shared.js`
3. Check file permissions on the setup script

### Build Errors

1. Verify all dependencies are installed in both directories
2. Check TypeScript configuration files
3. Ensure shared types are properly imported

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure types are synchronized
5. Submit a pull request

---

**Happy coding! 🎉**
