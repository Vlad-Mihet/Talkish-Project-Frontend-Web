export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  authorId: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
