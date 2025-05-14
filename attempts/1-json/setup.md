# Prototype 1: Setup Prerequisites

## 🏗️ Project Structure Decision

### Option 1: Standalone Package
```
theme-parser/
├── src/
│   ├── parser/
│   ├── utils/
│   └── index.ts
├── tests/
├── package.json
└── tsconfig.json
```

**Pros:**
- Isolated development
- Can be published as npm package
- Clear boundaries
- Easier testing

**Cons:**
- Additional maintenance
- Need to handle integration later
- Separate versioning

### Option 2: Main Project Module
```
Oh-My-Poshinator/
├── src/
│   ├── parser/  # Our prototype
│   ├── other-modules/
│   └── index.ts
└── ...
```

**Pros:**
- Direct integration
- Shared configuration
- Unified versioning
- Easier refactoring

**Cons:**
- Less isolated
- More complex testing
- Harder to publish separately

## 📦 Required Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "ajv": "^8.12.0",        // JSON Schema validation
    "ajv-formats": "^2.1.1"  // Additional JSON Schema formats
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vitest": "^1.0.0",      // Testing framework
    "@types/node": "^20.0.0",
    "prettier": "^3.0.0",
    "eslint": "^8.0.0"
  }
}
```

### Development Tools
- TypeScript
- ESLint
- Prettier
- Git hooks (optional)

## ⚙️ Configuration Files

### TypeScript (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### ESLint (.eslintrc.json)
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"]
}
```

## 📚 Sample Data Collection

### Required Theme Examples
1. **Basic Theme**
   - Simple path segment
   - Basic styling
   - No nested segments

2. **Complex Theme**
   - Multiple segments
   - Nested structures
   - Various style properties

3. **Edge Cases**
   - Invalid themes
   - Malformed JSON
   - Unknown segment types

### Sources
- Oh-My-Posh official themes
- Community themes
- Custom test cases

## 🚀 Development Workflow

### 1. Initial Setup
```bash
# Create project structure
mkdir -p src/parser src/utils tests

# Initialize package
npm init -y

# Install dependencies
npm install ajv ajv-formats
npm install -D typescript vitest @types/node prettier eslint
```

### 2. Development Process
1. Write tests first (TDD approach)
2. Implement functionality
3. Run tests and linting
4. Document changes
5. Commit with clear messages

### 3. Testing Strategy
- Unit tests for each component
- Integration tests for full flow
- Performance benchmarks
- Error case coverage

## 📝 Next Steps

1. **Decide Project Structure**
   - Choose between standalone or main project
   - Set up initial structure

2. **Environment Setup**
   - Install dependencies
   - Configure tools
   - Set up testing

3. **Sample Data**
   - Collect theme examples
   - Create test cases
   - Document schema

4. **Begin Implementation**
   - Start with basic types
   - Implement core functionality
   - Add tests

## ❓ Questions to Resolve

1. Should this be a standalone package or part of the main project?
2. What testing framework should we use?
3. Do we need any specific build tools?
4. How should we handle versioning?
5. What's our CI/CD strategy? 