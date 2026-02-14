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

        const nativeContainer = document.getElementById('container-62a1f1dbfb76aeb4fb99288d9b4f15f9');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/62a1f1dbfb76aeb4fb99288d9b4f15f9/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/42/29/b1/4229b168b0cbf00af78bbed7a048a39a.js' }
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
            if(document.querySelector(`script[src*="d1bc8fa3d563031996615ef5b01f6e29"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/d1/bc/8f/d1bc8fa3d563031996615ef5b01f6e29.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}