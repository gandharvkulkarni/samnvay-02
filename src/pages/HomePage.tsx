import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import SamnvayWayToResolveDisputes from '../components/SamnvayWayToResolveDisputes';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Samnvay Way to Resolve Disputes Section */}
            <SamnvayWayToResolveDisputes />

            {/* Services Section */}
            <Services />

            {/* Contact Section */}
            <Contact />

        </div>
    )
}

export default HomePage