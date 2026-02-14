import "./globals.scss";

import { PropsWithChildren } from "react";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DM Laudos",
  description: "Sistema para geração de laudos médicos",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="pt-BR">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
