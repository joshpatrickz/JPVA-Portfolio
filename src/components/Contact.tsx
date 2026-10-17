import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import CV from "@/assets/aquino-cv.pdf";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label } from "@/components/ui/form-elements";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://getform.io/f/6e136da9-89d7-4ab2-8bf3-7dafa3aea345",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        form.submit();
      }
    } catch {
      form.submit();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-6 sm:gap-12">
          <div className="sm:col-span-4 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              05 / Contact
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Have a project, question, or opportunity? Send a message or grab a
              copy of my resume.
            </p>
            <div className="pt-1 flex flex-wrap sm:flex-col gap-4 sm:gap-2 text-xs">
              <a
                href="https://github.com/joshpatrickz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors py-1 sm:py-0"
              >
                github.com/joshpatrickz <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={CV}
                download="Aquino, Joshua Patrick - CV.pdf"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors py-1 sm:py-0"
              >
                Download CV (PDF) <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="sm:col-span-8">
            {submitted ? (
              <div className="p-5 sm:p-6 rounded-xl border border-border bg-card space-y-3">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="w-4 h-4" />
                  Message sent
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                method="POST"
                action="https://getform.io/f/6e136da9-89d7-4ab2-8bf3-7dafa3aea345"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-xs text-muted-foreground"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs text-muted-foreground"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-xs text-muted-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto h-10 sm:h-9"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
