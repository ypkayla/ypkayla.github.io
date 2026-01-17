# Learn Python - Interactive Learning Platform

A modern, interactive Python learning platform built with Next.js, featuring in-browser code execution, real-time feedback, and comprehensive lessons from beginner to expert.

## Features

- 🚀 **In-Browser Python Execution** - Run Python code directly in your browser using Pyodide
- 💻 **VS Code Editor** - Professional code editing experience with Monaco Editor
- 📚 **Structured Curriculum** - Progressive lessons from basics to advanced topics
- ✅ **Interactive Exercises** - Hands-on coding challenges with automated validation
- 📊 **Progress Tracking** - Track your learning journey with XP, streaks, and completion stats
- 💾 **Auto-Save** - Your code is automatically saved as you type
- 🎨 **Modern UI** - Beautiful, responsive design with dark mode
- 📱 **Mobile Friendly** - Learn on any device

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Python Runtime**: Pyodide (WebAssembly)
- **Code Editor**: Monaco Editor
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Storage**: LocalStorage + IndexedDB

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ypkayla/ypkayla.github.io.git
cd ypkayla.github.io
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

For static export (GitHub Pages):
```bash
npm run export
```

## Project Structure

```
├── app/
│   ├── (learn)/          # Learning platform routes
│   │   ├── learn/
│   │   │   ├── page.tsx              # Course overview
│   │   │   ├── [course]/
│   │   │   │   ├── page.tsx          # Course details
│   │   │   │   └── [lesson]/
│   │   │   │       └── page.tsx      # Interactive lesson
│   │   └── layout.tsx    # Learning platform layout
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── editor/           # Code editor components
│   ├── lessons/          # Lesson components
│   ├── progress/         # Progress tracking
│   ├── snippets/         # Code snippet library
│   └── ui/               # Reusable UI components
├── data/
│   └── courses.ts        # Course content and structure
├── lib/
│   ├── pyodide.ts        # Python runtime integration
│   ├── storage.ts        # LocalStorage/IndexedDB utils
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Course Content

Currently includes:
- **Python Basics** - 5 lessons covering fundamentals
  - Hello World
  - Variables & Data Types
  - Math Operations
  - Working with Strings
  - Getting User Input

More courses coming soon:
- Intermediate Python
- Advanced Python
- Data Science with Python
- Web Development with Python

## Features in Detail

### Interactive Code Editor
- Syntax highlighting
- Auto-completion
- Error detection
- Customizable settings (theme, font size, etc.)

### Progress System
- XP points for completing lessons
- Daily streak tracking
- Completion percentage
- Lesson history

### Exercise Validation
- Automated test cases
- Real-time feedback
- Multiple test scenarios
- Clear error messages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning or building your own educational platform.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Python runtime by [Pyodide](https://pyodide.org/)
- Code editor by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- UI components by [Radix UI](https://www.radix-ui.com/)

## Contact

Created by [@ypkayla](https://github.com/ypkayla)

---

Happy Learning! 🎉🐍
