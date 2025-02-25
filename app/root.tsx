import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { initInWeb } from "@rebirth/mobile-sdk";

initInWeb();

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Project Matrix",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* <script src="/monaco/loader.js"></script> */}
        {/* <script src="/monaco/editor/editor.main.nls.js"></script> */}
        {/* <script src="/monaco/editor/editor.main.js"></script> */}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}
