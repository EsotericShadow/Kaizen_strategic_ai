import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Events Northern BC | Quarterly AI Workshops & Annual Summit | Terrace, BC',
  description: 'Quarterly AI informational events and workshops in Northern BC. Learn about AI applications, automation, and digital strategy. Annual AI & Technology Summit hosted by Northern Cascadia Institute.',
  keywords: [
    'AI events Northern BC',
    'AI workshops Northern BC',
    'AI summit Northern BC',
    'AI education Northern BC',
    'AI training Terrace BC',
    'AI business presentation',
  ].join(', '),
  alternates: {
    canonical: 'https://kaizenstrategic.ai/events',
  },
};

export default function EventsPage() {
  return (
    <>
      <header className="site-header d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 col-12 mb-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Homepage</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Events
                  </li>
                </ol>
              </nav>
              <h2 className="text-white">Events</h2>
              <p className="text-white">Educational workshops and informational events from Kaizen Strategic AI</p>
            </div>
          </div>
        </div>
      </header>

      <section className="topics-detail-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <div className="custom-block mb-5">
                <h3 className="mb-4">Quarterly Informational Events</h3>
                <p className="mb-4">
                  We host quarterly informational events similar to our October 23rd, 2025 AI & Business Presentation. Each event is slightly updated with new content, but follows the same practical format designed to help Northern BC businesses understand and implement AI solutions.
                </p>
                
                <div className="service-benefits-box mb-4">
                  <h5 className="mb-3">Event Format</h5>
                  <ul className="service-features-list">
                    <li><strong>AI Introduction:</strong> Demystifying AI for Northern BC businesses</li>
                    <li><strong>Local Context:</strong> AI opportunities specific to our region</li>
                    <li><strong>Practical Applications:</strong> Real-world AI use cases</li>
                    <li><strong>Implementation Roadmap:</strong> How to get started with AI</li>
                    <li><strong>Live Demonstrations:</strong> AI tools in action</li>
                    <li><strong>Q&A Session:</strong> Addressing specific business needs</li>
                    <li><strong>Networking:</strong> Business connections and follow-up opportunities</li>
                  </ul>
                </div>

                <div className="service-benefits-box">
                  <p><strong>Frequency:</strong> Quarterly (4 per year)</p>
                  <p><strong>Duration:</strong> 2-3 hours</p>
                  <p><strong>Cost:</strong> Free to attend</p>
                  <p><strong>Location:</strong> Terrace, BC and surrounding areas</p>
                  <p><strong>Target Audience:</strong> Local business owners and decision makers</p>
                  <p className="mb-0"><strong>Expected Attendance:</strong> 15-40 people per event</p>
                </div>
              </div>

              <div className="custom-block mb-5">
                <h3 className="mb-4">Future Workshops</h3>
                <p className="mb-4">
                  Additional hands-on workshops will be added in the future, providing more in-depth, practical training for businesses ready to implement AI solutions.
                </p>
                <p className="mb-0">Details coming soon.</p>
              </div>

              <div className="custom-block">
                <h3 className="mb-4">Get Notified</h3>
                <p className="mb-4">
                  Want to be notified about upcoming quarterly events and workshops? Contact us to join our events mailing list.
                </p>
                <div className="service-benefits-box">
                  <p className="mb-0">
                    <strong>Contact:</strong> <a href="mailto:info@kaizenstrategic.ai">info@kaizenstrategic.ai</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
