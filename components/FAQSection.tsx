'use client';

export default function FAQSection() {
  return (
    <section className="faq-section section-padding" id="faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="clearfix"></div>

          <div className="col-lg-8 col-12 mx-auto">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Kaizen Strategic AI?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Kaizen Strategic AI is a Northern BC-based digital strategy consultancy specializing in 
                    AI-first solutions that amplify human potential. We help businesses evolve through intelligent 
                    systems, process optimization, and strategic automation. Our mission is moving the North 
                    forward through Digital Strategy.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does your process work?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our process follows three phases: <strong>Discovery & Planning</strong> (we assess your 
                    current state and design a strategic roadmap), <strong>Implementation & Integration</strong> 
                    (we refine existing systems and integrate new solutions), and <strong>Optimization & Growth</strong> 
                    (we continuously monitor and improve for maximum value). Every project is customized to your 
                    specific needs.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What size businesses do you work with?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We work with businesses of all sizes. Our primary focus is on growing businesses (5-50 employees) 
                    in Northern BC, but we also serve smaller businesses (1-5 employees) and larger organizations (50+). 
                    We tailor our approach to match your size, budget, and needs.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Do you work with businesses outside Northern BC?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    While our geographic focus is Northern BC (Terrace, Kitimat, Prince Rupert, Smithers), 
                    we work with businesses across Canada and can accommodate remote engagements. Our local 
                    expertise gives us unique insights, but we&apos;re happy to work with clients wherever they are.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What kind of results can I expect?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Typical results include <strong>10-20 hours/month time savings</strong> per client, 
                    <strong>15-30% process efficiency improvements</strong>, <strong>50%+ reduction in manual errors</strong>, 
                    and <strong>10-25% client revenue increase</strong>. We focus on measurable outcomes 
                    and ROI-driven solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

