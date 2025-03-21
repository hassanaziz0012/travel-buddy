import React from "react";
import Container from "./Container";
import icons from "../icons";

export default function Hero() {
    return (
        <section className="bg-[url('/images/hero-bg.jpg')] py-20 bg-center bg-cover relative isolate">
            <Container>
                <div className="flex flex-col justify-between gap-y-24">
                    <div>
                        <h1 className="text-8xl font-bold text-white uppercase max-w-xl mb-12">
                            Discover your next destination
                        </h1>

                        <div>
                            <button className="px-8 py-3 rounded-lg bg-white hover:bg-slate-200 duration-300 hover:cursor-pointer text-black font-bold text-lg uppercase flex items-end gap-x-2">
                                <span>Plan Your Trip</span>
                                <span className="fill-orange-600">{icons.externalLink}</span>
                            </button>
                        </div>
                    </div>

                    <div className="text-white text-xl font-semibold max-w-md">
                        <p>Explore stunning destinations, plan exciting adventures, and make unforgettable memories.</p>
                    </div>
                </div>
            </Container>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-[#00000088]/30 to-[#ffffff44]/0 -z-10"></div>
        </section>
    );
}
