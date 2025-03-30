import React from "react";
import Container from "./Container";
import icons from "../icons";
import HeadingLabel from "./HeadingLabel";
import Benefit from "./Benefit";
import SectionHeading from "./SectionHeading";

export default function Benefits() {
    const benefits_g1 = [
        {
            icon: "/images/badge.png",
            header: "Best Price Guarantee",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolorum? Repellat debitis nobis deserunt quo.",
        },
        {
            icon: "/images/booking.png",
            header: "Hassle-Free Booking",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolorum? Repellat debitis nobis deserunt quo.",
        },
    ];
    const benefits_g2 = [
        {
            icon: "/images/customer-service.png",
            header: "24/7 Customer Support",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolorum? Repellat debitis nobis deserunt quo.",
        },
        {
            icon: "/images/deal.png",
            header: "Exclusive Travel Deals",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, dolorum? Repellat debitis nobis deserunt quo.",
        },
    ];

    return (
        <section className="py-40">
            <Container>
                <div className="flex flex-col items-center gap-y-6">
                    <HeadingLabel text="Benefits" />

                    <SectionHeading>
                        Why you&apos;ll love travelling with Travel
                        <span className="text-orange-600">Buddy</span>
                    </SectionHeading>
                </div>

                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="flex flex-col gap-y-16">
                            {benefits_g1.map((benefit, i) => (
                                <Benefit key={i} {...benefit} />
                            ))}
                        </div>
                        <div className="flex justify-center items-start">
                            <img
                                src="/images/benefits.jpg"
                                alt=""
                                className="rounded-md w-full min-w-72 max-w-80"
                            />
                        </div>
                        <div className="flex flex-col gap-y-16">
                            {benefits_g2.map((benefit, i) => (
                                <Benefit key={i} {...benefit} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
