/** @type {import('next').NextConfig} */

// const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
// const apiKey = process.env.CLOUDINARY_API_KEY;
// const apiSecret = process.env.CLOUDINARY_API_SECRET;

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/ProfilCreate/:id",
        destination: "/ProfilCreate?id=:id",
        permanent: true
      },
      {
        source: "/ProfilPro/:id",
        destination: "/ProfilPro?id=:id",
        permanent: true
      },

    ];
  },
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false
                },
                { name: "removeDimensions", active: true }
              ]
            }
          }
        }
      ]
    });

    return config; // Ajoutez cette ligne pour retourner la configuration modifiée
  },

  images: {
    remotePatterns: [
      // Vous devez fournir des objets plutôt que des chaînes de caractères
      {
        hostname: "www.w3.org"
        // D'autres options ici si nécessaire
      },
      {
        hostname: "res.cloudinary.com"
        // D'autres options ici si nécessaire
      }
    ]
  }
};

module.exports = nextConfig;
