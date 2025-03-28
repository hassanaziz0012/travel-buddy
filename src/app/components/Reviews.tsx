import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import SectionHeading from "./SectionHeading";
import Slider from "./Slider";

export default function Reviews() {
    const reviews = [
        {
            text: "Our trip to Italy was flawlessly planned, from breathtaking tours to seamless hotel stays. This agency made our dream vacation a reality!",
            name: "Jessica M.",
        },
        {
            text: "I can't thank this travel agency enough for organizing the perfect honeymoon for us in Bali. Every detail was handled with care, making it a truly stress-free experience.",
            name: "Daniel R.",
        },
        {
            text: "From booking flights to arranging guided city tours, everything was top-notch. I’ll definitely use their services again for my next adventure!",
            name: "Samantha T.",
        },
        {
            text: "The team went above and beyond to customize our family trip to Japan. We got insider recommendations that made our journey even more special!",
            name: "Michael L.",
        },
        {
            text: "I was blown away by how easy and enjoyable my trip to Greece was. Thanks to this agency, I experienced the best sights without the hassle of planning!",
            name: "Rachel P.",
        },
        {
            text: "From luxury resorts to off-the-beaten-path experiences, this agency curated the perfect Thailand getaway. I never knew travel could be this effortless!",
            name: "Alex W.",
        },
    ];

    const colors = [
        "bg-sky-300",
        "bg-emerald-300",
        "bg-orange-300",
        "bg-fuchsia-300",
    ];

    const getColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    };

    return (
        <section className="py-40 bg-orange-50">
            <Container>
                <HeadingLabel text="Reviews" />
                <SectionHeading>
                    Our Customers{" "}
                    <span className="text-orange-600">Love Us</span>
                </SectionHeading>
            </Container>

            <div className="mt-20 relative">
                <div className="absolute top-0 bottom-0 left-0 z-10 w-80 bg-gradient-to-r from-orange-50/75 to-transparent from-30%"></div>
                <Slider>
                    <div className="flex text-wrap">
                        {reviews.map((review, i) => (
                            <div
                                key={i}
                                className={`p-10 rounded-2xl ${getColor()} text-xl uppercase font-bold mx-6 min-w-80 basis-0 grow text-center nth-[even]:mt-20 nth-[odd]:mb-20`}
                            >
                                <p className="mb-4">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                                <hr className="my-6" />
                                <p>{review.name}</p>
                            </div>
                        ))}
                    </div>
                </Slider>
                <div className="absolute top-0 bottom-0 right-0 z-10 w-80 bg-gradient-to-l from-orange-50/75 to-transparent from-30%"></div>
            </div>
        </section>
    );
}
