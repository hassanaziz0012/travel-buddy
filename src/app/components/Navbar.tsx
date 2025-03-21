import React from "react";
import Container from "./Container";
import icons from "../icons";

export default function Navbar() {
    return (
        <Container>
            <nav className="flex items-center justify-between gap-x-6 py-6">
                <div>
                    <a href="#" className="text-2xl font-semibold">Travel<span className="text-orange-600">Buddy</span></a>
                </div>

                <div className="flex items-center gap-x-4">
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
                    <button className="bg-orange-600 hover:bg-orange-500 duration-300 cursor-pointer text-white rounded-lg px-4 py-2 text-lg font-semibold">Book Flight</button>
                </div>
            </nav>
        </Container>
    );
}
