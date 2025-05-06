import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Authentication Callback",
  description: "Processing your authentication...",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function AuthCallbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
