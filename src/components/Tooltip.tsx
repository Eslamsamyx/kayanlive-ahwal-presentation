import React, { useState, useEffect, useRef } from 'react';
import { Info } from 'lucide-react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  text: string;
  description: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, description }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (showTooltip && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();

      // Calculate position - directly above the element
      const top = rect.top - 8; // Small gap above element
      const left = rect.left + rect.width / 2;

      setPosition({ top, left });
    }
  }, [showTooltip]);

  const tooltipContent = showTooltip && (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translate(-50%, -100%)'
      }}
    >
      <div className="bg-gray-900 text-white text-sm rounded-lg shadow-2xl px-4 py-3 whitespace-nowrap">
        <div className="text-right" dir="rtl">
          {description}
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
          <div className="border-8 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <span
        ref={triggerRef}
        className="border-b-2 border-dotted border-yellow-400 cursor-help inline-flex items-center gap-1"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {text}
        <Info className="w-3 h-3 text-yellow-400" />
      </span>
      {typeof document !== 'undefined' && createPortal(tooltipContent, document.body)}
    </>
  );
};

export default Tooltip;