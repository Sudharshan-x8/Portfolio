import React from 'react';
// import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-editorial-beige max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-editorial-beige border-b border-editorial-charcoal/20 p-6 flex justify-between items-center">
          <div className="bg-editorial-red p-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
              Resume
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-editorial-charcoal/10 rounded-full transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-0">
          <iframe 
            src="/resume.pdf"
            className="w-full h-[calc(90vh-120px)]"
            title="Sudharshan's Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal; 