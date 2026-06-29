import { profile } from "@/data/profileData";
import { VideoProvider } from "@/provider/VideoProvider";
import { BodyThemeSync } from "@/hooks/BodyThemeSync";
import AppProvider from "@/provider/AppProvider";
import { ThemeProvider } from "next-themes";
import Wrapper from "@/layouts/wrapper";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";

export const metadata: Metadata = {
  title: `${profile.displayName} | ${profile.title}`,
  description: profile.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="tp-magic-cursor">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          value={{
            light: "bfolio-light",
            dark: "bfolio-dark",
          }}
        >
          <BodyThemeSync />
          <AppProvider>
            <VideoProvider>
              <Wrapper>{children}</Wrapper>
            </VideoProvider>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
