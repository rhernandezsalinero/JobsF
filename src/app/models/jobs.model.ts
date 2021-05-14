import { Company } from "./company.model";

export interface Job {
  type?:        string;
  _id?:         string;
  name?:        string;
  description?: string;
  location?:    string;
  savedAt?:     Date;
  updatedAt?:   Date;
  company?:     Company;
  picture?:     string
}

