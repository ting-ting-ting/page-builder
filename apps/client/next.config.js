//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  poweredByHeader: false,
  assetPrefix: isProduction ? '.' : undefined,
  output: 'export',
  nx: {
    svgr: true,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
