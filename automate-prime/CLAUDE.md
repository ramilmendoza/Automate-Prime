# CLAUDE.md

This document provides comprehensive guidance for AI assistants working with the **Automate Prime** codebase. It covers architecture, development workflows, coding conventions, and key implementation details.

## Project Overview

**Automate Prime** is a modern, single-page React application serving as a corporate landing page for a digital transformation consultancy. The application features an AI-powered chat consultant using Google's Gemini API.

### Key Characteristics
- **Type**: Single-page application (SPA)
- **Purpose**: Marketing/corporate landing page with interactive AI consultant
- **Target**: Fictional digital transformation consultancy
- **Deployment**: GitHub Pages (`/automate-prime/` base path)

## Tech Stack

### Core Technologies
- **React** 18.2.0 - UI framework
- **TypeScript** 5.2.2 - Type safety
- **Vite** 5.2.0 - Build tool and dev server
- **Tailwind CSS** 4.1.17 - Utility-first styling

### Additional Dependencies
- **@google/generative-ai** 0.24.1 - Gemini API integration
- **PostCSS** & **Autoprefixer** - CSS processing

### Development Tools
- **TypeScript Compiler** - Strict mode enabled
- **Vite React Plugin** - Fast refresh and JSX support

## Architecture

### Application Structure

```
automate-prime/
├── components/           # React components
│   ├── AIModal.tsx      # AI chat interface
│   ├── BookingModal.tsx # Email booking modal
│   ├── Hero.tsx         # Landing hero section
│   └── Logo.tsx         # Company logo component
├── services/            # External service integrations
│   └── aiService.ts     # Gemini API wrapper
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── constants.tsx        # Application constants & data
├── types.ts             # TypeScript type definitions
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind configuration
├── package.json         # Dependencies and scripts
├── .env.development     # Development environment variables
├── .env.production      # Production environment variables
└── public/              # Static assets (team images)
```

### Component Hierarchy

```
App (Main Container)
├── Navigation Bar
│   ├── Logo
│   ├── Navigation Links (Desktop/Mobile)
│   └── AI Button Trigger
├── Hero Section
│   └── CTA Button → BookingModal
├── Services Section (grid of service cards)
├── Why Us Section (features + case studies)
├── Team Section (leadership profiles)
├── CTA Section → BookingModal
├── Footer
├── AIModal (conditional render)
├── BookingModal (conditional render)
└── Floating AI Button (when modal closed)
```

### State Management

The application uses **component-level state** with React hooks:

- `useState` for local component state
- `useEffect` for side effects (scrolling, keyboard listeners, focus management)
- `useRef` for DOM references

**No global state management library** (Redux, Context API, etc.) is used - all state is localized.

## Detailed Component Guide

### App.tsx

**Purpose**: Main application container and layout orchestrator

**State Variables**:
- `isNavOpen`: Controls mobile navigation menu visibility
- `isAIModalOpen`: Controls AI modal visibility
- `isBookingModalOpen`: Controls booking modal visibility

**Key Functions**:
- `handleNavClick()`: Smooth scrolls to section, closes mobile nav
- `openBooking()`: Opens booking modal

**Important Details**:
- Fixed navbar with backdrop blur effect
- Smooth scroll behavior via `scroll-smooth` class and `scrollIntoView()`
- Responsive design with mobile menu toggle
- All sections have `scroll-mt-24` for proper anchor scrolling with fixed navbar

### AIModal.tsx

**Purpose**: Interactive AI chat interface powered by Gemini

**State Variables**:
- `input`: Current user input text
- `messages`: Array of chat messages with role, text, and timestamp
- `isLoading`: Tracks if AI is generating response

**Key Features**:
- Auto-scroll to latest message
- Auto-focus input on modal open
- ESC key to close modal
- Enter to submit (Shift+Enter for new line)
- Loading animation with bouncing dots
- Error handling with graceful fallback messages

**Message Structure**:
```typescript
interface Message {
  role: 'user' | 'ai';
  text: string;
  timestamp: Date;
}
```

**Initial Greeting**: Automatically displays PrimeAI welcome message

### constants.tsx

**Purpose**: Centralized data and icon definitions

