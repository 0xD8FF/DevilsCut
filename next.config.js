/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      path: false,
      os: false,
      crypto: false,
      zlib: false,
      stream: false,
      http: false,
      https: false,
    };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};
