import React from 'react';
import { useDynamicScript } from '../dynamic/useDynamicScript';
import { loadComponent } from './loadComponent';

const componentCache = new Map();
export const useFederatedComponent = (
  remoteUrl: string,
  scope: string,
  module: string
) => {
  const key = `${remoteUrl}-${scope}-${module}`;
  const [Component, setComponent] = React.useState<any>(null);

  React.useEffect(() => {
    if (Component) setComponent(null);
    // Only recalculate when key changes
  }, [key]);

  React.useEffect(() => {
    if (!Component) {
      const Comp = React.lazy(loadComponent(remoteUrl, module));
      componentCache.set(key, Comp);
      setComponent(Comp);
    }
    // key includes all dependencies (scope/module)
  }, [Component, key, scope, module]);

  return { Component };
};
