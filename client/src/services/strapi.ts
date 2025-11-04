const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
}

export interface PageContent {
  id: number;
  title: string;
  content: string;
  slug: string;
  image?: StrapiImage;
}

export interface StrapiResponseItem {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    image?: StrapiImage;
    publishedAt?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Fetch page content by slug
 */
export const fetchPageBySlug = async (slug: string): Promise<PageContent | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: StrapiResponse<StrapiResponseItem[]> = await response.json();

    if (result.data && result.data.length > 0) {
      const item = result.data[0];
      return {
        id: item.id,
        ...item.attributes
      };
    }

    return null;
  } catch (error) {
    console.error(`Error fetching page with slug "${slug}":`, error);
    return null;
  }
};

/**
 * Fetch all pages
 */
export const fetchAllPages = async (): Promise<PageContent[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/pages?populate=*`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: StrapiResponse<StrapiResponseItem[]> = await response.json();
    return result.data?.map(item => ({
      id: item.id,
      ...item.attributes
    })) || [];
  } catch (error) {
    console.error('Error fetching all pages:', error);
    return [];
  }
};

/**
 * Get full URL for Strapi media
 */
export const getStrapiMediaUrl = (url: string): string => {
  if (url.startsWith('http')) {
    return url;
  }
  return `${STRAPI_URL}${url}`;
};
