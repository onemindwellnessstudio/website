import "./globals.css";

export const metadata = {
  title:"David Light | Beyond Anxious Thoughts - Consciousness-Based Coaching for Lasting Peace",
  description: ".",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
