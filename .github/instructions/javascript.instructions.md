---
applyTo: '**/*.{ts,tsx,js,jsx}'
---

# Roblox TypeScript (roblox-ts)

## General Guidelines

- Use `type` instead of `interface` for all type definitions
- Use the `{}[]` format for array types
- Always put only one variable in an if statement
- Use the function arguments/properties directly instead of assigning them to new local variables
- Always return an object with a key named based on the returned data
- Don't create README.md files summarizing the action you did

## Functions

- Always use objects as function arguments named props
- Format the Props type as `${functionName}Props` in PascalCase
- Always export the props type
- Do not spread the props object in the function
- Do not destructure the props object in the function, use props.propertyName directly
- Do not assign props to local variables, use props.propertyName directly throughout the function
- Handle return values in variable declarations, not in the return statement

Example:

```typescript
// ✅ Good
const data = response.data || []
const totalSize = count || 0
return { data, totalSize }

// ❌ Bad
return {
  data: data || [],
  totalSize: count || 0,
}
```

## Modules

- Use ES6 `import`/`export` syntax for module imports
- Export modules using `export default` to make them available in Roblox services
- Keep module implementations separate from stub definitions to avoid runtime errors

## Best Practices

- Use `for...of` loops with arrays instead of traditional for loops
- Always provide proper type annotations for function parameters and return values
- Structure your code to separate initialization from implementation
