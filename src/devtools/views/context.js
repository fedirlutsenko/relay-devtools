// @flow

import { createContext } from 'react';

import type { FrontendBridge } from 'src/bridge';
import type Store from '../store';

export const BridgeContext = createContext<FrontendBridge>(
  ((null: any): FrontendBridge)
);
BridgeContext.displayName = 'BridgeContext';

export const StoreContext = createContext<Store>(((null: any): Store));
StoreContext.displayName = 'StoreContext';
