import { ReactNode } from "react";

//////////////////////////////////////////////////
///////////////// SORTED BY FILES
//////////////////////////////////////////////////

// useGeolocation

export interface Position {
  lat: string;
  lng: string;
}

// CitiesContext

export type City = {
  id?: string;
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes?: string;
  position: { lat: string | null; lng: string | null };
};

export type CitiesContextState = {
  cities: City[];
  isLoading: boolean;
  currentCity: City | null;
  error: string | null;
};

export type CitiesContextAction =
  | { type: "loading" }
  | { type: "cities/loaded"; payload: City[] }
  | { type: "city/loaded"; payload: City }
  | { type: "city/created"; payload: City }
  | { type: "city/deleted"; payload: string }
  | { type: "rejected"; payload: string };

// FakeAuthContext

export interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface AuthContextState {
  user: User | null;
  isAuthenticated: boolean;
}

export type AuthContextAction =
  | { type: "login"; payload: User }
  | { type: "logout" };

// Button

export interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  loading?: boolean;
}

// CountryItem

export interface CoutryItemProps {
  country: {
    emoji: string;
    country: string;
  };
}

// Map

export interface ChangeCenterProps {
  position: [number, number];
}

// Toast

export interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}
