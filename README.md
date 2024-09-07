
---
 
# 📚 Podkastr


**Podkstr** is a revolutionary AI-powered SaaS solution that empowers users to create, discover, and enjoy podcasts effortlessly. Leveraging advanced text-to-audio conversion with multi-voice AI, this platform allows creators to transform written content into engaging audio experiences with diverse, lifelike voices. Additionally, the platform's AI-driven podcast thumbnail generation turns simple prompts into visually captivating artwork, enhancing the appeal of each podcast episode.

Listeners can enjoy seamless playback with a modern and responsive player, complete with advanced controls for an uninterrupted audio experience. Whether you’re a creator looking to launch new podcasts or a listener searching for the latest trends, this platform combines powerful AI capabilities with an intuitive interface, making podcasting accessible and engaging for everyone.

## 📖 Table of Contents
- [Tech Stack](https://github.com/mirza7175/podkastr/edit/main/README.md#%EF%B8%8F-tech-stack)
- [Features](https://github.com/mirza7175/podkastr/edit/main/README.md#-features)
- [Quick Start](https://github.com/mirza7175/podkastr/edit/main/README.md#-quick-start)
- [Screen Shots](https://github.com/mirza7175/podkastr/edit/main/README.md#screen-shots)
- [Notes](https://github.com/mirza7175/podkastr/edit/main/README.md#-notes)
## ⚙️ Tech Stack

- **Next.js**: React framework for server-side rendering and optimized performance.
- **TypeScript**: Static typing for enhanced code quality and developer experience.
- **Convex**: Backend for serverless data management and real-time updates.
- **OpenAI**: AI-powered text-to-audio conversion and multi-voice generation.
- **Clerk**: Authentication and user management for secure login and registration.
- **ShadCN**: Design system for a consistent UI and component reusability.
- **Tailwind CSS**: Utility-first CSS framework for responsive and customizable designs.

## 🔋 Features

- **Unique Selling Point**:  
  - **TTS Generation**: Easily convert text into dynamic audio with multiple AI-generated voices, creating podcasts effortlessly.
  - **AI Thumbnail Generation**: Generate engaging and personalized thumbnails for your podcasts using a simple prompt.

- **Robust Authentication**: Secure and reliable user login and registration system using Clerk.

- **Modern Home Page**: Displays trending podcasts with a sticky podcast player for uninterrupted listening.

- **Discover Podcasts Page**: A dedicated page for exploring new and popular podcasts.

- **Fully Functional Search**: Allows users to easily find podcasts using various search criteria.

- **Create Podcast Page**: Facilitates podcast creation with features like text-to-audio conversion, AI image generation, and previews.

- **Profile Page**: View all created podcasts with options to delete or manage them.

- **Podcast Details Page**: Displays detailed information about each podcast, including creator info, number of listeners, and a full transcript.

- **Podcast Player**: Features backward/forward controls and mute/unmute functionality for a seamless listening experience.

- **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

- **Optimized Code Architecture**: Emphasizes code reusability and maintainability for a scalable application.

## 🚀 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- **Git**
- **Node.js**
- **npm (Node Package Manager)**

### Cloning the Repository

```bash
git clone https://github.com/mirza7175/podkastr.git
cd podkastr
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
```

Replace the placeholder values with your actual Convex & Clerk credentials. You can obtain these credentials by signing up on the Convex and Clerk websites.

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Screen Shots

- ### 🔑 Sign in / Sign up
![Screenshot 2024-09-07 212550](https://github.com/user-attachments/assets/2342f854-8622-41ad-a182-628e1723a5bb)

---
- ### 📧 Email Verification
![Screenshot 2024-09-07 215530](https://github.com/user-attachments/assets/dda41da9-c0fa-449d-88ac-8e4a4d03df62)
---
- ### 🏠 Home Page
![Screenshot 2024-09-07 212708](https://github.com/user-attachments/assets/5b0e643a-cf58-4bbc-8f87-e06fc10ae27e)
---
- ### 🧭 Discover
![Screenshot 2024-09-07 212807](https://github.com/user-attachments/assets/24421f5c-b1ee-4022-a16d-b6d389a85b5e)
---
- ### 🎙️ Create Podcast
![Screenshot 2024-09-07 212917](https://github.com/user-attachments/assets/16895b88-cff5-418e-a201-e193da9fcc06)
---
- ### 🎵 Podcast Player 
![Screenshot 2024-09-07 213023](https://github.com/user-attachments/assets/e080c5b3-3444-4fe6-b5ea-0b341ef3e48b)
---

## 📝 Notes

### You may encounter errors while doing this projects. Here are some fixes and suggestions.

- #### Error regarding [CONVEX A(openai:generateAudioAction)] Error: 429 You exceeded your current quota, please check your plan and billing details.
  #### Solution: You need to buy credits to access OPENAI API. For more details visit  [https://openai.com/api/pricing/](https://openai.com/api/pricing/)
- #### Install all dependencies of shadcn (eg form, toast etc)
- #### Whenever dealing with databse operations ensure you run
   ```bash
   npx convex dev
   ```
- #### Ensure you configure Clerk and Convex correctly.
