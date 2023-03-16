import type { Metadata } from 'next';
import socialLinks from "@/data/social-links";
import {formParticle1, formParticle2} from "@/data/svg";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: 'Contact',
};

export default function Contact() {
    return (
        <div className="bg-white px-4 overflow-hidden sm:px-6 lg:px-8">
            <div className="relative max-w-xl mx-auto">
                {formParticle1}
                {formParticle2}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        You can contact me via email or social media.
                    </p>
                    <div className="flex w-full justify-center pt-4 gap-x-4 mt-3">
                        {socialLinks.map((item) => (
                            item.href !== "#" &&
                            <a key={item.name} href={item.href} className="text-slate-500 hover:text-slate-700">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-7" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}