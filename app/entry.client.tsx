import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";

hydrateRoot(document, 
    <ThemeProvider>
        <RemixBrowser />
    </ThemeProvider>
);
