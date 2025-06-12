import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '../Button/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            {title && <h2 className="text-xl font-semibold">{title}</h2>}
            <Button
              variant="secondary"
              size="sm"
              icon={X}
              onClick={onClose}
              aria-label="Close modal"
            />
          </div>

          {/* Content */}
          <div className="p-4">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="p-4 border-t">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}