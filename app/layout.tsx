import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard", // Template for page titles
    // The default title will be used if no specific page title is set
    // This allows for dynamic titles while maintaining a consistent format
    // For example, if a page sets its title to "Invoices", the full title will
    // be "Invoices | Acme Dashboard"
    // If no title is set, it will fall back to the default
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"), // Base URL for the metadata
};
// The %s in the template will be replaced with the specific page title.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>{children}</body>
    </html>
  );
}
