import '../styles/globals.css';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export const metadata = {
  title: 'Woo Commerce Store',
  description: 'An accessories and jewellery based store.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top promotional banner placeholder */}
        <div className="bg-red-600 text-white text-center py-2 text-sm">
          Flat 15% OFF On All Prepaid Orders! BLACK FRIDAY SALE IS LIVE NOW.
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
