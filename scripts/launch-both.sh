#!/bin/bash

echo "🚀 Starting both development environments..."
echo

# Navigate to project root
cd "$(dirname "$0")/.."

echo "📦 Building main package first..."
npm run build
echo

echo "🎨 Starting CSS-based environment on port 5173..."
cd develoments/css-based
npm run dev &
CSS_PID=$!

echo "⏱️  Waiting 3 seconds..."
sleep 3

echo "🎨 Starting Tailwind-based environment on port 5174..."
cd ../tailwind-based
npm run dev -- --port 5174 &
TAILWIND_PID=$!

echo
echo "✅ Both development servers are running:"
echo "   🎨 CSS-based:      http://localhost:5173"
echo "   🎨 Tailwind-based: http://localhost:5174"
echo
echo "📝 Testing both environments..."
echo "   - Both should look visually identical"
echo "   - Dialog should work without scroll issues"
echo "   - Theme toggle should work in both"
echo
echo "🛑 Press Ctrl+C to stop both servers"

# Wait for interrupt
trap "echo; echo 'Stopping servers...'; kill $CSS_PID $TAILWIND_PID 2>/dev/null; exit" INT
wait
