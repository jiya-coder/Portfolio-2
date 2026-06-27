"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeading from "@/components/SectionHeading";
import Toast from "@/components/UI/Toast";
import { profile } from "@/data/profile";

const socials = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [toast, setToast] = useState<{
    visible: boolean;
    type: "success" | "error";
    message: string;
  }>({ visible: false, type: "success", message: "" });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ visible: true, type, message });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 4000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        // EmailJS not configured yet — see .env.example
        throw new Error("EmailJS is not configured.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey }
      );

      setStatus("sent");
      showToast("success", "Message sent — I'll get back to you soon!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      showToast(
        "error",
        "Couldn't send right now — email me directly instead."
      );
    } finally {
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Got a project, an opportunity, or just want to talk shop? My inbox is open."
          align="center"
        />

        <div className="mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-10">
          {/* Left: info */}
          <div className="space-y-6">
            <div className="glass-light rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-violet/15 flex items-center justify-center">
                  <MapPin size={18} className="text-violet-light" />
                </div>
                <div>
                  <p className="text-xs text-slate">Based in</p>
                  <p className="text-ink font-medium">{profile.location}</p>
                </div>
              </div>
              <div className="h-px bg-edge my-4" />
              <div className="space-y-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-pointer
                      className="flex items-center gap-3 text-slate hover:text-violet-light transition-colors group"
                    >
                      <div className="h-9 w-9 rounded-lg bg-edge/60 flex items-center justify-center group-hover:bg-violet/15 transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm font-medium">{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <p className="text-sm text-slate-dim leading-relaxed px-2">
              Prefer email? Reach me directly at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-violet-light hover:underline"
              >
                {profile.email}
              </a>
              .
            </p>
          </div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-light rounded-2xl p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl bg-panel-2 border border-edge px-4 py-3 text-ink placeholder:text-slate-dim focus:outline-none focus:border-violet-light/60 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-xl bg-panel-2 border border-edge px-4 py-3 text-ink placeholder:text-slate-dim focus:outline-none focus:border-violet-light/60 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a bit about what you have in mind..."
                className="w-full rounded-xl bg-panel-2 border border-edge px-4 py-3 text-ink placeholder:text-slate-dim focus:outline-none focus:border-violet-light/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor-pointer
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-thread-gradient px-6 py-3.5 font-medium text-white shadow-[0_0_30px_rgba(108,92,231,0.35)] hover:shadow-[0_0_45px_rgba(108,92,231,0.5)] transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
      />
    </section>
  );
}
