import "@/app/globals.css";
// import { AdminProvider } from "@/lib/admin-context";
import { AuthProvider } from "@/lib/auth-context";

export const metadata = {
  title: "Admin Panel",
  description: "Administrative interface",
  robots: "noindex, nofollow",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
