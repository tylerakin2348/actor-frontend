module.exports = {
  pwa: {
    manifestPath: "/manifest.json"
  },
  devServer: {
    public: "actor.tylerakin.com",
    port: 3001
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/home/tyler/projects/working/actor-frontend/" : "/"
};
