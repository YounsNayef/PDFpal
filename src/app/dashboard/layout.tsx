import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your PDF AI Assistant Dashboard",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
