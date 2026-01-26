/**
 * Sanity Studio Page
 * 
 * Renders the embedded Sanity Studio at /studio route.
 */

import React, { useEffect } from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';

export default function StudioPage() {
    // Disable body scroll and set studio styles
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.margin = '0';

        return () => {
            document.body.style.overflow = '';
            document.body.style.margin = '';
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999
        }}>
            <Studio config={config} />
        </div>
    );
}
