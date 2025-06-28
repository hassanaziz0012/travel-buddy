"use client";
import React from "react";

export default function Slider({ pause = false, children }: { pause?: boolean; children: React.ReactNode }) {
    const pauseClass = pause === true ? "[animation-play-state:paused]" : "[animation-play-state:running]"

    return (
        <div className="overflow-hidden text-nowrap group">
            <div className={`inline-block animate-slide ${pauseClass} group-hover:[animation-play-state:paused]`}>
                {children}
            </div>
            <div className={`inline-block animate-slide ${pauseClass} group-hover:[animation-play-state:paused]`}>
                {children}
            </div>
        </div>
    );
}
