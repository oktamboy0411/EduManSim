import Container from "@/components/layout/container";
import { Button } from "@/components/ui";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div className=" relative">
      <Image
        src={"/images/home-bg.jpg"}
        alt="bg-img"
        width={"2000"}
        height={"2000"}
        className=" w-full h-screen"
      />
      <div className=" absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col ">
        <div className=" w-full h-full flex items-center justify-center flex-col gap-7">
          <p className=" font-public-sans font-bold text-6xl text-white text-center">
            A simple management system <br /> for education
          </p>
          <Button text="Request a demo" className=" px-36" />
        </div>
        <Container className=" border-t-2 border-line-color py-4">
          <p className=" font-public-sans font-normal text-xl text-white text-center">
            © 2024 edumansim.uz  All rights reserved
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Home;