**Exports**:
- `Icons`: Object containing SVG icon components
- `TEAM_MEMBERS`: Array of leadership profiles
- `SERVICES`: Array of service offerings with icons
- `CASE_STUDIES`: Array of client success stories

**Important**: Uses external URLs for team member images hosted on GitHub

### services/aiService.ts

**Purpose**: Encapsulates Google Gemini API integration

**Configuration**:
- Model: `gemini-pro`
- API Key: From `VITE_API_KEY` environment variable
- System Instruction: Detailed prompt defining PrimeAI persona

**Key Function**:
```typescript
getAIResponse(userQuery: string): Promise<string>
```

**Error Handling**: Returns friendly fallback message on API failure

**Important**: Throws error if `VITE_API_KEY` is not defined

## Styling Conventions

### Tailwind Configuration

**Custom Colors**:
```javascript
"prime-dark": "#0A0A0A"      // Main background
"prime-light": "#00A8E8"     // Accent blue
"prime-accent": "#D7263D"    // Red accent
"prime-blue": "#007EA7"      // Secondary blue
```

**Custom Fonts**:
- `font-heading`: Orbitron (headings)
- `font-tech`: Rajdhani (tech labels, navigation)
- `font-body`: Inter (body text)

**Key Design Patterns**:
- Dark theme with gradients
- Subtle borders (`border-gray-700`, `border-gray-800`)
- Hover effects with transitions
- Backdrop blur on overlays
- Grid patterns for texture
- Grayscale-to-color transitions on hover

### Animation Classes

- `animate-fade-in-up`: Entrance animation
- `animate-pulse`: Pulsing elements
- `animate-blink`: Blinking cursor/indicators
- `animate-pulse-glow`: Glowing effect
- `hover:-translate-y-2`: Lift on hover
- `transition-all`: Smooth property transitions

### Responsive Breakpoints

- Mobile-first approach
- `md:` prefix for tablet/desktop (768px+)
- `lg:` prefix for large screens (1024px+)
- Mobile menu toggle button hidden on `md:` and above

## Development Workflow

### Setup

```bash
# Clone and navigate
git clone https://github.com/ramilmendoza/automate-prime.git
cd automate-prime

# Install dependencies
npm install

# Set up environment variables
# Create .env.development with:
# VITE_API_KEY="your_google_gemini_api_key"
```

### Available Scripts

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # TypeScript check + production build
npm run preview  # Preview production build locally
```

### Development Server

- **Port**: 5173 (default Vite port)
- **Hot Module Replacement**: Enabled via Vite
- **Fast Refresh**: React components hot reload without losing state

### Build Process

1. TypeScript compilation check (`tsc`)
2. Vite build to `dist/` directory
3. Assets optimized and bundled
4. Base path set to `/automate-prime/` for GitHub Pages

## Environment Variables

### Required Variables

**Development** (`.env.development`):
```
VITE_API_KEY="your_google_gemini_api_key"
```

**Production** (`.env.production`):
```
VITE_API_KEY="production_api_key"
```

### Accessing Environment Variables

```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

**Important**: All Vite environment variables must be prefixed with `VITE_` to be exposed to the client

### Security Note

- `.env` files are gitignored
- Never commit API keys to version control
- `.env.development` and `.env.production` templates exist but should contain placeholder values

## Code Conventions

### TypeScript

- **Strict mode enabled**: All type safety checks active
- **Interface definitions**: Located in `types.ts`
- **Function components**: Use `React.FC<Props>` type
- **Props typing**: Always explicitly type component props
- **No unused variables warnings disabled**: `noUnusedLocals: false`

### React Patterns

**Component Structure**:
```typescript
import React, { useState } from 'react';

export const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);

  const handleEvent = () => {
    // Event handler logic
  };

  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

**File Naming**:
- Components: PascalCase (e.g., `AIModal.tsx`, `BookingModal.tsx`)
- Services/utilities: camelCase (e.g., `aiService.ts`)
- Types: camelCase (e.g., `types.ts`)
- Constants: camelCase (e.g., `constants.tsx`)

**Export Style**:
- Named exports for components: `export const ComponentName`
- Default export only for main `App` component

### Event Handling

**Standard patterns**:
```typescript
// Click handlers
const handleClick = () => { /* logic */ };

