# My Blog

"My Blog" is a web project built using Next.js. The application runs on `localhost:3000`.

## Requirements

- Node.js (version 18.17 or newer)
- npm or yarn

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/mardini1414/my-mini-blog.git
   cd my-mini-blog

   ```

2. Install dependencies:

   ```bash
   npm install or yarn install

   ```

3. Running the server:

   ```bash
   npm run dev or yarn dev
   ```

## Project Structure:

```bash
my-blog/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── container/
├── config/
├── modules/
│   ├── post/
│   ├── user/
├── public/
├── types/
├── utils/
├── README.md
├── package.json
└── ...
```

### description

#### app

Contains the app.tsx file for accessing routes on the web

#### commponent

Contains reuseable component files that can be used in all modules

#### config

folder for configuration files

#### modules

folder for modules in the application, inside which there are post and user modules

#### public

Public folders are used to store static assets such as images, icons, manifest files, or other files that need to be accessed directly by users or browsers. The content can be accessed directly via a public URL from the Next.js server

#### types

This folder contains type files

#### utils

This folder contains utility files
