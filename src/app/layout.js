import "./globals.css";
import Navbar from "../components/Navbar"; // Vérifie bien le chemin vers ton composant
import Footer from "../components/Footer"; // Importe aussi le footer pour la cohérence

export const metadata = {
  title: "KenStyle | Styliste Modéliste à Dakar",
  description: "L'élégance sur mesure et le savoir-faire de la haute couture sénégalaise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
