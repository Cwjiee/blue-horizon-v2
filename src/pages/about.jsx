import Navbar from "@/components/navbar";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";

export default function About() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return !isloading ? (
    <>
      <Navbar>About</Navbar>
      <div></div>
    </>
  ) : (
    <div className="w-full h-[100vh] flex justify-center item-center">
      <HashLoader
        color="#1c48bc"
        size={150}
        cssOverride={{ display: "block", margin: "auto" }}
      />
    </div>
  );
}
