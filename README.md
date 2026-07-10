# Portfolio Creation

This is a code bundle for Portfolio creation. The original project is available at https://www.figma.com/design/RK8wvhmT9ahUD5FLTUlv8Q/Portfolio-creation.

## Running the Code

1. Run `npm install` to install the dependencies.
2. Set up your environment variables (see [Web3Forms Integration](#web3forms-integration) below).
3. Run `npm run dev` to start the local development server.

---

## Web3Forms Integration

The contact form is configured to handle submissions using [Web3Forms](https://web3forms.com/) securely via environment variables.

### 1. Retrieve your Access Key
1. Go to [Web3Forms](https://web3forms.com/).
2. Enter your email address to receive a free Access Key.
3. Check your email inbox and copy the generated Access Key.

### 2. Configure Environment Variables
To keep your Web3Forms Access Key secure and prevent it from being exposed in public code repositories:
1. In the root directory of this project, you will find a `.env` file (if not, copy `.env.example` to `.env`).
2. Open the `.env` file.
3. Replace the placeholder value with your actual Web3Forms Access Key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

> [!NOTE]
> Since this project uses **Vite**, environment variables must be prefixed with `VITE_` (e.g., `VITE_WEB3FORMS_ACCESS_KEY`) so that they are exposed to the client-side code via `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`.

### 3. Git Security (.gitignore)
To prevent accidentally committing your sensitive `.env` file containing the access key:
1. A `.gitignore` file has been created in the root directory.
2. It includes lines to ignore all `.env` files:
   ```git
   # Environment variables
   .env
   .env.local
   .env.development.local
   .env.test.local
   .env.production.local
   ```
3. This ensures that Git ignores these files during staging, keeping your key secure and private on your local machine.