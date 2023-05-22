import Footer from "@/components/Footer";
import "./globals.scss";
import Header from "@/components/Header";

export const metadata = {
  title: "Code Gyaan - Home",
  description:
    "Welcome to Code Gyaan, your ultimate destination for coding and programming tutorials.",
};

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
