
// src/components/ContactSection.jsx
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { colors } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className={`${colors.bgSecondary} py-16`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`font-work text-3xl sm:text-4xl font-bold ${colors.textPrimary}`}>
            Get In <span className="text-buttons">Touch</span>
          </h2>
          <p className={`mt-4 text-lg ${colors.textSecondary} max-w-2xl mx-auto`}>
            Have questions or need assistance? Reach out to our team—we’re here
            to help!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: Mail,
                label: 'Email Us',
                lines: [
                  'support@recruitifyglobal.com',
                  'info@recruitifyglobal.com',
                ],
              },
              {
                icon: Phone,
                label: 'Call Us',
                lines: ['+1 (555) 123-4567', 'Mon-Fri, 9am-5pm CST'],
              },
              {
                icon: MapPin,
                label: 'Visit Us',
                lines: ['123 Main Street, Suite 100', 'Austin, TX, USA'],
              },
            ].map(({ icon: Icon, label, lines }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lightdiv text-buttons transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className={`text-lg font-work font-semibold ${colors.textPrimary}`}>
                    {label}
                  </h3>
                  {lines.map((line) => (
                    <p key={line} className={`mt-1 ${colors.textSecondary} text-sm`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.12646498271!2d74.358744!3d31.483576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${colors.cardBg} rounded-2xl ${colors.cardBorder} p-8 shadow-sm`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  id: 'name',
                  label: 'Full Name',
                  type: 'text',
                  value: formData.name,
                },
                {
                  id: 'email',
                  label: 'Email Address',
                  type: 'email',
                  value: formData.email,
                },
              ].map(({ id, label, type, value }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className={`block text-sm font-medium ${colors.textPrimary}`}
                  >
                    {label} *
                  </label>
                  <input
                    id={id}
                    type={type}
                    required
                    className={`mt-1 block w-full rounded-xl ${colors.inputBorder} ${colors.inputBg} p-3 ${colors.inputText} shadow-sm focus:border-buttons focus:ring-buttons transition-colors`}
                    value={value}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, [id]: e.target.value }))
                    }
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${colors.textPrimary}`}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className={`mt-1 block w-full rounded-xl ${colors.inputBorder} ${colors.inputBg} p-3 ${colors.inputText} shadow-sm focus:border-buttons focus:ring-buttons transition-colors`}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-buttons px-6 py-3 text-base font-work font-medium text-gray-700  hover:text-white cursor-pointer shadow transition-transform duration-200 hover:scale-105 hover:bg-[#0041A8]"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

