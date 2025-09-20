# Contributing to Futuristic AI/ML Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker to report bugs
- Provide detailed information about the issue
- Include steps to reproduce the problem
- Add screenshots if applicable

### Suggesting Enhancements
- Open an issue with the "enhancement" label
- Describe the feature you'd like to see
- Explain why this enhancement would be useful
- Provide examples if possible

### Code Contributions

#### Getting Started
1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature/fix
4. Make your changes
5. Test your changes thoroughly
6. Submit a pull request

#### Development Setup
```bash
# Clone your fork
git clone https://github.com/your-username/futuristic-ai-portfolio.git
cd futuristic-ai-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Code Style Guidelines
- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design for all new components

#### Component Guidelines
- Create reusable components when possible
- Use proper TypeScript interfaces for props
- Implement proper error handling
- Follow the existing animation patterns
- Maintain accessibility standards

#### Animation Guidelines
- Use Framer Motion for consistent animations
- Implement scroll-based triggers appropriately
- Ensure animations are performant
- Provide reduced motion alternatives
- Test animations on different devices

## 📝 Pull Request Process

1. **Create a descriptive title** for your pull request
2. **Provide a detailed description** of your changes
3. **Reference any related issues** using keywords like "fixes #123"
4. **Include screenshots** for UI changes
5. **Test your changes** thoroughly before submitting
6. **Update documentation** if necessary

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested animations
- [ ] Tested accessibility

## Screenshots
(If applicable)

## Additional Notes
Any additional information
```

## 🎨 Design Guidelines

### Color Scheme
- Primary: Cyan (#00ffff)
- Secondary: Purple (#8b5cf6)
- Accent: Pink (#ec4899)
- Background: Dark grays (#111827, #1f2937)

### Typography
- Use consistent font weights (400, 500, 600, 700)
- Maintain proper line heights
- Ensure good contrast ratios
- Follow responsive text sizing

### Animations
- Keep animations smooth and purposeful
- Use appropriate easing functions
- Implement proper loading states
- Consider performance impact

## 🧪 Testing

### Manual Testing Checklist
- [ ] All animations work smoothly
- [ ] Responsive design on all screen sizes
- [ ] Accessibility features function properly
- [ ] Performance is acceptable
- [ ] Cross-browser compatibility

### Performance Guidelines
- Optimize images and assets
- Minimize bundle size
- Use lazy loading where appropriate
- Implement proper caching strategies

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for complex functions
- Document component props and interfaces
- Include usage examples for reusable components
- Update README for significant changes

### README Updates
- Keep installation instructions current
- Update feature lists for new additions
- Maintain accurate project structure
- Include new deployment options

## 🚀 Deployment

### Before Merging
- Ensure build process works correctly
- Test production build locally
- Verify all assets load properly
- Check for console errors

### After Merging
- Monitor deployment status
- Test live site functionality
- Check for any production issues
- Update live demo links if necessary

## 🔧 Development Tools

### Recommended Extensions (VS Code)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### Useful Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Git workflow
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

## 📞 Getting Help

If you need help or have questions:
- Check existing issues and discussions
- Create a new issue with the "question" label
- Reach out to maintainers
- Join community discussions

## 🏆 Recognition

Contributors will be recognized in:
- README acknowledgments
- Release notes
- Project documentation

Thank you for contributing to making this portfolio even better! 🚀