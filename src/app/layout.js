import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "IMDb with next13",
    description: "Create simple IMDb with next13",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {/* Header */}
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
