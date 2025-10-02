// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-two-papers-accepted-to-cvpr-2024-one-highlight-scalr-and-spot-highlight",
          title: 'Two papers accepted to CVPR 2024 (one highlight!): ScaLR and SPOT (highlight)',
          description: "",
          section: "News",},{id: "news-i-will-be-serving-as-area-chair-at-cvpr-2025",
          title: 'I will be serving as Area Chair at CVPR 2025.',
          description: "",
          section: "News",},{id: "news-fungi-was-accepted-to-neurips",
          title: 'FUNGI was accepted to NeurIPs.',
          description: "",
          section: "News",},{id: "news-our-tmlr-paper-moca-on-self-supervised-learning-led-by-me-has-been-selected-for-presentation-at-iclr-2025",
          title: 'Our TMLR paper, MOCA, on self-supervised learning (led by me) has been selected...',
          description: "",
          section: "News",},{id: "news-futurist-was-accepted-to-cvpr-2025-thread-x-bluesky",
          title: 'FUTURIST was accepted to CVPR 2025. Thread X / Bluesky',
          description: "",
          section: "News",},{id: "news-eq-vae-was-accepted-to-icml-2025-thread-x-bluesky",
          title: 'EQ-VAE was accepted to ICML 2025. Thread X / Bluesky',
          description: "",
          section: "News",},{id: "news-dip-was-accepted-to-iccv-2025-thread-x-bluesky",
          title: 'DIP was accepted to ICCV 2025. Thread X / Bluesky',
          description: "",
          section: "News",},{id: "news-new-release-from-valeo-ai-franca-a-high-performing-fully-open-source-vision-foundation-model-data-code-weights-it-matches-and-sometimes-outperform-dinov2-siglipv2-clip-on-vit-g-setting-a-new-open-source-standard-github",
          title: 'New release from Valeo.ai: Franca, a high-performing, fully open-source vision foundation model (data,...',
          description: "",
          section: "News",},{id: "news-i-will-be-serving-as-area-chair-at-cvpr-2026",
          title: 'I will be serving as Area Chair at CVPR 2026.',
          description: "",
          section: "News",},{id: "news-three-papers-accepted-to-neurips-2025-one-spotlight-redi-spotlight-dino-foresight-and-mutor-thread-x-bluesky",
          title: 'Three papers accepted to NeurIPS 2025 (one spotlight)! ReDi (spotlight), DINO-Foresight, and MuToR....',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/spyrosgidaris.bsky.social", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/163/2312.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%70%79%72%6F%73.%67%69%64%61%72%69%73@%76%61%6C%65%6F.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gidariss", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/spyros-gidaris-22ba2a145", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7atfg7EAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/SpyrosGidaris", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
