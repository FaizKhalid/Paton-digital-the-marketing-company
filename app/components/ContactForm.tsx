"use client";
import Script from "next/script";
export default function ContactForm() {
  return (
    <section id="contact" className="py-12 bg-gray text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <iframe
          src="https://forms.monday.com/forms/embed/78de22f13c5668c19bddc8104b6f494b?r=apse2"
          width="650"
          height="500"
          style={{
            border: "0",
            boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)",
          }}
        ></iframe>
      </div>
      <div className="w-full flex justify-center">
        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/faizkhalid1111/30min"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>

        {/* Calendly Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
