"use client";

import React from "react";
import Container from "./container";
import Link from "next/link";
import Language from "../common/language";
import { Button } from "../ui";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  return (
    <div>
      <Container className=" flex items-center justify-between py-4">
        <Link
          href={"/"}
          className=" font-public-sans font-bold text-3xl text-main-color-600"
        >
          Education System
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Link
            className=" font-public-sans font-normal text-base"
            href={"tel:(90) 417-47-56"}
          >
            (90) 417-47-56
          </Link>
          <Language />
          <Button onClick={() => router.push("/log-in")} text="Log In" />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
