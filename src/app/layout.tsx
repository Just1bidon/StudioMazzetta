import "@/ui/globals.css";
import NavBar from "./component/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
