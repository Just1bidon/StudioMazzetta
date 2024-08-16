import "@/ui/globals.css";
import NavBar from "./component/Navbar";
import { amiko, amita } from "@/app/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={amiko.className}>
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
