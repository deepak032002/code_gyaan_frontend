import Footer from "@/components/Footer";
import "./globals.scss";
import Header from "@/components/Header";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header isNotHome={true} />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
