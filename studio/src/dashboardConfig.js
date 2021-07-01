export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ddc25d9fec8dff7ec5cc87",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-shk46zjt",
                  apiId: "3d91ddff-c401-413d-8563-5cdc3d04753c",
                },
                {
                  buildHookId: "60ddc25d9fec8dfe3ac5ce5e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4r3jfu16",
                  apiId: "8da77602-5efd-4f7a-a2e0-8e782541dafb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/maciekdzialo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4r3jfu16.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
