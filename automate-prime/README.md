<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Automate Prime - React Edition

**Automate Prime** is a modern, single-page web application that serves as the corporate landing page for a fictional digital transformation consultancy. The project is built with **React**, **TypeScript**, and **Vite**, and is styled using **Tailwind CSS**.

## Features

- **AI Consultant:** An interactive chat modal that connects to the Gemini API to provide intelligent answers to user queries.
- **Responsive Design:** A modern, dark-themed, and fully responsive UI.
- **Dynamic Content:** A component-based architecture for displaying services, team members, and company information.
- **Booking Simulation:** A booking modal that opens the user's default email client to simulate a booking request.

## Tech Stack

*   **Framework:** [React](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **AI:** [Google Gemini](https://ai.google.dev/)

## Project Structure

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

## Run Locally

**Prerequisites:** [Node.js](https://nodejs.org/) (v18.x or higher recommended) and [npm](https://www.npmjs.com/).

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ramilmendoza/automate-prime.git
    cd automate-prime
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set your API Key:**

    Create a file named `.env.development` in the root of the project and add your Google Gemini API key:
    ```
    VITE_API_KEY="your_google_gemini_api_key"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be running at `http://localhost:5173`.

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Compiles the TypeScript code and builds the project for production.
*   `npm run preview`: Serves the production build locally for previewing.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
