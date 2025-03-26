import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import WhiteExternalButton from "./WhiteExternalButton";
import SectionHeading from "./SectionHeading";

export default function Offers() {
    return (
        <section className="py-40 bg-orange-50">
            <Container>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <HeadingLabel text="Offers" />
                        <SectionHeading>
                            Save on{" "}
                            <span className="text-orange-600">resorts</span> or{" "}
                            <span className="text-orange-600">villas</span>
                        </SectionHeading>

                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi nam velit alias doloremque, provident,
                            ratione omnis accusantium distinctio cum minus iste.
                            Minima quasi ipsam voluptate eos harum voluptatem
                            vel vero?
                        </p>

                        <WhiteExternalButton text="Explore More" bordered />
                    </div>
                    <div className="relative">
                        <img
                            src="/images/offers-1.jpg"
                            alt=""
                            className="rounded-lg"
                        />
                        <div className="absolute -bottom-12 left-6 right-6 p-5 bg-white shadow-lg rounded-lg text-gray-600">
                            <p className="italic mb-4">
                                &ldquo;Ocean Breeze Resort was the perfect getaway! The
                                stunning ocean views, luxurious amenities, and
                                exceptional service made every moment
                                unforgettable. I can&apos;t wait to return for
                                another relaxing escape!&rdquo;
                            </p>
                            <p>
                                Sarah M.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
