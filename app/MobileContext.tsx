import React from 'react';

export type MobileContextData = {
  isMobile: boolean;
};

const MobileContext = React.createContext<MobileContextData>({
  isMobile: false
});

export const MobileProvider = MobileContext.Provider;
export default MobileContext;
