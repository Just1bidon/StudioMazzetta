/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ajustements Webpack pour pnpm et symlinks afin d'éviter
  // "Unable to snapshot resolve dependencies" en dev
  webpack: (config, { dev }) => {
    // Évite la résolution via symlinks (pnpm)
    config.resolve = config.resolve || {};
    config.resolve.symlinks = false;

    // Renforce la configuration snapshot pour pnpm
    config.snapshot = config.snapshot || {};
    const nodeModulesRegex = /[\\/]node_modules[\\/]/;
    const pnpmStoreRegex = /[\\/]node_modules[\\/]\\.pnpm[\\/]/;

    const managed = config.snapshot.managedPaths || [nodeModulesRegex];
    const immutable = config.snapshot.immutablePaths || [];

    // S'assure que le store pnpm est considéré immuable
    if (!immutable.some((r) => String(r) === String(pnpmStoreRegex))) {
      immutable.push(pnpmStoreRegex);
    }

    config.snapshot.managedPaths = managed;
    config.snapshot.immutablePaths = immutable;

    // Désactive le cache en DEV pour contourner l'avertissement de snapshot
    if (dev || process.env.WEBPACK_DISABLE_CACHE === '1') {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
