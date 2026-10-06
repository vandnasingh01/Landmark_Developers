import React, { useState } from "react";
import "./home.css";

const projects = [
  {
    name: "Vistara Farms",
    location: "Jabalpur, Madhya Pradesh",
    type: "Farm Land",
    status: "Ongoing",
    size: "100 - 500 Sq. Yd.",
    image:
      "/farm_land.avif",
    description:
      "Premium farm land surrounded by greenery with excellent connectivity and modern development.",
  },
  {
    name: "Green Valley",
    location: "Jabalpur, Madhya Pradesh",
    type: "Residential Plot",
    status: "Ongoing",
    size: "600 - 1500 Sq. Ft.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Well-planned residential plots designed for comfortable living and future investment.",
  },
  {
    name: "Hill View Residency",
    location: "Jabalpur, Madhya Pradesh",
    type: "Residential Plot",
    status: "Upcoming",
    size: "1000 - 3000 Sq. Ft.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    description:
      "A peaceful plotted development offering nature, connectivity and modern infrastructure.",
  },
];

// Editable Awards & Recognition Data Structure
// Easily replace award titles, organization names, years, or images when provided by client.
const awardsData = [
  {
    id: 1,
    title: "Excellence in Development",
    category: "Industry Recognition",
    year: "",
    organization: "",
    image: "",
    iconBadge: "bi bi-trophy-fill",
    iconFeature: "bi bi-patch-check-fill",
    description:
      "Recognized for quality plot planning, infrastructure standards, and customer satisfaction.",
  },
  {
    id: 2,
    title: "Trusted Real Estate Partner",
    category: "Milestone Achievement",
    year: "",
    organization: "",
    image: "",
    iconBadge: "bi bi-award-fill",
    iconFeature: "bi bi-shield-check",
    description:
      "Honored for transparent documentation, client trust, and ethical business practices in Jabalpur.",
  },
  {
    id: 3,
    title: "Prime Land Developments",
    category: "Excellence Award",
    year: "",
    organization: "",
    image: "",
    iconBadge: "bi bi-star-fill",
    iconFeature: "bi bi-geo-alt-fill",
    description:
      "Acknowledged for delivering premium farmland and residential plotted communities in strategic locations.",
  },
  {
    id: 4,
    title: "Customer Choice & Leadership",
    category: "Client Honor",
    year: "",
    organization: "",
    image: "",
    iconBadge: "bi bi-ribbon-fill",
    iconFeature: "bi bi-people-fill",
    description:
      "Commended for exceptional client service, transparent guidance, and dedicated site tour assistance.",
  },
];

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "Farm Land / Farmhouse Plots",
    budget: "₹25 Lakh - ₹50 Lakh",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      phone: "",
      propertyType: "Farm Land / Farmhouse Plots",
      budget: "₹25 Lakh - ₹50 Lakh",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="landmark-home">




      {/* ================= HERO ================= */}
      <section id="home" className="hero-section">

        <div className="hero-overlay"></div>

        <div className="container hero-content">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <div className="hero-tag">
                <span></span>
                FARM LANDS
              </div>

              <h1>
                Build Your Future
                <br />
                <span>with Landmark Developers</span>
              </h1>

              <p className="hero-description">
                Discover premium farm lands and residential plots
                in Jabalpur designed for a better lifestyle
                and smarter investment.
              </p>


              <div id="homeProjectCarousel" className="carousel slide hero-project-carousel" data-bs-ride="carousel" data-bs-interval="4500">
                <div className="carousel-indicators">
                  {projects.map((project, index) => <button key={project.name} type="button" data-bs-target="#homeProjectCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`} />)}
                </div>
                <div className="carousel-inner">
                  {projects.map((project, index) => (
                    <div className={`carousel-item${index === 0 ? " active" : ""}`} key={project.name}>
                      <img src={project.image} className="d-block w-100" alt={project.name} />
                      <div className="carousel-caption text-start">
                        <span>{project.type}</span>
                        <h3>{project.name}</h3>
                        <p>{project.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeProjectCarousel" data-bs-slide="prev" aria-label="Previous project">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeProjectCarousel" data-bs-slide="next" aria-label="Next project">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                </button>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-scroll">
          <i className="bi bi-arrow-down"></i>
          Scroll to explore
        </div>

      </section>


      {/* ================= PROJECTS & GALLERY ================= */}
      <div id="gallery"></div>
      <section id="projects" className="projects-section section-padding">

        <div className="container">

          <div className="section-heading d-flex justify-content-between align-items-end mb-5">

            <div>
              <span className="section-label">
                OUR PROJECTS
              </span>

              <h2>
                Find a Place
                <br />
                <span>Worth Calling Your Own.</span>
              </h2>

              <p>
                Explore our carefully planned farm lands and
                residential developments across Jabalpur.
              </p>
            </div>

            <a href="/projects" className="view-all d-none d-md-block">
              View All Projects
              <i className="bi bi-arrow-right ms-2"></i>
            </a>

          </div>


          <div className="row g-4">

            {projects.map((project, index) => (

              <div className="col-lg-4 col-md-6" key={index}>

                <div className="project-card">

                  <div className="project-image">

                    <img
                      src={project.image}
                      alt={project.name}
                    />

                    <span
                      className={`status-badge ${project.status === "Upcoming"
                        ? "upcoming"
                        : ""
                        }`}
                    >
                      {project.status}
                    </span>

                    <button className="image-heart">
                      <i className="bi bi-heart"></i>
                    </button>

                  </div>


                  <div className="project-body">

                    <div className="project-location">
                      <i className="bi bi-geo-alt-fill"></i>
                      {project.location}
                    </div>

                    <h3>{project.name}</h3>

                    <p>
                      {project.description}
                    </p>


                    <div className="project-meta">

                      <span>
                        <i className="bi bi-rulers"></i>
                        {project.size}
                      </span>

                      <span>
                        <i className="bi bi-house"></i>
                        {project.type}
                      </span>

                    </div>


                    <div className="project-footer">

                      <span className="view-label">
                        Explore Project
                      </span>

                      <a href="/projects" className="project-arrow">
                        <i className="bi bi-arrow-up-right"></i>
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= TRUST STRIP ================= */}
      <section className="trust-section">

        <div className="container">

          <div className="row g-0">

            <div className="col-lg-3 col-md-6">
              <div className="trust-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h6>Prime Locations</h6>
                  <small>Jabalpur, Madhya Pradesh</small>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="trust-item">
                <i className="bi bi-shield-check"></i>
                <div>
                  <h6>Trusted & Transparent</h6>
                  <small>Safe Investment</small>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="trust-item">
                <i className="bi bi-people"></i>
                <div>
                  <h6>Expert Guidance</h6>
                  <small>From Our Team</small>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-6">
              <div className="trust-item">
                <i className="bi bi-calendar-check"></i>
                <div>
                  <h6>Easy Site Visits</h6>
                  <small>Plan Your Visit</small>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section section-padding">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="section-label">
                ABOUT US
              </span>

              <h2>
                Your Trusted Real Estate
                <br />
                <span>Partner in Jabalpur.</span>
              </h2>

              <p className="about-text">
                Landmark Developers is a real estate developer serving
                customers in Jabalpur, specializing in farmhouse plots,
                farmland, residential plots, and land investment opportunities.
              </p>

              <p className="about-text">
                Our team helps customers evaluate location, plot size, road
                access, development features, and available property
                documentation before making a decision.
              </p>

              <p className="about-text">
                Explore Prestige Farms, Fortune Farms, and Padam Farms across
                Tilwara, Bhedaghat, Barela Road, Mukunwara, and nearby areas.
                Whether you are looking for a weekend farmhouse plot, long-term
                land investment, or a residential plot, contact us to explore
                current options and schedule a site visit.
              </p>


              <div className="about-features">

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Farmhouse Plots
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Farmland
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Residential Plots
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Land Investment
                </div>

              </div>


              <a href="/about" className="btn landmark-btn mt-4">
                Explore Projects &amp; Schedule a Site Visit
                <i className="bi bi-arrow-up-right ms-2"></i>
              </a>

            </div>


            <div className="col-lg-6">

              <div className="about-visual">

                <img
                  src="/WhatsApp%20Image%202026-09-28%20at%2012.43.06%20PM%20(2).jpeg"
                  alt="Landmark Developers owners at their office"
                />

                <div className="experience-card">
                  <span>
                    Prestige Farms<br />
                    Fortune Farms<br />
                    Padam Farms
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= AWARDS & RECOGNITION ================= */}
      <div id="awards"></div>
      <section id="testimonials" className="journey-section section-padding">

        <div className="container">

          <div className="text-center section-heading">

            <span className="section-label">
              AWARDS &amp; RECOGNITION
            </span>

            <h2>
              Recognized for <span>Excellence</span>
            </h2>

            <p>
              Celebrating milestones, achievements and recognition that reflect our commitment to excellence in real estate.
            </p>

          </div>


          <div className="row journey-row g-4">
            {awardsData.map((award) => (
              <div className="col-lg-3 col-md-6" key={award.id}>
                <div className="journey-card award-card">
                  {award.image ? (
                    <img src={award.image} alt={award.title} className="award-image-img mb-3" />
                  ) : (
                    <div className="journey-number award-badge">
                      <i className={award.iconBadge}></i>
                    </div>
                  )}

                  <div className="journey-icon award-icon">
                    <i className={award.iconFeature}></i>
                  </div>

                  <h4>{award.title}</h4>

                  {award.organization && <span className="award-org">{award.organization}</span>}
                  {award.year && <span className="award-year-chip">{award.year}</span>}

                  <span className="award-tag">{award.category}</span>

                  <p>{award.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>


      {/* ================= SITE VISIT CTA ================= */}
      <section className="visit-section">

        <div className="visit-overlay"></div>

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="section-label light">
                EXPERIENCE IT YOURSELF
              </span>

              <h2>
                Sometimes the best way
                <br />
                to understand a place is
                <span> to visit it.</span>
              </h2>

              <p>
                Schedule a site visit and explore the location,
                surroundings, connectivity and development firsthand.
              </p>

            </div>


            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

              <button className="btn visit-btn">
                Schedule a Site Visit
                <i className="bi bi-arrow-up-right ms-2"></i>
              </button>

              <div className="mt-3">

                <a href="tel:+917566666400" className="call-link">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Talk to an Expert
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ANNOUNCEMENTS ================= */}
      <section id="updates" className="updates-section section-padding">

        <div className="container">

          <div className="row align-items-end mb-5">

            <div className="col-md-8">

              <span className="section-label">
                LATEST UPDATES
              </span>

              <h2>
                What's Happening
                <br />
                <span>at Landmark.</span>
              </h2>

            </div>

            <div className="col-md-4 text-md-end">
              <a href="/announcements" className="view-all">
                View All Updates
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>

          </div>


          <div className="row g-4">

            <div className="col-lg-4">

              <div className="update-card">

                <div className="update-icon">
                  <i className="bi bi-megaphone"></i>
                </div>

                <small>PROJECT UPDATE</small>

                <h4>
                  New project coming soon in Jabalpur
                </h4>

                <a href="#contact-enquiry">
                  Read More
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>

            </div>


            <div className="col-lg-4">

              <div className="update-card">

                <div className="update-icon">
                  <i className="bi bi-calendar-event"></i>
                </div>

                <small>SITE VISIT</small>

                <h4>
                  Weekend site visit slots are now available
                </h4>

                <a href="#contact-enquiry">
                  Read More
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>

            </div>


            <div className="col-lg-4">

              <div className="update-card">

                <div className="update-icon">
                  <i className="bi bi-tree"></i>
                </div>

                <small>DEVELOPMENT</small>

                <h4>
                  Development work progressing at Vistara Farms
                </h4>

                <a href="#contact-enquiry">
                  Read More
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT CTA ================= */}
      <section id="contact" className="contact-section">

        <div className="container">

          <div className="contact-box">

            <div className="row align-items-center">

              <div className="col-lg-7">

                <span className="section-label light">
                  LET'S TALK
                </span>

                <h2>
                  Looking for the
                  <br />
                  <span>right property?</span>
                </h2>

                <p>
                  Tell us what you're looking for and our team
                  will help you find the right project.
                </p>

              </div>


              <div className="col-lg-5">

                <div className="contact-actions">

                  <a href="#enquiry-form" className="btn contact-main-btn">
                    Enquire Now
                    <i className="bi bi-arrow-up-right ms-2"></i>
                  </a>

                  <a
                    href="https://wa.me/917566666400?text=Hello%20Landmark%20Developers%2C%20I%20am%20interested%20in%20your%20projects."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    <i className="bi bi-whatsapp"></i>
                    WhatsApp Us
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* ================= OFFICE DETAILS & ENQUIRY FORM ================= */}
          <div id="contact-enquiry" className="office-location-wrapper">

            <div className="location-section-header text-center mx-auto mb-4">
              <span className="location-section-badge">
                <i className="bi bi-chat-dots-fill me-2"></i>
                CONTACT & ENQUIRY
              </span>
              <h2 className="location-title mt-2">
                Connect with Landmark <span>Developers</span>
              </h2>
              <p className="location-subtitle mx-auto">
                Reach out to our team for farmland plots, residential projects, legal documentation,
                or drop by our corporate office in Jabalpur.
              </p>
            </div>

            <div className="location-card-container">
              <div className="row g-0 align-items-stretch">

                {/* Left: Office Information Pane */}
                <div className="col-lg-5">
                  <div className="office-info-pane d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                        <div className="office-status-pill">
                          <span className="pulse-dot"></span>
                          <span>Office Open for Visitors</span>
                        </div>
                        <span className="office-city-tag">Jabalpur, MP</span>
                      </div>

                      <h3 className="office-name mb-1">Landmark Developers</h3>
                      <p className="office-tagline">Corporate Headquarters & Consultation Lounge</p>

                      <div className="office-info-list">
                        <div className="office-info-item">
                          <div className="office-info-icon">
                            <i className="bi bi-geo-alt-fill"></i>
                          </div>
                          <div>
                            <h6>Office Address</h6>
                            <p>A2, Landmark Developers 1285, Naagal House, Wright Town, Jabalpur, Madhya Pradesh 482002</p>
                            <small>Centrally situated with convenient highway connectivity</small>
                          </div>
                        </div>

                        {/* <div className="office-info-item">
                          <div className="office-info-icon">
                            <i className="bi bi-clock-fill"></i>
                          </div>
                          <div>
                            <h6>Visiting Hours</h6>
                            <p>Monday – Saturday: 10:00 AM – 7:30 PM</p>
                            <small>Sunday: Available for Site Visits (By Appointment)</small>
                          </div>
                        </div> */}

                        <div className="office-info-item">
                          <div className="office-info-icon">
                            <i className="bi bi-telephone-fill"></i>
                          </div>
                          <div>
                            <h6>Direct Lines</h6>
                            <p>
                              <a href="tel:+917566666400" className="contact-link">+91 7566666400</a>

                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Amenities / Highlights */}
                      <div className="office-amenities mt-3 mb-4">
                        <span className="amenity-chip"><i className="bi bi-p-square me-1"></i> Free Parking</span>
                        <span className="amenity-chip"><i className="bi bi-cup-hot me-1"></i> Client Lounge</span>
                        <span className="amenity-chip"><i className="bi bi-file-earmark-text me-1"></i> Registry Desk</span>
                        <span className="amenity-chip"><i className="bi bi-compass me-1"></i> Site Tour Pickup</span>
                      </div>
                    </div>

                    <div className="office-actions-bar pt-3">
                      <div className="d-flex flex-wrap gap-2">
                        <a
                          href="tel:+917566666400"
                          className="btn btn-call-office flex-grow-1"
                          title="Call Office"
                        >
                          <i className="bi bi-telephone-fill me-2"></i>
                          Call Office Directly
                        </a>
                        <a
                          href="https://wa.me/917566666400?text=Hello%20Landmark%20Developers%2C%20I%20am%20interested%20in%20your%20projects."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-directions"
                          title="WhatsApp Us"
                        >
                          <i className="bi bi-whatsapp me-2"></i>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Contact CTA Pane */}
                <div id="enquiry-form" className="col-lg-7">
                  <div className="enquiry-form-pane d-flex flex-column justify-content-center h-100 p-4 p-md-5">
                    <div className="enquiry-form-header mb-4">
                      <span className="enquiry-badge mb-2">
                        <i className="bi bi-chat-heart-fill me-1"></i>
                        LET'S CONNECT
                      </span>
                      <h3 className="enquiry-title fs-2 fw-bold mt-2">Let’s Connect with Landmark</h3>
                      <p className="enquiry-desc fs-6 text-secondary mt-2" style={{ lineHeight: "1.7" }}>
                        Explore our projects, get assistance with property details, or schedule a site visit with our team.
                      </p>
                    </div>

                    <div className="d-flex flex-column gap-3 mt-2">
                      {/* Action 1: Call Us */}
                      <a
                        href="tel:+917566666400"
                        className="contact-cta-card d-flex align-items-center justify-content-between p-3 rounded-4 border text-decoration-none"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="cta-icon-box rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", minWidth: "48px" }}>
                            <i className="bi bi-telephone-fill fs-5"></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1 text-dark">Call Us Directly</h6>
                            <small className="text-muted">+91 7566666400 • Instant Consultation</small>
                          </div>
                        </div>
                        <i className="bi bi-arrow-right-short fs-3 text-primary"></i>
                      </a>

                      {/* Action 2: WhatsApp Us */}
                      <a
                        href="https://wa.me/917566666400?text=Hello%20Landmark%20Developers%2C%20I%20am%20interested%20in%20your%20projects."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-cta-card d-flex align-items-center justify-content-between p-3 rounded-4 border text-decoration-none"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="cta-icon-box rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", minWidth: "48px" }}>
                            <i className="bi bi-whatsapp fs-5"></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1 text-dark">Chat on WhatsApp</h6>
                            <small className="text-muted">Get layout plans &amp; instant replies</small>
                          </div>
                        </div>
                        <i className="bi bi-arrow-right-short fs-3 text-success"></i>
                      </a>

                      {/* Action 3: Schedule a Site Visit */}
                      <a
                        href="https://wa.me/917566666400?text=Hello%20Landmark%20Developers%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-cta-card primary-cta d-flex align-items-center justify-content-between p-3 rounded-4 border text-decoration-none"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div className="cta-icon-box rounded-circle bg-white text-primary d-flex align-items-center justify-content-center" style={{ width: "48px", height: "48px", minWidth: "48px" }}>
                            <i className="bi bi-calendar-check-fill fs-5"></i>
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1 text-white">Schedule a Site Visit</h6>
                            <small style={{ color: "#e0f2fe" }}>Site tour pickup available in Jabalpur</small>
                          </div>
                        </div>
                        <i className="bi bi-arrow-right-short fs-3 text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ================= GOOGLE MAP SHOWCASE (BELOW FORM & DETAILS) ================= */}
          <div id="office-location" className="map-showcase-section">

            <div className="location-section-header text-center mx-auto mb-4">
              <span className="location-section-badge">
                <i className="bi bi-geo-alt-fill me-2"></i>
                GOOGLE MAP LOCATION
              </span>
              <h2 className="location-title mt-2">
                Locate Landmark Developers <span>in Jabalpur</span>
              </h2>
              <p className="location-subtitle mx-auto">
                Visit our headquarters on Google Maps. Centrally situated in Jabalpur with dedicated parking
                and direct arterial road connectivity.
              </p>
            </div>

            <div className="map-showcase-card">
              {/* Map Top Bar */}
              <div className="map-showcase-topbar d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="map-showcase-marker">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h5 className="map-showcase-title">Landmark Developers Corporate Office</h5>
                    <p className="map-showcase-sub">Jabalpur, Madhya Pradesh 482001 • Open for Consultations</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <a
                    href="https://www.google.com/maps/place/Landmark+Developers/@23.1622155,79.9225679,18z/data=!4m6!3m5!1s0x3981af2591e2c3f3:0x181acb63dcbc13ec!8m2!3d23.1622155!4d79.9225679!16s%2Fg%2F11wpy6_vj2?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-nav-btn primary"
                  >
                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                    Get Driving Directions
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Landmark+Developers/@23.1622155,79.9225679,18z/data=!4m6!3m5!1s0x3981af2591e2c3f3:0x181acb63dcbc13ec!8m2!3d23.1622155!4d79.9225679!16s%2Fg%2F11wpy6_vj2?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-nav-btn secondary"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                    Open Full Map
                  </a>
                </div>
              </div>

              {/* Panoramic Map Frame */}
              <div className="panoramic-map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1834.109366758031!2d79.92256790399553!3d23.162215545516577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981af2591e2c3f3%3A0x181acb63dcbc13ec!2sLandmark%20Developers!5e0!3m2!1sen!2sin!4v1790847061602!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, minHeight: "440px", display: "block", width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Landmark Developers Office Location"
                ></iframe>
              </div>

              {/* Map Bottom Bar */}
              <div className="map-showcase-bottombar d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div className="map-coordinates">
                  <i className="bi bi-crosshair"></i>
                  <span>23.1622° N, 79.9226° E • Jabalpur, MP</span>
                </div>

                <div className="map-highlights">
                  <span className="map-highlight-item">
                    <i className="bi bi-check-circle-fill"></i> Free Parking
                  </span>
                  <span className="map-highlight-item">
                    <i className="bi bi-check-circle-fill"></i> Highway Connected
                  </span>
                  <span className="map-highlight-item">
                    <i className="bi bi-check-circle-fill"></i> Site Tour Pickup
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="container">

          <div className="row g-5">

            <div className="col-lg-4">

              <div className="footer-brand">
                <img src="/landmark_logo.jpeg" alt="Landmark Developers" />
              </div>

              <p>
                Creating opportunities, better lifestyles and
                a stronger tomorrow through thoughtfully
                developed real estate.
              </p>

              <div className="social-links">

                <a href="https://www.facebook.com/LandmarkDeveloperjbp/">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="https://www.instagram.com/landmarkdevelopersofficial/">
                  <i className="bi bi-instagram"></i>
                </a>


                <a
                  href="https://wa.me/917566666400?text=Hello%20Landmark%20Developers%2C%20I%20am%20interested%20in%20your%20projects."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>

              </div>

            </div>


            <div className="col-6 col-lg-2">

              <h5>Explore</h5>

              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#about">About Us</a>
              <a href="#gallery">Gallery</a>

            </div>


            <div className="col-6 col-lg-2">

              <h5>Quick Links</h5>

              <a href="#updates">Announcements</a>
              <a href="#contact">Contact</a>
              <a href="#office-location">Our Office Location</a>
              <a href="#contact-enquiry">Site Visit</a>
              <a href="#enquiry-form">Enquiry</a>

            </div>


            <div className="col-lg-4">

              <h5>Get In Touch</h5>

              <div className="footer-contact">

                <div>
                  <a
                    href="https://www.google.com/maps/place/Landmark+Developers/@23.1622155,79.9225679,18z/data=!4m6!3m5!1s0x3981af2591e2c3f3:0x181acb63dcbc13ec!8m2!3d23.1622155!4d79.9225679!16s%2Fg%2F11wpy6_vj2?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none d-flex gap-2 align-items-start"
                    style={{ color: "inherit" }}
                  >
                    <i className="bi bi-geo-alt"></i>
                    <span>
                      Jabalpur,
                      <br />
                      Madhya Pradesh
                      <br />
                      <small style={{ color: "#38bdf8", textDecoration: "underline" }}>View on Google Maps →</small>
                    </span>
                  </a>
                </div>

                <div>
                  <i className="bi bi-telephone"></i>
                  <a href="tel:+917566666400" style={{ color: "inherit", textDecoration: "none" }}>+91 7566666400</a>
                </div>

              </div>

            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © 2026 Landmark Developers. All Rights Reserved.
            </span>

            <div>
              <a href="#home">Privacy Policy</a>
              <a href="#home">Terms & Conditions</a>
            </div>

          </div>

        </div>

      </footer>


      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/917566666400?text=Hello%20Landmark%20Developers%2C%20I%20am%20interested%20in%20your%20projects."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

    </div>
  );
}

export default Home;
