export default defineAppConfig({
  ui: {
    colors: {
      primary: "cobalt",
      secondary: "copper",
      neutral: "obsidian",
    },
    card: {
      slots: {
        body: "flex"
      }
    },
    // container-max 1280 → 1440 at 2xl → 1600 at 3xl; container-pad 20px below sm, 24px above.
    container: {
      // lg:px-6 overrides Nuxt UI's default lg:px-8.
      base: "w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-6",
    },
    separator: {
      variants: {
        color: {
          obsidian: { border: "border-obsidian-400" },
        }
      }
    }
  },
});
