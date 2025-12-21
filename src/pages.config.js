import Landing from './pages/Landing';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Landing": Landing,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Landing",
    Pages: PAGES,
    Layout: __Layout,
};