import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { urlFor, getSiteSettings } from '../lib/sanity';

const SEO = ({ title, description, image, settings: initialSettings }) => {
    const [settings, setSettings] = useState(initialSettings || null);

    useEffect(() => {
        if (!settings) {
            getSiteSettings().then(setSettings).catch(console.error);
        }
    }, [settings]);

    // 1. Resolve values (Page specific -> Global Default -> Hard Fallback)
    const metaTitle = title || settings?.seoDefaultTitle || settings?.companyName || 'Branfern';
    const metaDescription = description || settings?.seoDefaultDescription || "We design the systems that power your brand.";

    // 2. Resolve Image URL
    let metaImage = null;
    if (image) {
        metaImage = urlFor(image).width(1200).height(630).url();
    } else if (settings?.seoDefaultImage) {
        metaImage = urlFor(settings.seoDefaultImage).width(1200).height(630).url();
    }

    // 3. Current URL (canonical)
    const canonicalUrl = window.location.href;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph (Facebook/LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            {metaImage && <meta property="og:image" content={metaImage} />}
            {settings?.companyName && <meta property="og:site_name" content={settings.companyName} />}

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            {metaImage && <meta name="twitter:image" content={metaImage} />}
        </Helmet>
    );
};

export default SEO;
