// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-426098115b9621fb6123b064673edfa8');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/426098115b9621fb6123b064673edfa8/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/9c/ec/e9/9cece942c18dc8dd32fb92b075984f0c.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="f75a3b22e7cc074a631cdd23e413f2a0"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/f7/5a/3b/f75a3b22e7cc074a631cdd23e413f2a0.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}