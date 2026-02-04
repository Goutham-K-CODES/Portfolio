import { Code2, Palette } from 'lucide-react';

interface MobileToggleProps {
  activeView: 'developer' | 'designer';
  onToggle: (view: 'developer' | 'designer') => void;
}

const MobileToggle = ({ activeView, onToggle }: MobileToggleProps) => {
  return (
    <div className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-200">
      <div className="flex gap-1">
        <button
          onClick={() => onToggle('developer')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === 'developer'
              ? 'bg-[hsl(var(--dev-bg))] text-[hsl(var(--dev-accent))] shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span className="text-sm font-medium">Developer</span>
        </button>
        <button
          onClick={() => onToggle('designer')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === 'designer'
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Palette className="w-4 h-4" />
          <span className="text-sm font-medium">Designer</span>
        </button>
      </div>
    </div>
  );
};

export default MobileToggle;
