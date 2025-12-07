"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { MapPin, Clock, Phone } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Location", details: "Kigali", sub: "Rwanda" },
  { icon: Clock, title: "Working Hours", details: "Mon to Fri: 9am to 6pm", sub: "Sat: 10am to 2pm" },
  { icon: Phone, title: "Phone", details: "+250 789137829", sub: "elyse@email.com" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    
    if (!formData.email.trim()) {
      setError("Please enter your email");
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return;
    }

    try {
      const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
      const newMessage = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      messages.push(newMessage);
      localStorage.setItem("contactMessages", JSON.stringify(messages));
      alert("Message saved successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to save message. Please try again.");
    }
  };
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section className="section">
          <div className="container mx-auto">
            <SectionTitle
              title="Contact"
              highlight="Me"
              subtitle="Have a question or want to work together? Feel free to reach out!"
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {contactInfo.map((info, idx) => (
                <div
                  key={info.title}
                  className="card p-6 border border-border hover:border-primary/50 transition"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted text-sm">{info.details}</p>
                  <p className="text-primary text-sm">{info.sub}</p>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto card border border-border overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 space-y-4">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded">
                        {error}
                      </div>
                    )}
                    <input 
                      type="text" 
                      placeholder="What's your Name?" 
                      className="contact-input" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="contact-input" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="contact-input resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                    <button type="submit" className="btn-primary w-full md:w-auto">
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="bg-secondary/40 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-muted text-sm uppercase tracking-widest mb-2">// Have any query?</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    CONTACT <span className="text-gradient">ME</span>
                  </h2>
                  <p className="text-muted">
                    I&apos;m always excited to collaborate on new projects and bring creative ideas to life. Whether you
                    have a question, a project proposal, or just want to say hello, I&apos;d love to hear from you.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-muted/20">Let&apos;s talk</h2>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}