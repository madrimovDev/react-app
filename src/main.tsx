/** @format */
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {RootProvider} from './providers';

const rootContainer = document.getElementById('root')!;

const root = createRoot(rootContainer);

const app = <RootProvider />;

root.render(app);
