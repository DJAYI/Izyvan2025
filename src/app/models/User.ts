export interface User {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  docType: string;
  docNumber: string;
  phone: string;

  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}
