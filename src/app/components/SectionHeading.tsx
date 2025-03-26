import React from "react";

export default function SectionHeading({
    children,
}: {
    children: React.ReactNode;
}) {
    return <h2 className="text-4xl font-semibold my-6">{children}</h2>;
}
