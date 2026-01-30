/**
 * Registration Configuration
 * 
 * Control registration status for both school and student registration forms.
 * Set `isOpen` to `true` to enable registration, `false` to disable it.
 * 
 * When registration is closed, users will see a styled "Registration Closed" message
 * instead of the registration form.
 */
export const registrationConfig = {
  /**
   * Registration status
   * - true: Registration is open, forms are accessible
   * - false: Registration is closed, forms show closed message
   */
  isOpen: false,

  /**
   * Optional: Custom message to display when registration is closed
   * If not provided, a default message will be shown
   */
  closedMessage: "Registration is currently closed. Please check back later for updates.",

  /**
   * Optional: Contact information to display when registration is closed
   */
  contactInfo: {
    email: "help@nationalastronomy.org",
    phone: "91 8506955554",
  },
};
