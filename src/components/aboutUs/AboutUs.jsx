
import React from "react";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section
        className="about-hero d-flex align-items-center"
        style={{
          minHeight: "480px",
          marginTop: "76px",
          background:
            "linear-gradient(rgba(11, 29, 58, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85') center/cover",
        }}
      >
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-8">

              <span
                className="d-inline-block mb-3"
                style={{
                  color: "#38bdf8",
                  letterSpacing: "3px",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                ABOUT LANDMARK DEVELOPERS
              </span>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(42px, 6vw, 68px)",
                  lineHeight: "1.1",
                }}
              >
                Building Places.
                <br />
                <span style={{ color: "#38bdf8" }}>
                  Creating Possibilities.
                </span>
              </h1>

              <p
                className="lead"
                style={{
                  maxWidth: "650px",
                  color: "#e2e8f0",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                Landmark Developers is a real estate developer in Jabalpur,
                offering farmhouse plots, farmland, residential plots and land
                investment opportunities.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* ================= INTRODUCTION ================= */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            {/* Text */}
            <div className="col-lg-6">

              <span
                className="d-inline-block mb-3"
                style={{
                  color: "#0284c7",
                  letterSpacing: "3px",
                  fontSize: "10px",
                  fontWeight: "800",
                }}
              >
                WHO WE ARE
              </span>

              <h2
                className="fw-bold mb-4"
                style={{
                  color: "#0f172a",
                  fontSize: "clamp(34px, 4vw, 48px)",
                  lineHeight: "1.15",
                }}
              >
                Real Estate With
                <br />
                <span style={{ color: "#0284c7" }}>
                  Purpose.
                </span>
              </h2>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.9",
                  fontSize: "14px",
                }}
              >
                Landmark Developers specialises in farmhouse plots, farmland,
                residential plots and land investment opportunities across
                Jabalpur.
              </p>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.9",
                  fontSize: "14px",
                }}
              >
                We serve buyers across Tilwara, Bhedaghat, Barela Road,
                Mukunwara and nearby areas through projects including Prestige
                Farms, Fortune Farms and Padam Farms.
              </p>

              <p
                style={{
                  color: "#475569",
                  lineHeight: "1.9",
                  fontSize: "14px",
                }}
              >
                Our team helps customers evaluate location, plot size, road
                access, development features and available property
                documentation before making a decision. Whether you are
                looking for a weekend farmhouse plot, long-term land
                investment or a residential plot, contact us to explore current
                options and schedule a site visit.
              </p>

            </div>


            {/* Image */}
            <div className="col-lg-6">

              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85"
                  alt="Landmark Developers property"
                  className="img-fluid rounded-4 shadow"
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Floating Card */}
                <div
                  className="position-absolute bg-white rounded-4 shadow p-4"
                  style={{
                    left: "-25px",
                    bottom: "30px",
                    maxWidth: "230px",
                  }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "#e0f2fe",
                      color: "#0284c7",
                    }}
                  >
                    <i className="bi bi-house-heart fs-5"></i>
                  </div>

                  <h6
                    className="fw-bold mb-1"
                    style={{ color: "#332f22" }}
                  >
                    Find Your Place
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#71817b",
                      fontSize: "11px",
                      lineHeight: "1.6",
                    }}
                  >
                    Discover properties that fit your vision and
                    investment goals.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHAT WE DO ================= */}
      <section
        className="py-5 py-lg-6"
        style={{ background: "#f5f8f5" }}
      >
        <div className="container py-lg-5">

          <div className="text-center mb-5">

            <span
              style={{
                color: "#a27d00",
                letterSpacing: "3px",
                fontSize: "10px",
                fontWeight: "800",
              }}
            >
              WHAT WE DO
            </span>

            <h2
              className="fw-bold mt-3"
              style={{
                color: "#332f22",
                fontSize: "clamp(34px, 4vw, 48px)",
              }}
            >
              Everything You Need
              <br />
              <span style={{ color: "#a27d00" }}>
                Before You Decide.
              </span>
            </h2>

            <p
              className="mx-auto mt-3"
              style={{
                maxWidth: "650px",
                color: "#71817b",
                fontSize: "14px",
                lineHeight: "1.8",
              }}
            >
              We focus on making property discovery and the customer
              journey simple, informative and convenient.
            </p>

          </div>


          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">

              <div
                className="bg-white rounded-4 p-4 h-100 shadow-sm"
                style={{ border: "1px solid #e5ece7" }}
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "58px",
                    height: "58px",
                    background: "#fff4b8",
                    color: "#a27d00",
                  }}
                >
                  <i className="bi bi-buildings fs-4"></i>
                </div>

                <h4
                  className="fw-bold"
                  style={{ color: "#332f22" }}
                >
                  Property Projects
                </h4>

                <p
                  style={{
                    color: "#71817b",
                    fontSize: "13px",
                    lineHeight: "1.8",
                  }}
                >
                  Explore farm lands and residential plot projects
                  with information about their location, features,
                  connectivity and current status.
                </p>

              </div>

            </div>


            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">

              <div
                className="bg-white rounded-4 p-4 h-100 shadow-sm"
                style={{ border: "1px solid #e5ece7" }}
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "58px",
                    height: "58px",
                    background: "#fff4b8",
                    color: "#a27d00",
                  }}
                >
                  <i className="bi bi-geo-alt fs-4"></i>
                </div>

                <h4
                  className="fw-bold"
                  style={{ color: "#332f22" }}
                >
                  Site Visits
                </h4>

                <p
                  style={{
                    color: "#71817b",
                    fontSize: "13px",
                    lineHeight: "1.8",
                  }}
                >
                  Interested customers can schedule a site visit and
                  experience the location, surroundings, roads and
                  development firsthand.
                </p>

              </div>

            </div>


            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">

              <div
                className="bg-white rounded-4 p-4 h-100 shadow-sm"
                style={{ border: "1px solid #e5ece7" }}
              >

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "58px",
                    height: "58px",
                    background: "#fff4b8",
                    color: "#a27d00",
                  }}
                >
                  <i className="bi bi-headset fs-4"></i>
                </div>

                <h4
                  className="fw-bold"
                  style={{ color: "#332f22" }}
                >
                  Customer Support
                </h4>

                <p
                  style={{
                    color: "#71817b",
                    fontSize: "13px",
                    lineHeight: "1.8",
                  }}
                >
                  From the first enquiry to site visits and follow-ups,
                  customers can stay connected with the Landmark
                  Developers team.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= OUR APPROACH ================= */}
      <section className="py-5 py-lg-6 bg-white">
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <span
                style={{
                  color: "#a27d00",
                  letterSpacing: "3px",
                  fontSize: "10px",
                  fontWeight: "800",
                }}
              >
                OUR APPROACH
              </span>

              <h2
                className="fw-bold mt-3"
                style={{
                  color: "#332f22",
                  fontSize: "clamp(34px, 4vw, 48px)",
                  lineHeight: "1.15",
                }}
              >
                Simple.
                <br />
                Transparent.
                <br />
                <span style={{ color: "#a27d00" }}>
                  Customer Focused.
                </span>
              </h2>

              <p
                className="mt-4"
                style={{
                  color: "#71817b",
                  lineHeight: "1.8",
                  fontSize: "14px",
                }}
              >
                Property decisions become easier when customers have
                the right information at the right time. Our approach
                is built around making that process straightforward.
              </p>

            </div>


            <div className="col-lg-7">

              <div className="row g-4">

                {/* Step 1 */}
                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div
                      className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#a27d00",
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      01
                    </div>

                    <div>
                      <h5
                        className="fw-bold"
                        style={{ color: "#332f22" }}
                      >
                        Discover
                      </h5>

                      <p
                        style={{
                          color: "#71817b",
                          fontSize: "12px",
                          lineHeight: "1.7",
                        }}
                      >
                        Explore available projects and find
                        properties based on your requirements.
                      </p>
                    </div>

                  </div>

                </div>


                {/* Step 2 */}
                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div
                      className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#a27d00",
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      02
                    </div>

                    <div>
                      <h5
                        className="fw-bold"
                        style={{ color: "#332f22" }}
                      >
                        Understand
                      </h5>

                      <p
                        style={{
                          color: "#71817b",
                          fontSize: "12px",
                          lineHeight: "1.7",
                        }}
                      >
                        Review project details, images, location,
                        features and connectivity.
                      </p>
                    </div>

                  </div>

                </div>


                {/* Step 3 */}
                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div
                      className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#a27d00",
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      03
                    </div>

                    <div>
                      <h5
                        className="fw-bold"
                        style={{ color: "#332f22" }}
                      >
                        Connect
                      </h5>

                      <p
                        style={{
                          color: "#71817b",
                          fontSize: "12px",
                          lineHeight: "1.7",
                        }}
                      >
                        Send an enquiry, contact our team or
                        schedule a site visit.
                      </p>
                    </div>

                  </div>

                </div>


                {/* Step 4 */}
                <div className="col-md-6">

                  <div className="d-flex gap-3">

                    <div
                      className="rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#a27d00",
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      04
                    </div>

                    <div>
                      <h5
                        className="fw-bold"
                        style={{ color: "#332f22" }}
                      >
                        Move Forward
                      </h5>

                      <p
                        style={{
                          color: "#71817b",
                          fontSize: "12px",
                          lineHeight: "1.7",
                        }}
                      >
                        Get the support and information you need
                        for the next step.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= LOCATIONS ================= */}
      <section
        className="py-5 py-lg-6"
        style={{ background: "#f5f8f5" }}
      >
        <div className="container py-lg-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div
                className="position-relative overflow-hidden rounded-4"
                style={{ height: "400px" }}
              >

                <img
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85"
                  alt="Landmark location"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />

                <div
                  className="position-absolute bottom-0 start-0 end-0 p-4"
                  style={{
                    background:
                      "linear-gradient(transparent, rgba(0,0,0,0.75))",
                  }}
                >
                  <span className="text-white small">
                    EXPLORE OUR LOCATIONS
                  </span>
                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <span
                style={{
                  color: "#a27d00",
                  letterSpacing: "3px",
                  fontSize: "10px",
                  fontWeight: "800",
                }}
              >
                WHERE WE OPERATE
              </span>

              <h2
                className="fw-bold mt-3"
                style={{
                  color: "#332f22",
                  fontSize: "clamp(34px, 4vw, 48px)",
                  lineHeight: "1.15",
                }}
              >
                Growing Across
                <br />
                <span style={{ color: "#a27d00" }}>
                  Central India.
                </span>
              </h2>

              <p
                className="mt-4"
                style={{
                  color: "#71817b",
                  lineHeight: "1.8",
                  fontSize: "14px",
                }}
              >
                We help buyers explore farmhouse plots, farmland, residential
                plots and land investment opportunities across Tilwara,
                Bhedaghat, Barela Road, Mukunwara and nearby areas of Jabalpur.
              </p>


              <div className="row mt-4 g-3">

                <div className="col-sm-8">

                  <a
                    href="https://www.google.com/maps/place/Landmark+Developers/@23.1622155,79.9225679,18z/data=!4m6!3m5!1s0x3981af2591e2c3f3:0x181acb63dcbc13ec!8m2!3d23.1622155!4d79.9225679!16s%2Fg%2F11wpy6_vj2?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-3 p-3 d-flex align-items-center justify-content-between text-decoration-none shadow-sm"
                    style={{ border: "1px solid #e1e9e3" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "42px", height: "42px", background: "#fff4b8", color: "#a27d00" }}
                      >
                        <i className="bi bi-geo-alt-fill fs-5"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0" style={{ color: "#332f22" }}>
                          Jabalpur Head Office
                        </h6>
                        <small style={{ color: "#7b8984" }}>
                          Madhya Pradesh • View on Google Maps
                        </small>
                      </div>
                    </div>
                    <i className="bi bi-arrow-up-right fs-5" style={{ color: "#a27d00" }}></i>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section
        className="py-5 py-lg-6"
        style={{
          background:
            "linear-gradient(135deg, #332f22, #a27d00)",
        }}
      >
        <div className="container py-lg-4">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span
                style={{
                  color: "#ffe984",
                  letterSpacing: "3px",
                  fontSize: "10px",
                  fontWeight: "800",
                }}
              >
                START YOUR PROPERTY JOURNEY
              </span>

              <h2
                className="text-white fw-bold mt-3 mb-3"
                style={{
                  fontSize: "clamp(34px, 4vw, 50px)",
                  lineHeight: "1.15",
                }}
              >
                Have a Property
                <br />
                <span style={{ color: "#ffdc00" }}>
                  in Mind?
                </span>
              </h2>

              <p
                className="mb-0"
                style={{
                  color: "#d4e5dc",
                  fontSize: "14px",
                  maxWidth: "600px",
                  lineHeight: "1.8",
                }}
              >
                Explore our projects, ask us a question or schedule
                a site visit. Our team is here to help you take the
                next step.
              </p>

            </div>


            <div className="col-lg-4 mt-4 mt-lg-0">

              <div className="d-flex flex-column gap-3">

                <a
                  href="/projects"
                  className="btn rounded-pill py-3 px-4 fw-semibold"
                  style={{
                    background: "white",
                    color: "#a27d00",
                  }}
                >
                  Explore Projects
                  <i className="bi bi-arrow-up-right ms-2"></i>
                </a>

                <a
                  href="/contact"
                  className="btn rounded-pill py-3 px-4 fw-semibold"
                  style={{
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.4)",
                  }}
                >
                  <i className="bi bi-chat-dots me-2"></i>
                  Talk to Us
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
