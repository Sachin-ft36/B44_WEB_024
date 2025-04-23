
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EventCard from "@/components/ui/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const allEvents = [
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
  {
    id: "4",
    title: "Education Technology Expo",
    date: "July 10, 2025 • 11:00 AM",
    location: "Bangalore Exhibition Center",
    imageUrl: "https://source.unsplash.com/random/600x400/?technology",
    attendees: 500,
    status: "upcoming" as const,
  },
  {
    id: "5",
    title: "Literature Festival 2025",
    date: "Currently ongoing",
    location: "Jaipur University Campus",
    imageUrl: "https://source.unsplash.com/random/600x400/?books",
    attendees: 180,
    status: "ongoing" as const,
  },
  {
    id: "6",
    title: "Robotics Workshop Series",
    date: "Currently ongoing",
    location: "IIT Delhi",
    imageUrl: "https://source.unsplash.com/random/600x400/?robot",
    attendees: 75,
    status: "ongoing" as const,
  },
  {
    id: "7",
    title: "Winter Sports Tournament 2024",
    date: "February 15, 2024",
    location: "Shimla Indoor Stadium",
    imageUrl: "https://source.unsplash.com/random/600x400/?winter",
    attendees: 400,
    status: "completed" as const,
  },
  {
    id: "8",
    title: "Annual Cultural Fest 2024",
    date: "March 20, 2024",
    location: "St. Xavier's College, Mumbai",
    imageUrl: "https://source.unsplash.com/random/600x400/?festival",
    attendees: 1200,
    status: "completed" as const,
  },
];

const Timeline = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = (status: "upcoming" | "ongoing" | "completed") => {
    return allEvents
      .filter((event) => event.status === status)
      .filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Event Timeline</h1>
        <div className="w-full md:max-w-sm">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents("upcoming").length > 0 ? (
              filteredEvents("upcoming").map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-600">No upcoming events found.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="ongoing">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents("ongoing").length > 0 ? (
              filteredEvents("ongoing").map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-600">No ongoing events found.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents("completed").length > 0 ? (
              filteredEvents("completed").map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-600">No past events found.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Timeline;
