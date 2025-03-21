import React from "react";
import Container from "./Container";
import icons from "../icons";

export default function Superheader() {
    return (
        <div className="bg-yellow-300 py-3">
            <Container>
                <div className="flex items-center justify-between gap-x-6">
                    <div className="flex items-center gap-x-1">
                        {icons.currency}
                        United States Dollar (USD)
                    </div>
                    <div>
                        Get Free Shipping with code <span className="font-bold">FREESHIPPING</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <a href="#">Login</a>
                        <span>|</span>
                        <a href="#">Join Us</a>
                    </div>
                </div>
            </Container>
        </div>
    );
}
