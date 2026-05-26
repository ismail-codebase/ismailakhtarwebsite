#!/bin/bash

# Quick Start Guide - Run commands in order

echo "🚀 Portfolio Website Quick Start"
echo "================================"
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Navigate to project
cd /Users/ismail/Documents/project/mywebsite

echo "📦 Checking dependencies..."
echo ""

# Start dev server
echo "🎯 Starting development server..."
echo "   Local:   http://localhost:3000"
echo "   Network: http://192.168.1.49:3000"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo ""

npm run dev
