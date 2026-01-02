"use client";

import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Sparkles, MessageCircle, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../config/Constants';

export const ContactSection = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        SERVICE_ID, 
        TEMPLATE_ID,  
        form.current,
        PUBLIC_KEY    
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Locations",
      details: ["Primary Location: Italy", "Development Center: Sri Lanka"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+39 328 712 7470", "+94 74 386 3721"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info.hexcoders@gmail.com"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FCDC00]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1A304F]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-[#FCDC00]/5 to-[#1A304F]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative lg:px-16 px-4 mx-auto">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FCDC00]/20 rounded-full mb-6">
            <Sparkles size={20} className="text-[#1A304F]" />
            <span className="text-[#1A304F] font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A304F] mb-6 leading-tight">
            Get In <span className="text-[#FCDC00] relative inline-block">
              Touch
              <svg className="absolute left-0 w-full h-3 -bottom-2" viewBox="0 0 100 12" fill="none">
                <path d="M2 10c20-3 40-3 96 0" stroke="#FCDC00" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
            Have a project in mind? We'd love to hear from you. Reach out to us
            and let's create something <span className="font-semibold text-[#1A304F]">amazing</span> together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative p-8 transition-all duration-500 border shadow-xl md:p-12 bg-white/80 backdrop-blur-sm rounded-3xl border-white/50 hover:shadow-2xl">
              <div className="absolute -top-6 left-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1A304F] text-white rounded-full shadow-lg">
                  <MessageCircle size={18} />
                  <span className="font-medium">Send Message</span>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2">
                  <div className="relative">
                    <label className="block mb-3 text-sm font-semibold tracking-wide text-gray-700 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder-gray-400 ${
                        focusedField === 'name' 
                          ? 'border-[#FCDC00] shadow-lg transform -translate-y-1' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="relative">
                    <label className="block mb-3 text-sm font-semibold tracking-wide text-gray-700 uppercase">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder-gray-400 ${
                        focusedField === 'email' 
                          ? 'border-[#FCDC00] shadow-lg transform -translate-y-1' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block mb-3 text-sm font-semibold tracking-wide text-gray-700 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder-gray-400 ${
                      focusedField === 'subject' 
                        ? 'border-[#FCDC00] shadow-lg transform -translate-y-1' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-8">
                  <label className="block mb-3 text-sm font-semibold tracking-wide text-gray-700 uppercase">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder-gray-400 resize-none ${
                      focusedField === 'message' 
                        ? 'border-[#FCDC00] shadow-lg transform -translate-y-1' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell us about your project and how we can help bring your vision to life..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative px-8 py-4 bg-linear-to-r from-[#1A304F] to-[#1A304F]/90 text-white rounded-2xl font-semibold hover:shadow-xl transform hover:-translate-y-1 hover:cursor-pointer transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-3"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-[#FCDC00] to-[#FCDC00]/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10 group-hover:text-[#1A304F] transition-colors duration-300">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <Send size={18} className="relative z-10 group-hover:text-[#1A304F] transition-colors duration-300" />
                  </button>

                  {isSent && (
                    <div className="flex items-center gap-2 px-4 py-2 text-green-700 bg-green-100 rounded-full animate-bounce">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Message sent successfully!</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="relative p-8 md:p-10 bg-linear-to-br from-[#1A304F] via-[#1A304F]/95 to-[#1A304F]/90 text-white rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FCDC00]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FCDC00]/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-[#FCDC00] rounded-2xl">
                      <Clock size={24} className="text-[#1A304F]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Contact Information</h3>
                      <p className="text-white/80">We're here to help 24/7</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="relative group">
                        <div className="flex items-start gap-6 p-6 transition-all duration-300 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 hover:bg-white/20 hover:transform hover:scale-105">
                          <div className={`p-4 bg-linear-to-r ${item.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                            <item.icon size={28} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#FCDC00] transition-colors duration-300">
                              {item.title}
                            </h4>
                            <div className="space-y-2">
                              {item.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="transition-colors duration-200 text-white/90 hover:text-white">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 p-6 bg-[#FCDC00]/20 rounded-2xl border border-[#FCDC00]/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-[#FCDC00]">Quick Response</span>
                    </div>
                    <p className="text-sm text-white/90">
                      We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};