import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Head } from "./Head";
import { Hero } from "./Hero";

export function Layout() {
  return (
    <>
        <Head />
        <Hero>
            <Outlet />
        </Hero>
        <Footer />
  </>
  )
}
