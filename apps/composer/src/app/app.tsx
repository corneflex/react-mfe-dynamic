import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { useFederatedComponent } from '@corneflex/core';

export function App() {
  const { Component: FederatedComponent } = useFederatedComponent(
    'http://localhost:4201/remoteEntry.js',
    'extension',
    './Core'
  );
  return (
    <React.Suspense fallback="Loading System">
      {FederatedComponent && <FederatedComponent />}
    </React.Suspense>
  );
}

export default App;
