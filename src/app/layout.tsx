import type { Metadata } from "next";

import "./styles.css";

export const metadata: Metadata = {
  title: "greatfrontend-projects",
  description: "A collection of projects I've done on greatfrontend.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
