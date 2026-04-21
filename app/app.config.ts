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
    container: {
      base: "w-full max-w-7xl mx-auto px-6",
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
