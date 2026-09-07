import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/peptides/:path*", destination: "/", permanent: false },
      { source: "/treatments/:path*", destination: "/", permanent: false },
      { source: "/functional-health/:path*", destination: "/gut-health", permanent: false },
      { source: "/longevity/:path*", destination: "/", permanent: false },
      { source: "/weight-loss/:path*", destination: "/", permanent: false },
      { source: "/womens-health/:path*", destination: "/gut-health", permanent: false },
      { source: "/nad-plus/:path*", destination: "/", permanent: false },
      { source: "/glutathione/:path*", destination: "/", permanent: false },
      { source: "/sermorelin/:path*", destination: "/mens-health", permanent: false },
      { source: "/memberships/:path*", destination: "/", permanent: false },
      { source: "/programs/:path*", destination: "/", permanent: false },
      { source: "/nutrition-support/:path*", destination: "/gut-health", permanent: false },
      { source: "/standout/:path*", destination: "/", permanent: false },
      { source: "/how-it-works", destination: "/", permanent: false },
      { source: "/schedule/:path*", destination: "/mens-health", permanent: false },
      { source: "/questionnaires", destination: "/", permanent: false },
      { source: "/questionnaires/metabolic-weight", destination: "/", permanent: false },
      { source: "/questionnaires/special-needs-nutrition", destination: "/", permanent: false },
      { source: "/treatment-consents", destination: "/mens-health", permanent: false },
      { source: "/treatment-consents/peptide-therapy", destination: "/", permanent: false },
      { source: "/treatment-consents/nad-plus", destination: "/", permanent: false },
      { source: "/treatment-consents/medical-weight-management", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
