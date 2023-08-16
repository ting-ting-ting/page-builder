//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('./.nx-helpers/compiled.js');

/**
 * @type {import('./.nx-helpers/compiled.js').WithNxOptions}
 **/
const nextConfig = {
  poweredByHeader: false,
  nx: {
    svgr: true,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
