import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Calendar } from '../components/ui/calendar';
import { getPageBrandReview, getFormOptions, getSiteSettings, createBooking } from '../lib/sanity';
import SEO from '../components/SEO';
import './BrandReview.css';

const BrandReview = () => {
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
    notes: ''
  });
  const [formOptions, setFormOptions] = useState(null);
  const [settings, setSettings] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Default form options (fallback)
  const defaultOptions = {
    serviceOptions: [
      'Brand Strategy',
      'Visual Identity',
      'Digital Presence',
      'Full Rebrand',
      'Brand Audit',
      'Other'
    ],
    budgetOptions: [
      'Under $5,000',
      '$5,000 - $10,000',
      '$10,000 - $25,000',
      '$25,000 - $50,000',
      '$50,000+'
    ],
    hearAboutOptions: [
      'Google Search',
      'Social Media',
      'Referral',
      'Previous Client',
      'Industry Event',
      'Other'
    ],
    referrerOptions: [
      'Direct Search',
      'Friend/Colleague',
      'Client',
      'Partner Agency',
      'Other'
    ],
    timeSlots: [
      '7:30 PM - 8:30 PM',
      '8:30 PM - 9:30 PM',
      '9:30 PM - 10:30 PM'
    ],
    sessionDuration: 120
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [optionsData, settingsData, pageContent] = await Promise.all([
          getFormOptions(),
          getSiteSettings(),
          getPageBrandReview()
        ]);

        if (optionsData) setFormOptions(optionsData);
        if (settingsData) setSettings(settingsData);
        if (pageContent) setPageData(pageContent);
      } catch (error) {
        console.error('Error fetching form options:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const options = formOptions || defaultOptions;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare data (ensure date is formatted correctly)
      const submissionData = {
        ...formData,
        date: formData.date ? formData.date.toLocaleDateString('en-CA') : null // YYYY-MM-DD format
      };

      await createBooking(submissionData);

      setSubmitSuccess(true);
      // Scroll to top so success message is visible
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const sessionDuration = pageData?.sessionDuration || settings?.brandReviewDuration || options.sessionDuration || 120;

  // Replace {duration} in description if present
  const heroDescription = (pageData?.heroDescription || settings?.brandReviewDescription ||
    "Our Brand Review is a {duration}-minute strategic session where we step back, assess, and understand your brand as a whole, its story, structure, presence, and potential. Rather than surface-level feedback, we offer considered direction rooted in design thinking, systems, and long-term brand health.")
    .replace('{duration}', sessionDuration);

  return (
    <div className="brand-review-page">
      <SEO
        title={pageData?.seoTitle}
        description={pageData?.seoDescription}
        image={pageData?.seoImage}
      />

      {/* Hero Section */}
      <section className="brand-review-hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">{pageData?.heroTitle || 'Brand Review'}</h1>
            <p className="hero-description">{heroDescription}</p>
          </div>
          <div className="hero-right">
            <div className="hero-time-display">
              <span className="time-number">{sessionDuration}</span>
              <span className="time-unit">{pageData?.unitText || 'MINUTES'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="brand-review-form-section">
        <div className="form-container">
          {submitSuccess ? (
            /* Success / Thank You Screen */
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2 className="success-title">{pageData?.successTitle || 'Thank You!'}</h2>
              <p className="success-description">
                {pageData?.successMessage || 'Your Brand Review session has been booked successfully. We will contact you shortly to confirm your appointment.'}
              </p>
              <p className="success-details">
                {formData.date && `Date: ${formData.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}
                {formData.timeSlot && ` at ${formData.timeSlot}`}
              </p>
            </div>
          ) : (
            <>
              {/* Progress Indicator */}
              <div className="progress-indicator">
                <span className="progress-text">
                  {(pageData?.stepsTitle || 'Step {current} of {total}').replace('{current}', currentStep).replace('{total}', 3)}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="brand-review-form">
                {/* Error Alert */}
                {submitError && (
                  <div className="error-alert">{submitError}</div>
                )}

                {/* Step 1: Service Context */}
                {currentStep === 1 && (
                  <div className="form-step">
                    <div className="form-field">
                      <label className="field-label">
                        {pageData?.labelService || 'Select Service'}
                        <span className="label-arrow">▸</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData?.placeholderService || 'Choose the service from dropdown'}</option>
                        {(options.serviceOptions || []).map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        {pageData?.labelBudget || "What's Your Budget"}
                        <span className="label-arrow">▸</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData?.placeholderBudget || 'Choose your budget from dropdown'}</option>
                        {(options.budgetOptions || []).map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        {pageData?.labelHearAbout || 'How Did You Hear Us'}
                        <span className="label-arrow">▸</span>
                      </label>
                      <select
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData?.placeholderHearAbout || 'Choose from dropdown'}</option>
                        {(options.hearAboutOptions || []).map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="field-label">
                        {pageData?.labelReferrer || 'Who Referred Us'}
                        <span className="label-arrow">▸</span>
                      </label>
                      <select
                        name="referrer"
                        value={formData.referrer}
                        onChange={handleInputChange}
                        className="field-select"
                        required
                      >
                        <option value="">{pageData?.placeholderReferrer || 'Choose the person from dropdown'}</option>
                        {(options.referrerOptions || []).map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-actions">
                      <button type="button" onClick={handleNext} className="btn-next">
                        {pageData?.btnNext || 'Next'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {currentStep === 2 && (
                  <div className="form-step">
                    <div className="form-grid">
                      <div className="form-field">
                        <label className="field-label">
                          {pageData?.labelFirstName || 'First Name'}
                          <span className="label-arrow">▸</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder={pageData?.placeholderFirstName || 'Type your first name here'}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          {pageData?.labelLastName || 'Last Name'}
                          <span className="label-arrow">▸</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder={pageData?.placeholderLastName || 'Type your last name here'}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          {pageData?.labelEmail || 'Email'}
                          <span className="label-arrow">▸</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder={pageData?.placeholderEmail || 'Type your email here'}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          {pageData?.labelPhone || 'Phone'}
                          <span className="label-arrow">▸</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder={pageData?.placeholderPhone || 'Type your phone number here'}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          {pageData?.labelCompany || 'Company Name'}
                          <span className="label-arrow">▸</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder={pageData?.placeholderCompany || 'Type your company name here'}
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          {pageData?.labelInstagram || 'Instagram ID'}
                          <span className="label-arrow">▸</span>
                        </label>
                        <input
                          type="text"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          className="field-input"
                          placeholder={pageData?.placeholderInstagram || 'Type your Instagram username'}
                        />
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-back">
                        {pageData?.btnBack || 'Back'}
                      </button>
                      <button type="button" onClick={handleNext} className="btn-next">
                        {pageData?.btnNext || 'Next'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Slot Booking */}
                {currentStep === 3 && (
                  <div className="form-step">
                    <div className="booking-section">
                      <div className="form-field">
                        <label className="field-label-dropdown">
                          {pageData?.labelDate || 'Reserve a Date'}
                          <ChevronRight size={16} className="dropdown-arrow" />
                        </label>
                        <div className="calendar-container">
                          <div className="calendar-header">
                            <button type="button" className="calendar-nav-btn">
                              <ChevronLeft size={20} />
                            </button>
                            <span className="calendar-month">2026 December</span>
                            <button type="button" className="calendar-nav-btn">
                              <ChevronRight size={20} />
                            </button>
                          </div>
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={(date) => setFormData(prev => ({ ...prev, date }))}
                            disabled={(date) => date < new Date()}
                            className="brand-calendar"
                          />
                          <div className="calendar-timezone">
                            Time zone: {settings?.timezone || 'IST (GMT +5:30)'}
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
                              day: 'numeric'
                            })}
                          </div>

                          <div className="time-slots">
                            {(options.timeSlots || []).map((slot, index) => (
                              <button
                                key={index}
                                type="button"
                                className={`time-slot-btn ${formData.timeSlot === slot ? 'selected' : ''}`}
                                onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
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
                        {pageData?.labelNotes || 'Anything you like us to know'}
                        <ChevronRight size={16} className="dropdown-arrow" />
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="field-textarea"
                        placeholder={pageData?.placeholderNotes || 'Type here'}
                        rows="4"
                      />
                    </div>

                    <div className="form-actions">
                      <button type="button" onClick={handleBack} className="btn-back">
                        {pageData?.btnBack || 'Back'}
                      </button>
                      <button
                        type="submit"
                        className="btn-submit"
                        disabled={submitting}
                      >
                        {submitting ? (pageData?.btnSubmitting || 'Submitting...') : (pageData?.btnSubmit || 'Submit')}
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