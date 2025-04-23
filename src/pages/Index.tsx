
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/ui/HeroSection";
import FeatureCard from "@/components/ui/FeatureCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import EventCard from "@/components/ui/EventCard";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    title: "Easy Event Creation",
    description:
      "Create beautiful events in minutes with our intuitive step-by-step wizard.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Real-time Analytics",
    description:
      "Get detailed insights into your event performance with real-time RSVP analytics.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Scheduling Made Simple",
    description:
      "Our intelligent calendar makes scheduling events and managing conflicts effortless.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Smart Invitations",
    description:
      "Send beautiful invitations and track responses across email and social platforms.",
  },
];

const testimonials = [
  {
    quote: "SESSI has transformed how we organize our school events. The platform is intuitive and has saved us countless hours.",
    author: "Priya Sharma",
    role: "Principal, Delhi Public School",
    avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote: "The analytics provided by SESSI helped us understand our engagement patterns and improve attendance by 35%.",
    author: "Rajesh Kumar",
    role: "Event Coordinator, IIT Mumbai",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Our college festivals are now easier than ever to organize with SESSI's comprehensive management tools.",
    author: "Ananya Patel",
    role: "Student Council President, St. Xavier's College",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Science Exhibition 2025",
    date: "May 15, 2025 • 10:00 AM",
    location: "Delhi Convention Center",
    imageUrl: "https://source.unsplash.com/random/600x400/?science",
    attendees: 250,
    status: "upcoming" as const,
  },
  {
    id: "2",
    title: "Educational Leadership Summit",
    date: "June 5, 2025 • 9:00 AM",
    location: "Taj Vivanta, Mumbai",
    imageUrl: "https://source.unsplash.com/random/600x400/?conference",
    attendees: 120,
    status: "upcoming" as const,
  },
  {
    id: "3",
    title: "National Coding Competition",
    date: "April 25, 2025 • 2:00 PM",
    location: "Virtual Event",
    imageUrl: "https://source.unsplash.com/random/600x400/?coding",
    attendees: 350,
    status: "upcoming" as const,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to create successful events
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools you need to plan, organize, and manage events efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How SESSI works
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our platform streamlines the entire event management process from creation to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Create your event</h3>
              <p className="text-gray-600">
                Use our intuitive wizard to set up your event details, schedule, venue, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Send invitations</h3>
              <p className="text-gray-600">
                Share beautiful invitations via email or social media platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Track & manage</h3>
              <p className="text-gray-600">
                Monitor RSVPs, analyze attendance, and manage all aspects of your event.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/create-event">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Upcoming Events
            </h2>
            <Button asChild variant="outline">
              <Link to="/timeline">View All Events</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What our users say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join hundreds of educational institutions already using SESSI to streamline their event management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your event management?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join 500+ educational institutions already using SESSI to create successful events.
            </p>
            <Button asChild
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100"
              size="lg"
            >
              <Link to="/create-event">Start Creating Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
