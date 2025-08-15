'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { HeroHeader } from '@/components/header';
import { SharedFooter } from '@/components/shared-footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    extraInfo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroHeader />
      <div className="container mx-auto max-w-2xl px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? I&apos;d love to hear from
            you.
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={e => handleChange('subject', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="extraInfo"
                  className="text-sm font-medium text-foreground"
                >
                  Additional Information
                </label>
                <select
                  id="extraInfo"
                  value={formData.extraInfo}
                  onChange={e => handleChange('extraInfo', e.target.value)}
                  className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">
                    Select additional information (optional)
                  </option>
                  <option value="project-inquiry">Project Inquiry</option>
                  <option value="collaboration">
                    Collaboration Opportunity
                  </option>
                  <option value="consultation">Consultation Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me more about your inquiry..."
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Other Ways to Connect
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Email:</span>
                <a
                  href="mailto:hello@example.com"
                  className="text-primary hover:underline"
                >
                  hello@example.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">LinkedIn:</span>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SharedFooter />
    </main>
  );
}
