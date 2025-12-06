import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Sumedh Culinary | Chef Portfolio & Indian Coastal Cuisine",
  description:
    "Chef Sumedh Mhatre specializes in Indian coastal cuisine, menu development, food styling, workshops, and home-cooked meal services. Explore his culinary journey, services, and signature dishes.",
  keywords: [
    "Chef Sumedh Mhatre",
    "Sumedh Mhatre",
    "Chef in panvel",
    "Indian Chef",
    "Coastal Cuisine",
    "Malvani Food",
    "Menu Development",
    "Food Styling",
    "Culinary Workshops",
    "Home Cooked Meals",
    "Chef Portfolio",
    "Private Chef India",
  ],
  metadataBase: new URL("https://sumedh-portfolio-gamma.vercel.app"),
  authors: [{ name: "Sumedh Mhatre" }],
  openGraph: {
    title: "Sumedh Culinary | Premium Chef Portfolio",
    description:
      "Explore the culinary artistry of Chef Sumedh Mhatre — specializing in coastal Indian cuisine, food styling, menu development, and workshops.",
    url: "",
    siteName: "Sumedh Culinary",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Sumedh Culinary - Chef Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumedh Culinary | Chef Portfolio",
    description:
      "Discover the work of Chef Sumedh Mhatre — Indian coastal cuisine, food styling, workshops & more.",
    images: ["/logo2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
