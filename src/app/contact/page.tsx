"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" />
        <div className="absolute top-20 right-[20%] h-48 w-48 rounded-full bg-warm/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-warm/20 bg-warm/5 px-4 py-1.5 text-sm">
              <MessageSquare className="h-3.5 w-3.5 text-warm" />
              <span className="text-xs font-medium uppercase tracking-wider text-warm">
                Get in Touch
              </span>
            </div>
            <h1 className="mt-8 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Have questions about your stay? We&apos;d love to hear from you.
              Reach out and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-semibold">
                  Contact Information
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We&apos;re here to help make your stay perfect. Reach out
                  through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:booking@b5homes.com"
                  className="group flex items-start gap-4 rounded-2xl border border-border/40 bg-card/50 p-5 transition-all duration-300 hover:shadow-lg hover:border-warm/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-warm/8 transition-colors group-hover:bg-warm/15">
                    <Mail className="h-5 w-5 text-warm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-warm transition-colors">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      booking@b5homes.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-border/40 bg-card/50 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-warm/8">
                    <MapPin className="h-5 w-5 text-warm" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      5 Oak Glen Ct
                      <br />
                      Greenville, SC 29607
                    </p>
                  </div>
                </div>
              </div>

              {/* Property Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/exterior/front.webp"
                  alt="B5 Homes property at 5 Oak Glen Ct, Greenville"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-0 bg-gradient-to-b from-muted/40 to-muted/10 shadow-xl">
                <CardContent className="p-8 lg:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-nature/10">
                        <CheckCircle className="h-10 w-10 text-nature" />
                      </div>
                      <h3 className="mt-8 font-serif text-3xl font-bold">
                        Message Sent!
                      </h3>
                      <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
                        Thank you for reaching out. We&apos;ll get back to you
                        as soon as possible.
                      </p>
                      <Button
                        className="mt-8 cursor-pointer rounded-xl bg-warm text-warm-foreground hover:bg-warm/90"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-7">
                      <div>
                        <h2 className="font-serif text-2xl font-semibold">
                          Send Us a Message
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Fill out the form below and we&apos;ll respond
                          promptly.
                        </p>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium"
                          >
                            Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="bg-background/60 rounded-xl h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="bg-background/60 rounded-xl h-12"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium"
                          >
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(optional)"
                            className="bg-background/60 rounded-xl h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="e.g. Booking inquiry"
                            className="bg-background/60 rounded-xl h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your plans or ask us anything..."
                          className="bg-background/60 resize-none rounded-xl"
                        />
                      </div>

                      {/* Honeypot */}
                      <div className="hidden" aria-hidden="true">
                        <input
                          type="text"
                          name="honeypot"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full cursor-pointer bg-warm text-warm-foreground hover:bg-warm/90 hover:shadow-lg hover:shadow-warm/20 rounded-xl h-12 transition-all duration-300"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
