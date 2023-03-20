namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_SITE_NAME: string;
        NEXT_PUBLIC_SITE_URL: string;
        NEXT_PUBLIC_DISQUS_SHORT_NAME: string;
        NEXT_PUBLIC_SANITY_PROJECT_ID: string;
        NEXT_PUBLIC_SANITY_DATASET: string;
        NEXT_PUBLIC_SOCIAL_EMAIL: string;
        NEXT_PUBLIC_SOCIAL_FACEBOOK: string;
        NEXT_PUBLIC_SOCIAL_TWITTER: string;
        NEXT_PUBLIC_SOCIAL_INSTAGRAM: string;
        NEXT_PUBLIC_SOCIAL_LINKEDIN: string;
        NEXT_PUBLIC_SOCIAL_GITHUB: string;
        CONTACT_EMAIL: string;
        SMTP_HOST: string;
        SMTP_PORT: number;
        SMTP_SECURE: boolean;
        SMTP_USERNAME: string;
        SMTP_PASSWORD: string;
    }
}