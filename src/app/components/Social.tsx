import React from "react";
import Container from "./Container";
import HeadingLabel from "./HeadingLabel";
import SectionHeading from "./SectionHeading";
import icons from "../icons";
import WhiteExternalButton from "./WhiteExternalButton";

export default function Social() {
    const posts = [
        {
            image: "/images/social-1.jpg",
            location: "USA",
        },
        {
            image: "/images/social-2.jpg",
            location: "Canada",
        },
        {
            image: "/images/social-3.jpg",
            location: "Asia",
        },
        {
            image: "/images/social-4.jpg",
            location: "Dubai",
        },
    ];

    return (
        <section className="py-40 bg-orange-50">
            <Container>
                <HeadingLabel text="Social" />
                <SectionHeading>
                    Follow Our <span className="text-orange-600">Travels</span>
                </SectionHeading>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-20 mt-20">
                    {posts.map((post, i) => (
                        <div key={i} className="basis-0 grow min-w-64 max-w-128">
                            <div className="relative h-full overflow-hidden rounded-2xl group">
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-80 duration-300 z-10">
                                    <WhiteExternalButton text="Explore More" bordered />
                                </div>
                                <img
                                    src={post.image}
                                    alt=""
                                    className="h-full object-cover object-center group-hover:scale-115 duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-semibold flex items-center gap-x-4 my-3">
                                <span>{icons.instagram}</span>
                                <span>@{post.location}</span>
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
