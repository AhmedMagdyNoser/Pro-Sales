import {
  faAddressBook,
  faAt,
  faCalendar,
  faLocationDot,
  faLock,
  faPenClip,
  faPhone,
  faShare,
  faSpa,
  faSpinner,
  faUser,
  faVenusMars,
} from '@fortawesome/free-solid-svg-icons';

export const icons = {
  spinner: faSpinner,
  user: faUser,
  username: faAddressBook,
  password: faLock,
  phone: faPhone,
  email: faAt,
  date: faCalendar,
  source: faShare,
  assign: faPenClip,
  age: faSpa,
  gender: faVenusMars,
  city: faLocationDot,
};

export const applicationName = 'Pro Sales';

export const globalErrorMessage = 'Something went wrong. Please try again later.';

export const validationRegex = {
  name: /^[^0-9 !@#$%^&*()_+\-={}[\]\\|'";:/?.>,<].*/,
  username: /^[a-zA-Z0-9_]*$/,
  email: /^[\w.-]+@[a-zA-Z\d.-]+/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
};

export const inputFieldsInstructions = {
  name: 'Name should not start with a number or special character.',
  username: 'Username should contain only letters, numbers, and underscores.',
  email: 'Enter a valid email address.',
  password:
    'Password must be at least 8 characters long and include a lowercase letter, an uppercase letter, a digit, and a special character.',
  confirmPassword: 'Confirm password must match the entered password.',
};

export const roles = {
  manager: 'Manager',
  moderator: 'Marketing Moderator',
  sales: 'Sales Representative',
};

export const layoutDimensions = {
  navbarSize: 80,
  navbarPadding: 20,
  layoutPadding: 24,
  mobileLayoutPadding: 16,
};

export const colorPairs = [
  { bg: '#f1f5fe', text: '#628cee' },
  { bg: '#fff9ee', text: '#9b7127' },
  { bg: '#eefdf3', text: '#1e833f' },
  { bg: '#fdf2f2', text: '#e0464a' },
  { bg: '#f5f5f5', text: '#4a5568' },
];

export function validateCustomerFields(firstName, lastName, phone, salesRepresntativeId, sourceName, interests, setError) {
  if (!firstName) {
    setError('Please provide a first name');
  } else if (!lastName) {
    setError('Please provide a last name');
  } else if (!phone) {
    setError('Please provide a phone number');
  } else if (!salesRepresntativeId) {
    setError('Please assign this customer to a sales representative');
  } else if (!sourceName) {
    setError('Please select the source of this customer');
  } else if (interests.length === 0) {
    setError('Please select at least one interest');
  } else {
    return true;
  }
}

// Task: The utils needs to be organized