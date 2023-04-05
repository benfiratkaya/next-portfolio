<div align="center">
    <h1>Next-Portfolio</h1>
    <p>Publish your personal website quickly and for free. Manage your content with Sanity.io.</p>
</div>

## Why so fast?

Sanity.io provides excellent performance when used in conjunction with Next.js. When you build your application, your content is generated as static pages. If there are any updates on these pages, only the relevant pages are re-rendered using Sanity Webhooks. As a result, you don't need to rebuild the entire application every time a page changes, since only the necessary pages are re-rendered using Sanity Webhooks.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Sanity.io

## Features

- Blog
- Projects
- About Me
- Contact (SMTP)
- Sanity CMS dashboard
- Beautifully designed UI.
- Multi-language support. (i18n)
- Fully responsive.
- Incredible performance.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Setup Sanity.io and add the environment variables to the `.env.local` file. (You can find the environment variables in the `.env.example` file.)
4. Run `npm install` to install all the dependencies.
5. Run `npm run build` to build the project.
6. Run `npm run start` to start the production server.
7. Access the dashboard at `/studio`.

## FAQ

### How do I access the dashboard?
Access the dashboard at `/studio`.

### How do I set up Sanity.io?
Sign up for a Sanity.io account and create a new project. Then, add the environment variables to the `.env.local` file. (You can find the environment variables in the `.env.example` file.)

### How do I set up Webhooks?
Sanity.io > Project > Settings > API Settings > Webhooks > Create Webhook.

- **Name:** `revalidate`
- **URL:** `https://yourdomain.com/api/revalidate`
- **Trigger on:** `Create, Update, Delete`
- **Filter:** `_type == "home" || _type == "about" || _type == "post" || _type == "blogCategory" || _type == "project" || _type == "projectCategory"`
- **Secret:** Create a secret and add it to the `.env.local` file. (SANITY_REVALIDATE_SECRET)

### How do I set up SMTP?
Add the environment variables to the `.env.local` file. (You can find the environment variables in the `.env.example` file.)

### How do I add a new language?
Add a new language to the `locales` array in the `i18n.js` file. Then, create a new folder in the `src/locales` directory with the name of the language you added to the `locales` array, add the translation files to the newly created folder. Finally add the language to the `languages` array in the `src/data/languages.ts` file.

## Contributing

Contributions to `next-portfolio` are welcome! If you find a bug or have a feature request, please open an issue on GitHub. If you want to contribute code, please fork the repository and create a pull request.