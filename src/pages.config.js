import { lazy } from 'react';
import __Layout from './Layout.jsx';

/**
 * Safe code splitting implementation using React.lazy()
 * This reduces the initial bundle size without changing app behavior
 * All pages are lazy-loaded on demand with automatic code splitting
 */

// Lazy load pages for better initial load performance
const Landing = lazy(() => import('./pages/Landing'));
const Contact = lazy(() => import('./pages/Contact'));

export const PAGES = {
    "Landing": Landing,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Landing",
    Pages: PAGES,
    Layout: __Layout,
};