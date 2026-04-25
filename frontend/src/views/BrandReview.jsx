'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Calendar } from '../components/ui/calendar';
import { createBooking } from '../lib/content';

const defaultOptions = {
  serviceOptions: [
    'Brand Strategy',
    'Visual Identity',
    'Digital Presence',
    'Full Rebrand',
    'Brand Audit',
    'Other',
  ],
  budgetOptions: [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
  ],
  hearAboutOptions: [
    'Google Search',
    'Social Media',
    'Referral',
    'Previous Client',
    'Industry Event',
    'Other',
  ],
  referrerOptions: [
    'Direct Search',
    'Friend or Colleague',
    'Client',
    'Partner Agency',
    'Other',
  ],
  timeSlots: [
    '7:30 PM - 8:30 PM',
    '8:30 PM - 9:30 PM',
    '9:30 PM - 10:30 PM',
  ],
  sessionDuration: 120,
};

const BrandReview = ({ pageData = {}, settings = null, formOptions = null }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    hearAbout: '',
    referrer: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    instagram: '',
    date: null,
    timeSlot: '',
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const options = formOptions || defaultOptions;
  const sessionDuration =
    pageData.sessionDuration ||
    settings?.brandReviewDuration ||
    options.sessionDuration ||
    120;
  const heroDescription = (
    pageData.heroDescription ||
    'Our Brand Review is a {duration}-minute strategic session where we step back, assess, and understand your brand as a whole: its story, structure, presence, and potential.'
  ).replace('{duration}', sessionDuration);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (step) => {
    const stepRequirements = {
      1: ['service', 'budget', 'hearAbout', 'referrer'],
      2: ['firstName', 'lastName', 'email', 'phone', 'company'],
      3: ['date', 'timeSlot'],
    };

    const missingFields = (stepRequirements[step] || []).filter((field) => {
      const value = formData[field];

      if (value instanceof Date) {
        return Number.isNaN(value.getTime());
      }

      return !String(value || '').trim();
    });

    if (missingFields.length > 0) {
      setSubmitError('Please complete the required fields before continuing.');
      return false;
    }

    setSubmitError(null);
    return true;
  };

  const handleNext = () => {
    if (currentStep < 3 && validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStep(3)) {
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const submissionData = {
        ...formData,
        date: formData.date ? formData.date.toLocaleDateString('en-CA') : null,
      };

      await createBooking(submissionData);
      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitError('We could not open your email draft. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="brand-review-page">
      <section className="brand-review-hero">
        <div className="hero-container">
          <div className="hero-left">
            <span className="hero-eyebrow">{pageData.heroEyebrow || 'Strategic Session'}</span>
            <h1 className="hero-title">{pageData.heroTitle || 'Brand Review'}</h1>
            <p className="hero-description">{heroDescription}</p>
          </div>
          <div className="hero-right">
            <div className="hero-time-display">
              <span className="time-number">{sessionDuration}</span>
              <span className="time-unit">{pageData.unitText || 'MINUTES'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-review-form-section">
        <div className="form-container">
          {submitSuccess ? (
            <div className="success-message">
              <div className="success-icon">PH</div>
              <h2 className="success-title">{pageData.successTitle || 'Draft Ready'}</h2>
              <p className="success-description">
                {pageData.successMessage ||
                  'Your email app should open with a pre-filled Paper Hoof enquiry draft. Send it when you are ready and we will follow up from there.'}
              </p>
              <p className="success-details">
                {formData.date &&
                  `Date: ${formData.date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}`}
                {formData.timeSlot && ` at ${formData.timeSlot}`}
              </p>
            </div>
          ) : (
            <>
              <div className="progress-indicator">
                <span className="progress-text">
                  {(pageData.stepsTitle || 'Step {current} of {total}')
                    .replace('{current}', currentStep)
                    .replace('{total}', 3)}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="brand-review-form">
                {submitError && <div className="error-alert">{submitError}</div>}

                {currentStep === 1 && (
                  <div className="form-step">
                    <div className="form-field">
                      <label className="field-label">
                        {pageData.labelService || 'Select Service'}
                        <span className="label-arrow">&rsaquo;</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData.placeholderService || 'Choose the service from dropdown'}</option>
                        {options.serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        {pageData.labelBudget || "What's Your Budget"}
                        <span className="label-arrow">&rsaquo;</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData.placeholderBudget || 'Choose your budget from dropdown'}</option>
                        {options.budgetOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        {pageData.labelHearAbout || 'How Did You Hear Us'}
                        <span className="label-arrow">&rsaquo;</span>
                      </label>
                      <select
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData.placeholderHearAbout || 'Choose from dropdown'}</option>
                        {options.hearAboutOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        {pageData.labelReferrer || 'Who Referred Us'}
                        <span className="label-arrow">&rsaquo;</span>
                      </label>
                      <select
                        name="referrer"
                        value={formData.referrer}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData.placeholderReferrer || 'Choose the person from dropdown'}</option>
                        {options.referrerOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-actions">
                      <button type="button" onClick={handleNext} className="btn-next">
                        {pageData.btnNext || 'Next'}
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="form-step">
                    <div className="form-grid">
                      {[
                        ['firstName', pageData.labelFirstName || 'First Name', pageData.placeholderFirstName || 'Type your first name here', true],
                        ['lastName', pageData.labelLastName || 'Last Name', pageData.placeholderLastName || 'Type your last name here', true],
                        ['email', pageData.labelEmail || 'Email', pageData.placeholderEmail || 'Type your email here', true],
                        ['phone', pageData.labelPhone || 'Phone', pageData.placeholderPhone || 'Type your phone number here', true],
                        ['company', pageData.labelCompany || 'Company Name', pageData.placeholderCompany || 'Type your company name here', true],
                        ['instagram', pageData.labelInstagram || 'Instagram ID', pageData.placeholderInstagram || 'Type your Instagram username', false],
                      ].map(([name, label, placeholder, required]) => (
                        <div key={name} className="form-field">
                          <label className="field-label">
                            {label}
                            <span className="label-arrow">&rsaquo;</span>
                          </label>
                          <input
                            type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'}
                            name={name}
                            value={formData[name]}
                            onChange={handleInputChange}
                            className="field-input"
                            placeholder={placeholder}
                            required={required}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-back">
                        {pageData.btnBack || 'Back'}
                      </button>
                      <button type="button" onClick={handleNext} className="btn-next">
                        {pageData.btnNext || 'Next'}
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="form-step">
                    <div className="booking-section">
                      <div className="form-field">
                      <label className="field-label-dropdown">
                        {pageData.labelDate || 'Reserve a Date'}
                        <ChevronRight size={16} className="dropdown-arrow" />
                      </label>
                      <div className="calendar-container">
                          <div className="calendar-header">
                            <span className="calendar-month">Choose a date that works for you</span>
                          </div>
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={(date) => setFormData((prev) => ({ ...prev, date }))}
                            disabled={(date) => date < new Date()}
                            className="brand-calendar"
                          />
                          <div className="calendar-timezone">
                            Time zone: {settings?.timezone || 'Asia/Colombo (GMT +5:30)'}
                          </div>
                        </div>
                      </div>

                      {formData.date && (
                        <>
                          <div className="selected-date-display">
                            {formData.date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </div>

                          <div className="time-slots">
                            {options.timeSlots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                className={`time-slot-btn ${formData.timeSlot === slot ? 'selected' : ''}`}
                                onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="form-field">
                      <label className="field-label-dropdown">
                        {pageData.labelNotes || 'Anything you would like us to know'}
                        <ChevronRight size={16} className="dropdown-arrow" />
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="field-textarea"
                        placeholder={pageData.placeholderNotes || 'Type here'}
                        rows="4"
                      />
                    </div>

                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-back">
                        {pageData.btnBack || 'Back'}
                      </button>
                      <button type="submit" className="btn-submit" disabled={submitting}>
                        {submitting
                          ? (pageData.btnSubmitting || 'Preparing...')
                          : (pageData.btnSubmit || 'Prepare Email')}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrandReview;
