# Stock Market App

A real-time stock market dashboard with AI-powered insights and customizable price alerts. Built with Next.js and TypeScript.

## Features

- **Real-time stock data**: Live price tracking with interactive charts
- **AI insights**: Automated analysis of stock trends and market signals
- **Custom alerts**: Set price thresholds and get notified when stocks hit your targets
- **Watchlist management**: Track multiple stocks in a personalized dashboard

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Data**: Real-time market data APIs

## Getting started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/tarunV45/Stock-Market-App.git
cd Stock-Market-App
npm install
cp .env.example .env.local
# Add your API keys to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project structure

Stock-Market-App/
├── app/ # Next.js App Router pages
├── components/ # React components
│ ├── ui/ # Base UI components (shadcn)
│ └── ... # Feature components
├── hooks/ # Custom React hooks
├── lib/ # Utility functions and API clients
├── types/ # TypeScript type definitions
└── public/assets/ # Static assets

