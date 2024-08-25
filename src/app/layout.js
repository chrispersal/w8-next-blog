import { Karla } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Nextblog",
  description: "The future and past of posting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={karla.className}
        class="h-screen w-screen flex justify-center items-center"
      >
        <header>
          <nav className="naviBar">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
