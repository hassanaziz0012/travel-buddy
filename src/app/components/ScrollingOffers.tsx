import React from "react";
import icons from "../icons";
import Container from "./Container";

export default function ScrollingOffers() {
    const offers = [
        {
            text: "Easy Booking",
            link: "",
            icon: icons.plane2,
        },
        {
            text: "Explore More",
            link: "",
            icon: icons.globe,
        },
        {
            text: "Best Destinations",
            link: "",
            icon: icons.map,
        },
        {
            text: "Hassle-Free Travel",
            link: "",
            icon: icons.car,
        },
        {
            text: "Memorable Adventures",
            link: "",
            icon: icons.instagram,
        },
    ];

    return (
        <section className="bg-sky-600 text-white py-6">
            <Container>
                <div className="overflow-hidden text-nowrap group">
                    <div className="inline-block animate-slide group-hover:[animation-play-state:paused]">
                        <div className="flex items-center">
                            {offers.map((offer, i) => (
                                <div key={i} className="flex items-center gap-x-2 uppercase text-2xl font-semibold px-6">
                                    <div>{offer.icon}</div>
                                    <div>
                                        <a href={offer.link}>{offer.text}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="inline-block animate-slide group-hover:[animation-play-state:paused]">
                        <div className="flex items-center">
                            {offers.map((offer, i) => (
                                <div key={i} className="flex items-center gap-x-2 uppercase text-2xl font-semibold px-6">
                                    <div>{offer.icon}</div>
                                    <div>
                                        <a href={offer.link}>{offer.text}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
