#!/bin/bash

echo "🚀 Publishing Schilling Widgets System to NPM"
echo "=============================================="

# Ensure we're in the package directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: package.json not found. Make sure you're in the package directory."
  exit 1
fi

# Check if we're logged in to npm
echo "📋 Checking npm authentication..."
if ! npm whoami >/dev/null 2>&1; then
  echo "⚠️  You need to login to npm first."
  echo "   Run: npm login"
  exit 1
fi

echo "✅ NPM authentication verified"

# Build the package
echo "🔧 Building package..."
if npm run build; then
  echo "✅ Package built successfully"
else
  echo "❌ Build failed"
  exit 1
fi

# Run tests (if available)
echo "🧪 Running tests..."
npm test --passWithNoTests

# Publish the package
echo "📦 Publishing to NPM..."
if npm publish --access public; then
  echo ""
  echo "🎉 SUCCESS! Package published to NPM"
  echo "   You can now install it with:"
  echo "   npm install schilling-widgets-system"
  echo ""
  echo "📋 Next steps:"
  echo "   1. Check the package on: https://www.npmjs.com/package/schilling-widgets-system"
  echo "   2. Share the demo project with your team"
  echo "   3. Update documentation if needed"
else
  echo "❌ Publishing failed"
  echo "   Possible causes:"
  echo "   - Version already exists"
  echo "   - Network issues"
  echo "   - Authentication problems"
  echo ""
  echo "💡 Try incrementing version with: npm version patch"
  exit 1
fi
