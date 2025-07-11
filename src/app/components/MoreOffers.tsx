import React from "react";
import Container from "./Container";
import icons from "../icons";

export default function MoreOffers() {
    return (
        <section className="py-20">
            <Container>
                <div className="flex flex-wrap gap-6">
                    <div className="basis-0 grow-[2] min-w-64 sm:min-w-102 rounded-xl p-5 bg-sky-200 flex gap-x-6 max-h-80 overflow-hidden">
                        <div className="basis-0 grow">
                            <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center">
                                {icons.discount}
                            </div>

                            <h3 className="text-2xl font-semibold uppercase my-6">
                                Let&apos;s travel the world
                            </h3>

                            <button className="px-6 py-3 rounded-xl font-semibold uppercase border flex items-center gap-x-2 bg-transparent hover:bg-white hover:cursor-pointer duration-300">
                                <span>Book Now</span>
                                <span>{icons.externalLink}</span>
                            </button>
                        </div>
                        <div className="basis-0 grow hidden sm:block">
                            <img src="/images/offer-2.jpg" alt="" />
                        </div>
                    </div>

                    <div className="basis-0 grow min-w-64 sm:min-w-102 rounded-xl p-5 bg-orange-200 flex gap-x-6 max-h-80 overflow-hidden">
                        <div className="basis-0 grow">
                            <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center">
                                {icons.discount}
                            </div>

                            <h3 className="text-2xl font-semibold uppercase my-6">
                                Let&apos;s travel the world
                            </h3>

                            <button className="px-6 py-3 rounded-xl font-semibold uppercase border flex items-center gap-x-2 bg-transparent hover:bg-white hover:cursor-pointer duration-300">
                                <span>Book Now</span>
                                <span>{icons.externalLink}</span>
                            </button>
                        </div>
                        <div className="basis-0 grow justify-center items-center hidden sm:flex">
                            <img src="/images/offer-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
