import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import 'flowbite';

hydrateRoot(document, 
    <ThemeProvider>
        <RemixBrowser />
    </ThemeProvider>
);
