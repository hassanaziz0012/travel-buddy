import Benefits from "./components/Benefits";
import FeaturedDestinations from "./components/FeaturedDestinations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Superheader from "./components/Superheader";

export default function Home() {
    return (
        <div className="">
            <Superheader />
            <Navbar />
            <Hero />
            <Benefits />
            <FeaturedDestinations />
        </div>
    );
}
