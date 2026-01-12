export const layoutConfig = {
  navbar: {
    height: '4rem',
    mobileHeight: '3.5rem',
    sticky: true,
    transparent: false,
    blur: true,
  },
  
  footer: {
    showSocialLinks: true,
    showNewsletter: true,
    columns: 4,
  },
  
  container: {
    maxWidth: '1280px',
    padding: {
      mobile: '1rem',
      tablet: '2rem',
      desktop: '4rem',
    },
  },
  
  grid: {
    cols: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    gap: {
      mobile: '1rem',
      tablet: '1.5rem',
      desktop: '2rem',
    },
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};