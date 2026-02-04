import { createContext, useContext, useState, ReactNode } from 'react';

type MobileView = 'developer' | 'designer';

interface MobileViewContextType {
  mobileView: MobileView;
  setMobileView: (view: MobileView) => void;
}

const MobileViewContext = createContext<MobileViewContextType | undefined>(undefined);

export const MobileViewProvider = ({ children }: { children: ReactNode }) => {
  const [mobileView, setMobileView] = useState<MobileView>('developer');

  return (
    <MobileViewContext.Provider value={{ mobileView, setMobileView }}>
      {children}
    </MobileViewContext.Provider>
  );
};

export const useMobileView = () => {
  const context = useContext(MobileViewContext);
  if (!context) {
    throw new Error('useMobileView must be used within MobileViewProvider');
  }
  return context;
};
