import React from 'react';
import socialLinks from "@/data/social-links";

const SocialLinks = () => {
    return (
        <>
            {
                socialLinks.map((item) => (
                    item.href !== "" && (
                        <a key={item.name} href={item.href} className="text-slate-500 hover:text-slate-700 leading-none">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6" />
                        </a>
                    )
                ))
            }
        </>
    );
};

export default SocialLinks;
