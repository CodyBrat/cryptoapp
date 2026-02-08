# CryptoApp 

A modern, high-performance cryptocurrency tracking application built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**. This application provides real-time market data, interactive candlestick charts, and a sleek user interface for monitoring various digital assets.

##  Key Features

- **Real-time Market Data**: Track trending coins, top categories, and live price movements.
- **Interactive Charts**: Detailed candlestick charts using `lightweight-charts` for in-depth analysis.
- **Advanced Search**: Quickly find any cryptocurrency with a responsive search interface.
- **Live Data Updates**: WebSocket integration for real-time price feeds.
- **Sleek UI/UX**: Premium design with glassmorphism, smooth animations, and a modern aesthetic.
- **Responsive Design**: Fully optimized for various screen sizes.

##  Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Charting**: [Lightweight Charts](https://www.tradingview.com/lightweight-charts/)
- **Data Fetching**: [SWR](https://swr.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **API**: [CoinGecko Pro API](https://www.coingecko.com/en/api)

##  Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm / bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd cryptoapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your CoinGecko API credentials:
   ```env
   COINGECKO_BASE_URL=https://pro-api.coingecko.com/api/v3
   COINGECKO_API_KEY=your_api_key_here
   NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
   NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=wss://stream.coingecko.com/v1
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Project Structure

- `/app`: Next.js App Router pages and layouts.
- `/components`: Reusable UI components (DataTable, Charts, Header, etc.).
- `/hooks`: Custom React hooks for data fetching and state management.
- `/lib`: Utility functions and API clients.
- `/public`: Static assets like images and fonts.

##  License

This project is [MIT](LICENSE) licensed.
