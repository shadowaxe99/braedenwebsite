# Michael Gruen - Strategic Deal Architect & Future Attorney

A high-end, "Apple-aesthetic" personal portfolio for Michael Gruen. This site showcases his professional evolution from a successful entrepreneur and venture capitalist to a litigation-focused legal professional.

## ✨ Key Features

- **Apple-Inspired Aesthetic:** Minimalist design with high-contrast typography, subtle animations, and a focus on structural clarity.
- **Interactive 3D Star Background:** An immersive, twinkling star field built with Three.js and React Three Fiber.
- **Dual-Directional Marquees:** Dynamic, auto-scrolling credibility strips that highlight key achievements and areas of expertise.
- **Recommenders Carousel:** A smooth, looping testimonial grid featuring endorsements from industry leaders.
- **Narrative-Driven Layout:** Sections designed to tell the story of "The Challenge," "The Legal Pivot," and "Strategic Focus."
- **Fully Responsive:** Optimized for all devices, from mobile to ultra-wide desktops, with a custom mobile navigation menu.
- **Custom Cursor:** A refined, interactive cursor that responds to links and buttons.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (motion/react)
- **3D Graphics:** [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Customization Guide

To personalize this website, you should update the following files:

### 1. Core Data and Content
Most of the site's content (Testimonials, Experience, Writing, Press) is stored in:
- `src/lib/data.ts`

**Action:** Replace the placeholder data with your actual professional history and content.

### 2. Site Metadata
Update the name and description used for SEO and browser tabs in:
- `metadata.json`

### 3. Visuals and Assets
- **3D Background:** Modify the star field parameters in `src/components/StarBackground.tsx`.
- **Styling:** Adjust the theme colors and global styles in `src/index.css`.
- **Custom Cursor:** Tweak the cursor behavior in `src/components/CustomCursor.tsx`.

## 📄 License

This project is open-source and available under the MIT License.
