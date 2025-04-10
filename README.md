# Cloud Commerce

A modern e-commerce platform built with Next.js 15 and AWS Amplify, leveraging serverless architecture for scalability. Features include a responsive design with dynamic theming, real-time product search, secure authentication via Cognito, and optimized content delivery through CloudFront. The platform offers a seamless shopping experience with server-side rendering and comprehensive error handling.

## Features

- 🛍️ Product browsing with featured items carousel
- 🔍 Real-time search functionality
- 🛒 Shopping cart management
- 🔐 Secure user authentication
- 📱 Responsive mobile-first design
- 🎨 Dynamic color theming
- 🌐 Server-side rendering
- ⚡ Optimized image loading
- 🛡️ Comprehensive error handling and fallbacks

## Tech Stack

- **Frontend:**
  - Next.js 15
  - React 19
  - SASS/SCSS
  - TypeScript
  - Swiper.js

- **Backend:**
  - AWS Amplify
  - GraphQL API
  - S3 for image storage
  - Cognito for authentication
  - CloudFront for content delivery
  - API Gateway for API management
  - Lambda for serverless functions
  - DynamoDB for database storage
  - Route 53 for hosted DNS
  - ACM for secure traffic using HTTPS

## Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- AWS account
- AWS Amplify CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cloud-commerce.git
cd cloud-commerce
```

2. Install dependencies
```bash
npm install
```

3. Configure Amplify

For detailed Amplify configuration instructions, visit [AWS Amplify Documentation](https://docs.amplify.aws/)

4. Start the development server
```bash
npm run dev
```

5. For production build and server
```bash
npm run build
npm start
```

## Project Structure

```
cloud-commerce/
├── amplify/            # AWS Amplify 
├── public/             # Static assets
├── src/
│   ├── app/           # Next.js pages and layouts
│   ├── components/    # React components
│   ├── context/       # React context providers
│   ├── interfaces/    # TypeScript interfaces
│   ├── services/      # API services
│   └── _lib/          # Utility functions
└── sass/              # Global styles
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint
- `npm run prettier` - Format code
- `npm test` - Run tests

## Deployment

The application can be deployed using AWS Amplify.
First push your changes to GitHub and Amplify should automatically pickup the changes.

## Git Hooks

This project uses Husky for Git hooks to ensure code quality:

### Pre-commit
- Runs ESLint
- Runs Prettier formatting

### Pre-push
- Runs ESLint
- Runs Prettier formatting

To skip hooks temporarily (not recommended), use:
```bash
git commit -m "message" --no-verify
```

Note: Hooks can be found in the `.husky` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Connor Hunter - [@connh321](https://github.com/connh321)
