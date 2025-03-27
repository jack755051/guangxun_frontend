## Clone Base_Template

### Using the Base Method

1. Clone the repository:
   ```bash
   # Using SSH
   git clone git@github.com:jack755051/base_template.git

   # Using HTTPS
   git clone https://github.com/jack755051/base_template.git
   ```

2. Enter your project folder:
   ```bash
   cd my-new-project
   ```

3. Remove the existing `.git` directory:
   ```bash
   rm -rf .git
   ```

4. Initialize a new Git repository:
   ```bash
   git init
   ```

---

### Execute `init.sh`

1. Open your terminal and run:
   ```bash
   ./init.sh
   ```

---

## Project Configuration Overview

### `angular.json`

- **prefix**  
  Defines the prefix used when generating Angular components.

- **assets**  
  - Specifies static files to be copied to the `/dist` folder during build.  
  - Files are **not automatically loaded**—you must manually include them, e.g., `src="/public/xxx"`.  
  - Simplifies image referencing paths.  
  - Unlike `src/assets`, which is used for static files during development.  
  - Be sure to include your development image folders in the `assets` section of `angular.json`.

- **styles**  
  - Defines global styles.  
  - Supports multiple SCSS/CSS files which will be loaded in the specified order.

---

### `tsconfig.json`

- Configure path aliases using the `paths` option:

   ```json
   "paths": {
     "@services/*": ["src/app/services/*"],
     "@components/*": ["src/app/components/*"]
   }
   ```

   Example usage:

   ```ts
   import { UserService } from "@services/user.service";
   import { ButtonComponent } from "@components/button.component";
   ```

---

## About Yarn

| Feature         | Yarn                                | NPM                                 |
|----------------|-------------------------------------|-------------------------------------|
| Speed          | 🚀 Faster (parallel installation)    | 🐢 Slower (sequential installation) |
| Lock Mechanism | ✅ `yarn.lock` ensures consistent versions | ✅ `package-lock.json`, usually larger |
| Offline Mode   | ✅ Supports offline installation     | ❌ Requires network access          |
| Reliability    | ✅ Built-in integrity checks         | ⚠️ May fail due to network issues   |
| Monorepo       | ✅ Supports Workspaces               | ⚠️ Supported starting from NPM 7+   |