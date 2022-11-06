import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import Nav from "./components/includes/Nav";
import Footer from "./components/includes/Footer";
import Icon from "./assets/images/icon.png";
import { Analytics } from "@vercel/analytics/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Beunbxd",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "icon",
    href: Icon,
    type: "image/png",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-unbxd-bg w-full">
        <RoughNotationGroup show={true}>
          <Nav />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
          <Analytics />
        </RoughNotationGroup>
      </body>
    </html>
  );
}
