import Benefits from "./components/Benefits";
import FeaturedDestinations from "./components/FeaturedDestinations";
import Hero from "./components/Hero";
import MoreOffers from "./components/MoreOffers";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Superheader from "./components/Superheader";

export default function Home() {
    return (
        <div className="">
            <Superheader />
            <Navbar />
            <Hero />
            <Benefits />
            <FeaturedDestinations />
            <Offers />
            <MoreOffers />
        </div>
    );
}
