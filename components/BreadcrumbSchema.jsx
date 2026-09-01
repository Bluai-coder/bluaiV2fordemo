'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  
  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean);
    
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bluai.ai"
      }
    ];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        "item": `https://bluai.ai${currentPath}`
      });
    });
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
    
    let script = document.querySelector('#breadcrumb-schema');
    if (script) {
      script.innerHTML = JSON.stringify(schema);
    } else {
      script = document.createElement('script');
      script.id = 'breadcrumb-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [pathname]);
  
  return null;
}