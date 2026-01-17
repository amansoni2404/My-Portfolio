import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setSubmitStatus({
          type: 'error',
          message: 'Contact form is not configured for this environment. Please email me directly at amansoni@umich.edu',
        });
        setIsSubmitting(false);
        return;
      }

      // Send email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'amansoni@umich.edu', // Your email
        },
        publicKey
      );

      // Success
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly at amansoni@umich.edu' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="section-title">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:amansoni@umich.edu"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    amansoni@umich.edu
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Phone</h3>
                  <a
                    href="tel:+17343690957"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +1 (734) 369-0957
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">Ann Arbor, MI</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/aman-soni24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary rounded-full hover:bg-accent transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/amansoni2404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary rounded-full hover:bg-accent transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              {submitStatus.type && (
                <div className={`p-4 rounded-xl text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
