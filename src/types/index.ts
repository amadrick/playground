export interface PrototypeMetadata {
  title?: string;
  description?: string;
  tags?: string[];
  createdAt?: string;
}

export interface Prototype {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  createdAt?: string;
}
