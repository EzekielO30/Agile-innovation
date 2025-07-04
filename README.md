# Autodesk Agile Visibility Project

A portfolio website showcasing a project to improve Agile visibility and reduce delivery friction for innovation-focused teams at Autodesk.

## Features

- **Home Page**: Project overview with visual dashboard representation
- **Research Page**: Detailed research findings and methodology
- **Dashboard Page**: Interactive prototype of the dashboard solution
- **About Page**: Project details and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd autodesk-agile-visibility-project
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
\`\`\`

This will create an optimized production build in the `out` directory.

### Deployment

The project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── research/          # Research findings page
│   ├── about/             # About page
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## License

This project is for portfolio purposes.
