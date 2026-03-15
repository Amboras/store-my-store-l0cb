## Overview

Make iterative changes to an existing generated store based on user feedback.

## Usage

User provides edit requests like:
- "Make the homepage hero section taller"
- "Change primary color to navy blue"
- "Add a testimonials section to homepage"
- "Switch product grid to 3 columns"
- "Make product images larger"
- "Add a newsletter signup form"

## Approach

### 1. Identify the Store

Determine which store to edit:
- If only one store exists in `storefront/`, use that
- If multiple stores exist, ask user which one
- Default to most recently created if unclear

### 2. Understand the Request

Parse the edit request to identify:
- **What to change**: Component, style, layout, content
- **Where to change it**: Which file(s) need editing
- **How to change it**: Specific code modifications needed

### 3. Make Atomic Changes

**Principles**:
- Edit specific files, don't regenerate entire components
- Make minimal, focused changes
- Preserve existing functionality
- Maintain code style and patterns

**Common Edit Patterns**:

#### Color Changes
Edit `tailwind.config.ts`:
```typescript
// Change primary color
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a', // navy blue
    }
  }
}
```

#### Layout Changes
Edit specific component files:
```typescript
// Make hero taller
<section className="h-screen"> // was h-[600px]
```

#### Component Addition
Add new components to pages:
```typescript
// Add testimonials section
import Testimonials from '@/components/testimonials'

<Testimonials />
```

#### Typography Changes
Edit `app/layout.tsx` or `tailwind.config.ts`:
```typescript
// Change font
const playfair = Playfair_Display({ subsets: ['latin'] })
```

#### Grid Layout Changes
Edit product grid component:
```typescript
// Switch to 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### 4. Verify Changes

After making edits:

```bash
# Type check
cd storefront/{store-id} && npm run type-check

# Check for errors in dev mode
# (server should already be running with hot reload)
```

Verify:
- No TypeScript errors
- No console errors
- Changes appear correctly
- Responsive design still works
- No broken functionality

### 5. Report Changes

Tell user:
```markdown
## Changes Applied ✅

**Store**: {store-id}
**Edited**:
- `app/page.tsx` - Made hero section taller (h-screen)
- `tailwind.config.ts` - Changed primary color to navy blue

**Preview**: http://localhost:3000 (refresh to see changes)

**Next Steps**:
- Review the changes in your browser
- Make more edits if needed: `/edit-store "..."`
- Deploy when satisfied: `/deploy-store`
```

## Common Edit Types

### Design/Styling

**Colors**:
- Edit `tailwind.config.ts` → colors section
- Update component className props

**Typography**:
- Import new fonts in `app/layout.tsx`
- Update font family in `tailwind.config.ts`
- Change text sizes in components

**Spacing**:
- Adjust padding/margin classes: `p-4` → `p-8`
- Update container max-widths
- Change gap values in grids

**Borders/Shadows**:
- Update border radius: `rounded-md` → `rounded-lg`
- Add/remove shadows: `shadow-sm`, `shadow-lg`

### Layout

**Section Heights**:
- Edit height classes: `h-96` → `h-screen`
- Adjust min-height values

**Grid Columns**:
- Change grid-cols values
- Adjust responsive breakpoints

**Container Widths**:
- Update max-width classes
- Change container padding

**Component Order**:
- Reorder sections in page files
- Move components around

### Components

**Add New Components**:
1. Create component file in `components/`
2. Import in page
3. Add to JSX

**Remove Components**:
1. Comment out or delete import
2. Remove from JSX

**Modify Existing**:
- Edit component props
- Update internal logic
- Change styles

### Content

**Text Changes**:
- Edit text content in components
- Update headings and descriptions
- Modify button labels

**Images**:
- Replace image URLs
- Update alt text
- Change image sizes

## Guidelines

### Do's ✅
- Make small, incremental changes
- Use existing component patterns
- Maintain TypeScript types
- Keep code formatted
- Test changes immediately
- Preserve responsive design

### Don'ts ❌
- Regenerate entire files for small changes
- Break existing functionality
- Ignore TypeScript errors
- Make too many changes at once
- Skip testing
- Introduce new dependencies without need

## Error Handling

If edit fails:
1. Read error message carefully
2. Undo the change if needed (`git restore {file}`)
3. Try alternative approach
4. Ask user for clarification if ambiguous

Common issues:
- TypeScript errors → Fix type mismatches
- Import errors → Verify file paths
- Style not applying → Check Tailwind config
- Component not rendering → Verify JSX syntax

## Multiple Edits

User can chain edits:
```
User: "Make hero taller"
→ Edit applied
User: "Now change color to blue"
→ Edit applied
User: "Add testimonials section"
→ Edit applied
```

Each edit builds on the previous state.

## Advanced Edits

For complex changes requiring multiple files:
1. Identify all affected files
2. Make changes in logical order
3. Test after each file
4. Report all changes at end

Example:
```
Request: "Add dark mode support"

Files to edit:
1. app/providers.tsx - Add dark mode provider
2. tailwind.config.ts - Add dark mode config
3. components/* - Add dark: classes
4. app/layout.tsx - Add theme toggle

Report all changes together.
```

## Next Steps After Edit

User can:
- Make more edits
- Deploy changes: `/deploy-store`
- Reset to previous state (if git is used)
- Edit files directly in IDE