// Form submissions
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Form logic
};

// Keyboard events
const handleKeyPress = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter') {
    // Enter key logic
  }
};
```

## AI Service Integration

### System Prompt

The AI consultant (PrimeAI) is instructed with:
- **Identity**: Official AI consultant for Automate Prime
- **Company context**: Mission, services, leadership
- **Response guidelines**: Professional tone, 100-150 words, no pricing
- **Call-to-action**: Always recommend scheduling consultation

### Response Flow

1. User inputs query
2. `getAIResponse()` called with user query
3. Gemini API processes with system instruction
4. Response returned and displayed
5. Error handling with fallback message

### Rate Limiting & Errors

- No explicit rate limiting implemented
- Errors caught and displayed as friendly messages
- Loading state prevents multiple simultaneous requests

## Common Development Tasks

### Adding a New Service

1. Add icon SVG to `Icons` object in `constants.tsx`
2. Add service object to `SERVICES` array:
```typescript
{
  title: "Service Name",
  description: "Service description",
  icon: <Icons.ServiceIcon />
}
```

### Adding a Team Member

Add to `TEAM_MEMBERS` array in `constants.tsx`:
```typescript
{
  name: "Full Name",
  role: "Job Title",
  image: "URL to image"
}
```

### Modifying AI Personality

Edit the `systemInstruction` in `services/aiService.ts`:
- Update company context
- Adjust response guidelines
- Modify tone/style instructions

### Adding a New Section

1. Create section in `App.tsx` after `<main>` tag
2. Add `id="section-name"` for anchor linking
3. Add `scroll-mt-24` class for proper scrolling
4. Add navigation link in navbar
5. Update `handleNavClick()` if needed

### Updating Tailwind Configuration

**For colors**: Modify `tailwind.config` in `index.html` (lines 79-87)

**For components**: Update `tailwind.config.js` (though note: current config seems outdated/unused)

## Important Constraints & Gotchas

### Vite Base Path

**Issue**: Application deployed to GitHub Pages subdirectory

**Solution**: `base: "/automate-prime/"` in `vite.config.ts`

**Impact**: All asset paths are prefixed with `/automate-prime/`

### TypeScript Configuration

- **Module resolution**: `bundler` mode
- **JSX**: `react-jsx` (new JSX transform)
- **Import extensions**: Allowed for TypeScript files
- **No emit**: Build handled by Vite

### Tailwind Configuration

**Duplicate config exists**: Both in `tailwind.config.js` and `index.html`

**Active config**: The one in `index.html` (inline `tailwind.config`)

**Recommendation**: Keep configurations in sync or remove unused file

### CSS Loading

Uses **CDN Tailwind CSS** from `https://cdn.tailwindcss.com` (not recommended for production)

**Better approach**: Use PostCSS build process (already configured in `package.json` devDependencies)

### Environment Variables

