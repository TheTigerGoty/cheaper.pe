export interface Category {
    category:      string;
    subcategories: Subcategory[];
}

export interface Subcategory {
    name:   string;
    types:  string[];
    brands: string[];
}
