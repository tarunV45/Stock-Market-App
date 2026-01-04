// TradingViewWidget.jsx

"use client";

import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import React, { memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  scriptURL: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptURL,
  config,
  height,
  className,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(
    scriptURL,
    config,
    height
  );

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{
          height,
          width: "100%",
        }}
      />
      {/* <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">
            AAPL stock chart
          </span>
        </a>
        <span className="trademark">
          {" "}
          by TradingView
        </span>
      </div> */}
    </div>
  );
};

export default memo(TradingViewWidget);
