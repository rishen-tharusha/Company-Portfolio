"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../config/Constants";

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe", required: true },
  { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com", required: true },
  { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry", required: false },
] as const;

const CONTACT_INFO = [
  { icon: MapPin, title: "Our Locations", details: ["Primary Location: Italy", "Development Center: Sri Lanka"] },
  { icon: Phone, title: "Call Us", details: ["+39 328 712 7470", "+94 74 386 3721"] },
  { icon: Mail, title: "Email Us", details: ["info.hexcoders@gmail.com"] },
];

const hexClip = "[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]";

const inputClass =
  "w-full rounded-2xl border-2 border-gray-200 bg-white/50 px-6 py-4 placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:border-gray-300 focus:-translate-y-1 focus:border-[#FCDC00] focus:shadow-lg focus:outline-none";

export const ContactSection = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus("idle");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        setLoading(false);
        form.current?.reset();
      },
      (error) => {
        console.error("Failed to send message:", error);
        setStatus("error");
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-linear-to-b from-gray-50 via-white to-gray-100 py-20 sm:py-28">
      {/* Hex grid backdrop, consistent with the rest of the page */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-[#1A304F] opacity-[0.04]">
        <defs>
          <pattern id="hex-grid-contact" width="49.6" height="43.4" patternUnits="userSpaceOnUse">
            <polygon
              points="24.8,0 49.6,14.4 49.6,28.9 24.8,43.4 0,28.9 0,14.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid-contact)" />
      </svg>

      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#FCDC00]/10 blur-3xl motion-safe:animate-pulse" />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#1A304F]/10 blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCDC00]/30 bg-[#FCDC00]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#1A304F]">
            <Sparkles className="h-3.5 w-3.5 text-[#FCDC00]" aria-hidden />
            Let's Connect
          </span>

          <h2 className="mt-6 text-3xl font-bold text-[#1A304F] sm:text-4xl lg:text-5xl">
            Get In{" "}
            <span className="relative whitespace-nowrap text-[#FCDC00]">
              Touch
              <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-[#FCDC00]/40">
                <path d="M0 8 Q50 0 100 6 T200 4" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#FCDC00] to-yellow-300" />

          <p className="mt-6 leading-relaxed text-gray-600 sm:text-lg">
            Have a project in mind? We'd love to hear from you — let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-12">
              <div className="absolute -top-5 left-6 flex items-center gap-2 rounded-full bg-[#1A304F] px-4 py-2 text-white shadow-lg sm:-top-6">
                <MessageCircle size={18} />
                <span className="font-medium">Send Message</span>
              </div>

              <form ref={form} onSubmit={sendEmail} className="mt-8 sm:mt-6">
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {FIELDS.slice(0, 2).map(({ name, label, type, placeholder, required }) => (
                    <div key={name}>
                      <label htmlFor={name} className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-700">
                        {label}
                      </label>
                      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={inputClass} />
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <label htmlFor="subject" className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-700">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" placeholder="Project Inquiry" className={inputClass} />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project and how we can help bring your vision to life..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative flex items-center cursor-pointer gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-[#1A304F] to-[#1A304F]/90 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <div className="absolute inset-0 translate-y-full bg-linear-to-r from-[#FCDC00] to-[#FCDC00]/80 transition-transform duration-300 group-hover:translate-y-0" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1A304F]">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <Send size={18} className="relative z-10 transition-colors duration-300 group-hover:text-[#1A304F]" />
                  </button>

                  <div aria-live="polite">
                    {status === "success" && (
                      <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Message sent successfully!</span>
                      </div>
                    )}
                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-700">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="text-sm font-medium">Something went wrong — please try again.</span>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#1A304F] via-[#1A304F]/95 to-[#1A304F]/90 p-6 text-white shadow-xl sm:p-8 md:p-10 lg:sticky lg:top-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FCDC00]/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#FCDC00]/20 blur-2xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3">
                  <div className="rounded-2xl bg-[#FCDC00] p-3">
                    <Clock size={24} className="text-[#1A304F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">Contact Information</h3>
                    <p className="text-white/80">We're here to help 24/7</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {CONTACT_INFO.map(({ icon: Icon, title, details }) => (
                    <div
                      key={title}
                      className="group flex items-start gap-5 rounded-2xl border border-white/20 bg-white/10 p-5 transition-all duration-300 hover:bg-white/20"
                    >
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center bg-white/10 text-[#FCDC00] ${hexClip}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#FCDC00]">
                          {title}
                        </h4>
                        <div className="space-y-1">
                          {details.map((detail) => (
                            <p key={detail} className="text-sm text-white/90">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#FCDC00]/30 bg-[#FCDC00]/20 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 motion-safe:animate-pulse" />
                    <span className="font-semibold text-[#FCDC00]">Quick Response</span>
                  </div>
                  <p className="text-sm text-white/90">
                    We typically respond within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};