// utils/analytics.js

export const GA_TRACKING_ID = 'G-25ZQ2Y8FKL'; // Substitua com seu próprio ID de rastreamento

// Verifica se o código está sendo executado no navegador
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Função para rastrear eventos específicos
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
