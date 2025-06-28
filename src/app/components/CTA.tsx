import React from "react";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import PrimaryButton from "./PrimaryButton";
import icons from "../icons";

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-b from-yellow-200 to-yellow-300 from-60% relative isolate">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[url(/images/cta-2.jpg)] bg-cover bg-center mix-blend-multiply opacity-25 -z-10"></div>
            <Container>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                        <SectionHeading>
                            Join us for an{" "}
                            <span className="text-orange-600">
                                exciting adventure
                            </span>
                        </SectionHeading>

                        <p className="max-w-2xl mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus numquam, illum obcaecati, eum ipsa
                            suscipit alias iste, omnis sequi delectus tempora
                            perspiciatis dolorem vero sapiente praesentium autem
                            iure. Laborum, officiis.
                        </p>

                        <PrimaryButton>
                            <div className="flex items-center gap-x-2 fill-white">
                                Get Started
                                {icons.externalLink}
                            </div>
                        </PrimaryButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}
