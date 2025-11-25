# GEMINI.md

This document provides a comprehensive overview of the **Automate Prime** project, intended to serve as a guide for developers and future AI interactions.

## Project Overview

**Automate Prime** is a modern, single-page web application that serves as the corporate landing page for a fictional digital transformation consultancy. The project is built with **React**, **TypeScript**, and **Vite**, and is styled using **Tailwind CSS**.

### Key Features:

*   **Modern User Interface:** A responsive and visually appealing dark-themed UI with animations and a professional design.
*   **AI-Powered Chat:** An integrated "AI Consultant" modal (`PrimeAI`) that uses the **Google Gemini API** (`gemini-1.5-flash`) to answer user queries. The AI is instructed via a detailed system prompt to act as a representative of the company.
*   **Service Showcase:** Sections dedicated to showcasing the company's services, team, and value proposition.
*   **Booking Functionality:** A booking modal that opens the user's default email client with a pre-filled message to schedule a strategy session.

### Architecture:

*   **Frontend:** The application is built as a pure client-side React application.
*   **Component-Based:** The UI is broken down into reusable components located in the `src/components` directory.
*   **State Management:** Component-level state is managed using React hooks (`useState`, `useEffect`).
*   **AI Service:** The interaction with the Google Gemini API is encapsulated in the `src/services/aiService.ts` file.

## Building and Running the Project

The project uses `npm` for package management. The following scripts are defined in `package.json`:

*   **To install dependencies:**
    ```bash
    npm install
    ```

*   **To run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` by default.

*   **To build for production:**
    ```bash
    npm run build
    ```
    This command first runs the TypeScript compiler (`tsc`) to check for type errors and then uses Vite to build the project. The output is placed in the `dist/` directory.

*   **To preview the production build:**
    ```bash
    npm run preview
    ```

## Development Conventions

### API Key Management

The Google Gemini API key is managed via environment variables.

To set the API key for local development, create a `.env.development` file in the root of the project and add the following line:

```
VITE_API_KEY="your_google_gemini_api_key"
```

For production, create a `.env.production` file with the production API key.


### Code Style

*   **TypeScript:** The project uses TypeScript for static typing.
*   **React:** The project follows standard React conventions, including the use of functional components and hooks.
*   **Styling:** Styling is done using Tailwind CSS utility classes.
*   **File Naming:** Components are named using PascalCase (e.g., `BookingModal.tsx`), while other files use camelCase (e.g., `aiService.ts`).

### Project Structure

```
/
├── src/
│   ├── components/     # Reusable React components
│   ├── services/       # Services for interacting with external APIs
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Application entry point
│   └── constants.tsx   # Application constants
├── public/             # Static assets
├── package.json        # Project dependencies and scripts
├── vite.config.ts      # Vite build configuration
└── tsconfig.json       # TypeScript configuration
```