- Must prefix with `VITE_`
- Exposed to client bundle (don't store secrets)
- Different files for dev/prod (`.env.development`, `.env.production`)

### Image Hosting

Team member images hosted externally on GitHub:
- `https://raw.githubusercontent.com/ramilmendoza/Images/main/[filename]`
- Risk: External URLs may change or become unavailable
- Recommendation: Move to `/public` folder for reliability

### Smooth Scrolling

- Handled via `scroll-smooth` class on `<html>` element
- JavaScript `scrollIntoView({ behavior: 'smooth' })` for programmatic scrolling
- Sections need `scroll-mt-24` to offset fixed navbar

## Git Workflow

### Branch Convention

- Main branch: `main` or `master` (check repository)
- Feature branches: Use descriptive names
- Claude branches: Prefix with `claude/` (e.g., `claude/add-feature-xyz`)

### Commit Messages

**Style**: Descriptive and concise

**Examples from history**:
```
feat: add project files
fix: remove deleted files
docs: create README.md
docs: revise README.md and add LICENSE
```

### Pushing Changes

```bash
# After making changes
git add .
git commit -m "feat: descriptive message"
git push -u origin branch-name
```

## Testing Strategy

**Current state**: No testing framework configured

**Recommendations for future**:
- **Unit tests**: Jest + React Testing Library
- **E2E tests**: Playwright or Cypress
- **Test AI integration**: Mock Gemini API responses
- **Visual regression**: Chromatic or Percy

## Performance Considerations

### Current Optimizations

- Vite for fast builds and HMR
- Component-level code splitting possible
- Lazy loading not implemented (all components bundled)
- No image optimization pipeline

### Potential Improvements

- Lazy load modals (dynamic imports)
- Optimize/compress team member images
- Implement proper Tailwind build (remove CDN)
- Add loading states for images
- Consider preloading critical resources

## API Costs & Quotas

**Gemini API**:
- Free tier available with rate limits
- Monitor usage in Google AI Studio
- Implement rate limiting if needed
- Consider caching common responses

## Security Considerations

### Current Security Posture

- API key in environment variables (good)
- Client-side API calls (API key exposed in bundle)
- No XSS protection beyond React's built-in escaping
- No CSRF protection needed (no server-side state)

### Recommendations

**For production**:
- Use backend proxy for Gemini API to hide key
- Implement rate limiting per IP/session
- Add input sanitization for AI queries
- Consider adding CSP headers
- Monitor for API key leakage

## Deployment

### GitHub Pages Setup

1. Build the project: `npm run build`
2. Deploy `dist/` folder to GitHub Pages
3. Configure repository settings for GitHub Pages
4. Ensure base path matches repository name

### Build Output

- Location: `dist/` directory
- Entry point: `index.html`
- Assets: Hashed filenames for cache busting
- Source maps: Generated for debugging

### Environment-Specific Builds

```bash
# Development build (uses .env.development)
npm run dev

# Production build (uses .env.production)
npm run build
```

## Troubleshooting

### Common Issues

**Issue**: AI not responding
- Check `VITE_API_KEY` in `.env.development`
- Verify API key is valid in Google AI Studio
- Check browser console for errors

**Issue**: Styles not applying
- Verify Tailwind CDN loaded in `index.html`
- Check custom classes exist in Tailwind config
- Clear browser cache

**Issue**: Images not loading
- Check external URL accessibility
- Verify image paths for local images in `/public`
- Check network tab for 404 errors

**Issue**: Build fails
- Run `npm install` to ensure dependencies updated
- Check TypeScript errors with `npx tsc`
- Verify Node.js version compatibility

## Future Enhancements

### Suggested Improvements

1. **Backend Integration**: Move API key to server-side proxy
2. **Analytics**: Add Google Analytics or similar
3. **SEO**: Add meta tags, structured data, sitemap
4. **Accessibility**: ARIA labels, keyboard navigation, screen reader testing
5. **Testing**: Add comprehensive test suite
6. **CMS**: Consider Contentful/Sanity for content management
7. **Animations**: Add Framer Motion for advanced animations
8. **Forms**: Replace email booking with actual form submission
9. **Blog**: Add blog section for content marketing
10. **Internationalization**: Add i18n support for multiple languages

## AI Assistant Guidelines

When working with this codebase as an AI assistant:

1. **Always read files before editing**: Understand context and existing patterns
2. **Maintain consistency**: Follow existing naming conventions and code style
3. **Type safety**: Ensure all TypeScript types are properly defined
4. **Test changes**: Verify changes work in development environment
5. **Environment variables**: Never commit actual API keys
6. **Responsive design**: Test changes on mobile and desktop
7. **Accessibility**: Consider keyboard navigation and screen readers
8. **Performance**: Avoid unnecessary re-renders and heavy computations
9. **Documentation**: Update this file when making architectural changes
10. **Git hygiene**: Write clear commit messages and push to correct branch

## Contact & Resources

- **Repository**: https://github.com/ramilmendoza/automate-prime
- **License**: MIT License (see LICENSE file)
- **Author**: Ramil Mendoza

## Version History

- **v1.0.0**: Initial release with React, TypeScript, and Gemini integration
- **Current**: Active development with ongoing enhancements

---

Last updated: 2025-11-26
Maintained for: AI assistants (Claude, GPT, Gemini, etc.)
