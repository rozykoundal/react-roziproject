function OurServices() {
  const services = [
    {
      title: "Airlines Booking",
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      )
    },
    {
      title: "Hotel Bookings",
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          <rect x="6" y="14" width="2" height="4"/>
          <rect x="8" y="12" width="2" height="6"/>
          <rect x="10" y="14" width="2" height="4"/>
          <rect x="12" y="10" width="2" height="8"/>
          <rect x="14" y="14" width="2" height="4"/>
          <rect x="16" y="12" width="2" height="6"/>
          <circle cx="11" cy="6" r="1.5"/>
        </svg>
      )
    },
    {
      title: "Beach Bookings",
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(15deg)' }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Food Serve",
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <circle cx="12" cy="8" r="2"/>
          <path d="M12 10v12"/>
          <path d="M8 14h8"/>
          <path d="M10 18h4"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Our Services
        </h2>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-4">
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-black text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
