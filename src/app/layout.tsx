import Footer from "@/components/Footer";
import "./globals.scss";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header isNotHome={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
