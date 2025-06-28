import React from "react";
import icons from "../icons";
import Container from "./Container";
import Slider from "./Slider";

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
                <Slider>
                    <div className="flex items-center">
                        {offers.map((offer, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-x-2 uppercase text-[clamp(1.125rem,0.938rem+0.625vw,1.5rem)] font-semibold px-6"
                            >
                                <div>{offer.icon}</div>
                                <div>
                                    <a href={offer.link}>{offer.text}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Slider>
            </Container>
        </section>
    );
}
