import "./globals.css";

export const metadata = {
  title: "JNU Sayz",
  description: "JNU SoE online community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
