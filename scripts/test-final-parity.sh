#!/bin/bash

echo "🧪 Testing Final Implementation - Both Environments"
echo "=================================================="

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}📦 Building main package...${NC}"
cd "c:/Users/eduar/OneDrive/Escritorio/npmPakage"
npm run build

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Main package build successful${NC}"
else
  echo -e "${RED}❌ Main package build failed${NC}"
  exit 1
fi

echo ""
echo -e "${BLUE}🔨 Building CSS-based environment...${NC}"
cd "c:/Users/eduar/OneDrive/Escritorio/npmPakage/develoments/css-based"
npm run build

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ CSS-based build successful${NC}"
else
  echo -e "${RED}❌ CSS-based build failed${NC}"
  exit 1
fi

echo ""
echo -e "${BLUE}🔨 Building Tailwind-based environment...${NC}"
cd "c:/Users/eduar/OneDrive/Escritorio/npmPakage/develoments/tailwind-based"
npm run build

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Tailwind-based build successful${NC}"
else
  echo -e "${RED}❌ Tailwind-based build failed${NC}"
  exit 1
fi

echo ""
echo -e "${YELLOW}🚀 Starting both development servers...${NC}"
echo -e "${BLUE}CSS-based will run on http://localhost:5173${NC}"
echo -e "${BLUE}Tailwind-based will run on http://localhost:5174${NC}"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop both servers${NC}"

# Start both development servers in background
cd "c:/Users/eduar/OneDrive/Escritorio/npmPakage/develoments/css-based"
npm run dev &
CSS_PID=$!

cd "c:/Users/eduar/OneDrive/Escritorio/npmPakage/develoments/tailwind-based"
npm run dev -- --port 5174 &
TAILWIND_PID=$!

# Wait for user to stop
wait

# Kill both processes when script exits
kill $CSS_PID $TAILWIND_PID 2>/dev/null

echo ""
echo -e "${GREEN}✅ Test completed successfully!${NC}"
echo -e "${BLUE}Both environments should look and behave identically${NC}"
