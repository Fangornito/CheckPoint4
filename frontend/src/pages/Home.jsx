import { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carrousel";
import Tresor from "../components/Tresor";

export default function Home() {
  const [page, setPage] = useState("home");
  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && <Carousel />}
      {page === "tresor" && <Tresor />}
    </div>
  );
}
