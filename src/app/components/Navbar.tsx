"use client";
import React, { useState } from "react";
import Container from "./Container";
import icons from "../icons";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(!active);
    }

    return (
        <Container>
            <nav className="flex items-center justify-between gap-6 py-6 flex-wrap">

                <div className="flex items-center gap-x-2">
                    <button className="hover:cursor-pointer md:hidden" onClick={toggleNav}>
                        {icons.menu}
                    </button>
                    <a href="#" className="text-2xl font-semibold">Travel<span className="text-orange-600">Buddy</span></a>
                </div>

                <div className={`${active ? "flex" : "hidden"} flex-col md:flex-row items-center gap-4 order-3 grow w-full mt-4 xl:order-[revert] xl:mt-0 xl:w-auto xl:grow-0 md:flex`}>
                    <a href="#">Destinations</a>
                    <a href="#">Travel Packages</a>
                    <a href="#">Flights & Hotels</a>
                    <a href="#">Travel Guides</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="flex items-center gap-x-6">
                    <button className="hover:cursor-pointer">{icons.search}</button>
                    <button className="hover:cursor-pointer">{icons.heart}</button>
                    <PrimaryButton>
                        Book Flight
                    </PrimaryButton>
                </div>
            </nav>
        </Container>
    );
}
