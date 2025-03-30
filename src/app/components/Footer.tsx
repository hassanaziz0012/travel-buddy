import React from "react";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import icons from "../icons";

export default function Footer() {
    return (
        <footer className="py-40 bg-slate-900 text-white">
            <Container>
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-2">
                        <p className="text-2xl font-semibold mb-6">
                            Travel<span className="text-orange-600">Buddy</span>
                        </p>
                        <p className="text-slate-300 mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Doloribus deserunt nostrum cumque at eos a
                            incidunt ipsum soluta, ipsa amet.
                        </p>

                        <div className="flex items-center gap-x-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="px-4 py-2 rounded-lg border border-slate-400"
                                placeholder="Enter your email"
                            />
                            <PrimaryButton>Subscribe</PrimaryButton>
                        </div>

                        <div className="flex items-center gap-x-4 mt-8">
                            <a
                                href="#"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biFacebook}
                            </a>
                            <a
                                href="#"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biTwitter}
                            </a>
                            <a
                                href="#"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biInstagram}
                            </a>
                            <a
                                href="#"
                                className="fill-white hover:fill-orange-600 duration-300"
                            >
                                {icons.biYoutube}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">
                            Quick Links
                        </h4>

                        <ul className="text-slate-300 flex flex-col gap-y-4">
                            <li>
                                <a href="#">Destinations</a>
                            </li>
                            <li>
                                <a href="#">Tours & Packages</a>
                            </li>
                            <li>
                                <a href="#">Travel Guides</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6">
                            Customer Support
                        </h4>

                        <ul className="text-slate-300 flex flex-col gap-y-4">
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Booking Policy</a>
                            </li>
                            <li>
                                <a href="#">Cancellation Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-16 border-slate-700" />

                <div className="flex items-center justify-between gap-6 text-slate-300">
                    <div>Designed by, <a href="https://www.hassandev.me" className="text-orange-600">Hassan Aziz</a></div>
                    <div>Copyright &copy; 2025, All Rights Reserved</div>
                    <div>
                        <button className="flex items-center hover:cursor-pointer">
                            <span className="fill-slate-300">{icons.doubleArrowUp}</span>
                            <span>Back To Top</span>
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
