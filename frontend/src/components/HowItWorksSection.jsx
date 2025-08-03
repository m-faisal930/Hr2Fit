// src/components/HowItWorksSection.jsx
import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Post a Job',
    description:
      'Employers create and post new openings in minutes, targeting exactly the talent you need.',
  },
  {
    id: 2,
    title: 'Submit Applications',
    description:
      'Candidates browse and apply to jobs with a single click, uploading resumes and portfolios instantly.',
  },
  {
    id: 3,
    title: 'Profile Screening',
    description:
      'Our team reviews applications and shortlists top candidates based on your criteria and resume insights.',
  },
  {
    id: 4,
    title: 'Interview Invites',
    description:
      'Selected applicants receive automated email invites with interview details and next-step instructions.',
  },
  {
    id: 5,
    title: 'Offer & Onboard',
    description:
      'Finalize your hire: send offers, handle paperwork, and welcome new team members seamlessly.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative bg-light py-16 overflow-hidden"
    >
      {/* Soft radial accent behind */}
      <div
        className="absolute inset-0 m-auto w-96 h-96 blur-3xl z-[-1]"
        style={{
          background:
            'radial-gradient(circle, rgba(51,51,51,0.3), transparent)',
        }}
      />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-work text-4xl sm:text-5xl font-bold text-gray-900">
            How It <span className="text-buttons">Works</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Simplify your hiring pipeline from posting to onboarding—all on one
            platform.
          </p>
        </div>

        {/* Steps & connecting line */}
        <div className="relative mt-12 lg:mt-20">
          {/* Dark dotted curve */}
          <div className="absolute inset-x-0 hidden md:block top-2 px-20 lg:px-28">
            <img
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
              className="w-full filter invert opacity-50"
            />
          </div>

          {/* Steps grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-12 text-center">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-[#5F8DB8] rounded-full shadow-md transition-transform duration-300 hover:scale-110">
                  <span className="text-white text-xl font-semibold">
                    {step.id}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-work font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
