module.exports = () => ({
  '/': { page: '/' },
  '/login': { page: '/login' },
  '/products': { page: '/products' },
  '/checkout': { page: '/checkout', query: { stage: 'customer' } },
  '/checkout/customer': { page: '/checkout', query: { stage: 'customer' } },
  '/checkout/shipping': { page: '/checkout', query: { stage: 'shipping' } },
  '/checkout/payment': { page: '/checkout', query: { stage: 'payment' } },
  '/cart': { page: '/cart' },
  '/order': { page: '/order' },
  '/coveclub': { page: '/coveclub' },
  '/account': { page: '/account' },
  '/account/summary': { page: '/account/summary' },
  '/account/info': { page: '/account/info' },
  '/account/info/notifications': { page: '/account/info/notifications' },
  '/account/info/permit-number': { page: '/account/info/permitNumber' },
  '/account/info/email': { page: '/account/info/email' },
  '/account/info/phone': { page: '/account/info/phone' },
  '/account/info/password': { page: '/account/info/password' },
  '/account/info/bill-date': { page: '/account/info/billDate' },
  '/account/info/monitored-address': { page: '/account/info/monitoredAddress' },
  '/account/info/primary-phone': { page: '/account/info/primaryPhone' },
  '/account/info/secondary-phone': { page: '/account/info/secondaryPhone' },
  '/account/info/edit-emergency-contact': { page: '/account/info/editEmergencyContact' },
  '/account/info/add-emergency-contact': { page: '/account/info/addEmergencyContact' },
  '/account/info/add-user': { page: '/account/info/addUser' },
  '/account/info/edit-user': { page: '/account/info/editUser' },
  '/account/info/add-equipment': { page: '/account/info/addEquipment' },
  '/account/info/return-equipment': { page: '/account/info/returnEquipment' },
  '/account/info/alarm-insurance-certificate': { page: '/account/info/alarmInsuranceCertificate' },
  '/account/subscriptions': { page: '/account/subscriptions' },
  '/account/subscriptions/details': { page: '/account/subscriptions/details' },
  '/account/subscriptions/activate': { page: '/account/subscriptions/activate' },
  '/account/subscriptions/change': { page: '/account/subscriptions/change' },
  '/account/subscriptions/cancel': { page: '/account/subscriptions/cancel' },
  '/account/subscriptions/pay-balance': { page: '/account/subscriptions/payBalance' },
  '/account/subscriptions/finance-details': { page: '/account/subscriptions/financeDetails' },
  '/account/subscriptions/documents-agreements': { page: '/account/subscriptions/documentsAgreements' },
  '/account/payment-methods': { page: '/account/paymentMethods' },
  '/account/addresses': { page: '/account/addresses' },
  '/account/addresses/change-monitored-address': { page: '/account/addresses/changeMonitoredAddress' },
  '/account/addresses/add-shipping-address': { page: '/account/addresses/addShippingAddress' },

  '/account/equipment': { page: '/equipment', query: {} },
  '/account/addequipment': { page: '/addEquipment' },
  '/account/cancel': { page: '/cancelmembership' },
  '/account/refer': { page: '/refer' },
  '/account/password': { page: '/password' },
  '/account/payoffbalance': { page: '/payoffbalance' },
  '/account/payment': { page: '/payment' },
  '/account/phone': { page: '/phonenumber' },
  '/account/loyalty': { page: '/loyaltycredits' },
  '/account/email': { page: '/email' },
});
