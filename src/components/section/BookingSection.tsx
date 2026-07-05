"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  FiUser,
  FiPhone,
  FiCalendar,
  FiClock,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";
import { MdSpa } from "react-icons/md";
import { services } from "@/data/services";
import { business } from "@/data/business";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BookingForm {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  consent: boolean;
}

const EMPTY: BookingForm = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
  consent: false,
};

// Available time slots
const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM",  "3:00 PM",  "4:00 PM",
  "5:00 PM",  "6:00 PM",  "7:00 PM",
  "8:00 PM",  "9:00 PM",
];

// ─── Build WhatsApp message ───────────────────────────────────────────────────
function buildWhatsAppMessage(form: BookingForm): string {
  const lines = [
    "🌸 *New Appointment Request — NailsbySweta26*",
    "",
    `👤 *Name:* ${form.name}`,
    `📱 *Phone:* ${form.phone}`,
    `💅 *Service:* ${form.service}`,
    `📅 *Date:* ${form.date}`,
    `🕐 *Time:* ${form.time}`,
    form.message ? `💬 *Note:* ${form.message}` : "",
    "",
    "─────────────────────",
    "✅ Customer has given consent for this booking request.",
    `Sent via NailsbySweta26 website on ${new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`,
  ].filter((l) => l !== undefined);

  return lines.join("\n");
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(form: BookingForm): Partial<Record<keyof BookingForm, string>> {
  const errors: Partial<Record<keyof BookingForm, string>> = {};
  if (!form.name.trim()) errors.name = "Please enter your name";
  if (!form.phone.trim()) errors.phone = "Please enter your phone number";
  else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
    errors.phone = "Please enter a valid 10-digit Indian mobile number";
  if (!form.service) errors.service = "Please select a service";
  if (!form.date) errors.date = "Please select a preferred date";
  else {
    const chosen = new Date(form.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) errors.date = "Please choose a future date";
  }
  if (!form.time) errors.time = "Please select a preferred time";
  if (!form.consent) errors.consent = "You must agree to proceed";
  return errors;
}

// ─── Today's date string for min date attr ────────────────────────────────────
function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function BookingSection() {
  const id = useId();
  const [form, setForm] = useState<BookingForm>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof BookingForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = () => {
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstKey = Object.keys(errs)[0];
      document.getElementById(`${id}-${firstKey}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    // Build WhatsApp URL and open it
    const msg = buildWhatsAppMessage(form);
    const clean = business.whatsapp.replace(/\D/g, "");
    const url = `https://wa.me/${clean}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="booking"
      className="section-padding bg-white"
      aria-label="Book an appointment"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Appointments
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-section text-charcoal"
          >
            Book Your <span className="text-gradient">Appointment</span>
          </motion.h2>
          <div className="divider-rose" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 font-poppins text-sm mt-4 max-w-md mx-auto"
          >
            Fill in the form below and your request will be sent directly to us
            via WhatsApp. We confirm your slot within minutes.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-16 px-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center
                  mx-auto mb-6">
                  <FaCheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
                  Request Sent!
                </h3>
                <p className="font-poppins text-charcoal/60 text-sm mb-2 leading-relaxed max-w-sm mx-auto">
                  Your WhatsApp has opened with your booking details. Send the
                  message to complete your request.
                </p>
                <p className="font-poppins text-charcoal/50 text-xs mb-8">
                  We will confirm your appointment within a few hours.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-outline text-sm px-6 py-2.5"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-mist rounded-3xl p-6 sm:p-8 shadow-soft border border-blush/50"
              >
                {/* Privacy badge */}
                <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5
                  border border-roseGold/15 shadow-soft mb-7 w-fit">
                  <FaShieldAlt className="text-roseGold shrink-0" size={14} />
                  <p className="text-xs font-poppins text-charcoal/60">
                    <span className="font-semibold text-charcoal">Zero data storage.</span>{" "}
                    Your details go directly to WhatsApp only — nothing is saved online.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Row 1 — Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      id={`${id}-name`}
                      label="Full Name"
                      required
                      error={errors.name}
                      icon={<FiUser size={15} />}
                    >
                      <input
                        id={`${id}-name`}
                        type="text"
                        placeholder="Priya Sharma"
                        value={form.name}
                        onChange={set("name")}
                        autoComplete="name"
                        className={inputCls(!!errors.name)}
                        aria-describedby={errors.name ? `${id}-name-err` : undefined}
                        aria-invalid={!!errors.name}
                      />
                    </Field>

                    <Field
                      id={`${id}-phone`}
                      label="WhatsApp / Phone"
                      required
                      error={errors.phone}
                      errorId={`${id}-phone-err`}
                      icon={<FiPhone size={15} />}
                    >
                      <input
                        id={`${id}-phone`}
                        type="tel"
                        placeholder="9876543210"
                        value={form.phone}
                        onChange={set("phone")}
                        autoComplete="tel"
                        inputMode="numeric"
                        maxLength={10}
                        className={inputCls(!!errors.phone)}
                        aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
                        aria-invalid={!!errors.phone}
                      />
                    </Field>
                  </div>

                  {/* Service */}
                  <Field
                    id={`${id}-service`}
                    label="Service"
                    required
                    error={errors.service}
                    errorId={`${id}-service-err`}
                    icon={<MdSpa size={15} />}
                  >
                    <div className="relative">
                      <select
                        id={`${id}-service`}
                        value={form.service}
                        onChange={set("service")}
                        className={`${inputCls(!!errors.service)} appearance-none pr-10`}
                        aria-describedby={errors.service ? `${id}-service-err` : undefined}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name} — {s.price}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet — advise me</option>
                      </select>
                      <FiChevronDown
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none"
                        size={16}
                      />
                    </div>
                  </Field>

                  {/* Row 2 — Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      id={`${id}-date`}
                      label="Preferred Date"
                      required
                      error={errors.date}
                      errorId={`${id}-date-err`}
                      icon={<FiCalendar size={15} />}
                    >
                      <input
                        id={`${id}-date`}
                        type="date"
                        min={todayStr()}
                        value={form.date}
                        onChange={set("date")}
                        className={inputCls(!!errors.date)}
                        aria-describedby={errors.date ? `${id}-date-err` : undefined}
                        aria-invalid={!!errors.date}
                      />
                    </Field>

                    <Field
                      id={`${id}-time`}
                      label="Preferred Time"
                      required
                      error={errors.time}
                      errorId={`${id}-time-err`}
                      icon={<FiClock size={15} />}
                    >
                      <div className="relative">
                        <select
                          id={`${id}-time`}
                          value={form.time}
                          onChange={set("time")}
                          className={`${inputCls(!!errors.time)} appearance-none pr-10`}
                          aria-describedby={errors.time ? `${id}-time-err` : undefined}
                          aria-invalid={!!errors.time}
                        >
                          <option value="">Select time…</option>
                          {TIME_SLOTS.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <FiChevronDown
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none"
                          size={16}
                        />
                      </div>
                    </Field>
                  </div>

                  {/* Message */}
                  <Field
                    id={`${id}-message`}
                    label="Special Request (optional)"
                    icon={<FiMessageSquare size={15} />}
                  >
                    <textarea
                      id={`${id}-message`}
                      rows={3}
                      placeholder="Any specific design, colour preference, or question…"
                      value={form.message}
                      onChange={set("message")}
                      className={`${inputCls(false)} resize-none`}
                    />
                  </Field>

                  {/* ── Consent checkbox ── */}
                  <div
                    className={`rounded-2xl border p-4 transition-colors ${
                      errors.consent
                        ? "border-red-300 bg-red-50"
                        : "border-roseGold/20 bg-white"
                    }`}
                  >
                    <label
                      htmlFor={`${id}-consent`}
                      className="flex items-start gap-3 cursor-pointer select-none"
                    >
                      <input
                        id={`${id}-consent`}
                        type="checkbox"
                        checked={form.consent}
                        onChange={set("consent")}
                        className="mt-0.5 w-4 h-4 accent-roseGold shrink-0 cursor-pointer"
                        aria-describedby={`${id}-consent-text`}
                        aria-required="true"
                      />
                      <span
                        id={`${id}-consent-text`}
                        className="text-xs font-poppins text-charcoal/70 leading-relaxed"
                      >
                        I agree that the information I have provided (name, phone number,
                        service preference, and appointment details) will be used{" "}
                        <strong className="text-charcoal">solely for the purpose of booking
                        confirmation</strong> with NailsbySweta26. I understand that this
                        data will be shared only with the salon owner via WhatsApp and will
                        not be stored, sold, or shared with any third party. I give my
                        voluntary consent as required under the{" "}
                        <strong className="text-charcoal">
                          Digital Personal Data Protection Act 2023 (India)
                        </strong>
                        .
                      </span>
                    </label>
                    {errors.consent && (
                      <p
                        id={`${id}-consent-err`}
                        className="text-red-500 text-xs font-poppins mt-2 ml-7"
                        role="alert"
                      >
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="btn-primary w-full justify-center text-base py-4 mt-2"
                    aria-label="Send booking request via WhatsApp"
                  >
                    <FaWhatsapp size={20} aria-hidden="true" />
                    Send Booking Request via WhatsApp
                  </button>

                  {/* How it works note */}
                  <p className="text-center text-xs text-charcoal/40 font-poppins leading-relaxed">
                    Clicking the button will open WhatsApp with your booking details
                    pre-filled. Simply send the message — we will confirm your slot shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Working hours reminder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {business.workingHours.map((h) => (
              <div
                key={h.days}
                className="bg-mist rounded-2xl px-4 py-3 text-center border border-blush/50"
              >
                <p className="text-[10px] font-poppins font-semibold tracking-widest uppercase
                  text-roseGold mb-1">
                  {h.days}
                </p>
                <p className="text-charcoal font-poppins font-medium text-xs">{h.hours}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Helper: input class ──────────────────────────────────────────────────────
function inputCls(hasError: boolean): string {
  return [
    "w-full bg-white border rounded-xl px-4 py-3 text-sm font-poppins text-charcoal",
    "placeholder:text-charcoal/30 transition-all duration-200 outline-none",
    "focus:ring-2 focus:ring-roseGold/40 focus:border-roseGold",
    hasError
      ? "border-red-300 focus:ring-red-200 focus:border-red-400"
      : "border-blush hover:border-roseGoldLight",
  ].join(" ");
}

// ─── Helper: Field wrapper ────────────────────────────────────────────────────
interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function Field({ id, label, required, error, errorId, icon, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="flex items-center gap-1.5 text-xs font-poppins font-semibold
          text-charcoal/70 uppercase tracking-wide"
      >
        {icon && <span className="text-roseGold">{icon}</span>}
        {label}
        {required && <span className="text-roseGold ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p
          id={errorId}
          className="text-red-500 text-xs font-poppins"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
