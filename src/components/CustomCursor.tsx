
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverDialog, setIsOverDialog] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleDialogMouseEnter = () => {
      setIsOverDialog(true);
    };

    const handleDialogMouseLeave = () => {
      setIsOverDialog(false);
    };

    window.addEventListener('mousemove', updatePosition);

    // Add event listeners for all dialog elements
    const dialogElements = document.querySelectorAll('[role="dialog"]');
    dialogElements.forEach(dialog => {
      dialog.addEventListener('mouseenter', handleDialogMouseEnter);
      dialog.addEventListener('mouseleave', handleDialogMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      dialogElements.forEach(dialog => {
        dialog.removeEventListener('mouseenter', handleDialogMouseEnter);
        dialog.removeEventListener('mouseleave', handleDialogMouseLeave);
      });
    };
  }, []);

  if (isOverDialog) {
    return null; // Don't render the custom cursor when over a dialog
  }

  return (
    <div 
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-8 h-8 bg-white rounded-full"></div>
    </div>
  );
};

export default CustomCursor;
