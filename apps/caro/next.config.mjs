let userConfig = undefined
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reusable base-path strategy (same convention as apps/*/vite.config.ts):
  // the monorepo build pipeline sets NEXT_BASE_PATH to "/caro" for this app;
  // when run completely standalone (`cd apps/caro && npm run dev`), it falls
  // back to this app's own known slug below.
  output: "export",
  basePath: process.env.NEXT_BASE_PATH || "/caro",
  assetPrefix: process.env.NEXT_BASE_PATH || "/caro",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.optimization.minimizer.map((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions.compress.drop_console = true;
        }
        return minimizer;
      });
    }
    return config;
  },
}

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
