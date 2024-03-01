# portfolio-v1

This project requires Node.js to run and manage dependencies. This project is a customizable personal website template built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It's designed to be easy to use and adapt for your own professional profile, portfolio, or resume website.

### A clean and responsive portfolio template!

![Feature Overview](/public/demo.gif "Feature Overview")

with a table to list all your projects:

![Feature Overview](/public/archive-screen-page.png "Projects Table")

and mobile design:

<img src="/public/mobile-screen-page.png" alt="Mobile Design" title="Projects Table" width="230" height="425"/>

## Getting Started

First, ensure you have [Node.js](https://nodejs.org/en) installed on your computer. 

To get started with this template, follow these steps:

### 1. Clone the Repository

First, clone this repository to your local machine using:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual URL of this repository.

### 2. Install Dependencies

Navigate into the project directory and install the required Node.js modules:

```bash
cd <project-directory>
npm install
```

### 3. Customize Your Information

- **Personalize Your Resume**: Edit the info.js file located in the custom directory to add your resume information. This file includes placeholders for your about section, experiences, projects, education, and more.

- **Change Color Scheme**: To customize the color scheme, modify the app/color.js file. This allows you to set your preferred colors for the website.

### 4. Run the Project

After customization, you can run the project locally to see the changes:
```bash
npm run dev
```

This command starts the Next.js development server, making the website accessible at http://localhost:3000.

### 5. Build for Production
```bash
npm run build
npm start
```
This process optimizes your project for the best performance.

## Customization Guide
### 1. Change Color Scheme
1. **Edit Color Scheme**: Open `app/color.js`. You'll find color variables that define the website's palette.
2. **Modify Colors**: Change the color values to match your desired color scheme. These changes will apply globally across your website.
### 2. Add Your Resume Information
1. **Edit Resume Information**: Open `info.js`. This file contains structured data for your resume.
2. **Update Information**: Replace the default information with your own, including your experience, education, skills, and contact information.
### 3. Additional Customizations
- **Update Title and Meta Tags**: For better SEO and presentation, update the title and meta tags in the HTML head.
- **Modify Content**: Edit the HTML files or components to add or modify content such as text, images, and links.
- **Add New Pages**: To expand your website, you can add new pages. Make sure to update the navigation links accordingly.

## Deployment
To deploy your website, you can use platforms like [Vercel](https://vercel.com/) (recommended for Next.js projects), [Netlify](https://www.netlify.com/), or any other hosting service that supports Next.js applications. Follow the hosting service's instructions for deploying a Next.js project.

## Contributing
Feel free to fork this project and customize it as you wish. If you have suggestions or improvements, pull requests are welcome.

## License
This project is open source and available under the MIT License.
