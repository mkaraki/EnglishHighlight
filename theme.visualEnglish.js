const visualEnglishLight = {
    base: "vs",
    inherit: true,
    rules: [
        { token: "content-splitter", foreground: "ff0000", fontStyle: "bold", background: "ee0000" },
        { token: "important-keyword", foreground: "ff0000" },
        { token: "be-verb", foreground: "6666EE", background: "00ff00" },
        { token: "keyword", foreground: "00BB88" },
    ],
    colors: {
        "editor.foreground": "#000000",
    },
};

const visualEnglishDark = {
    base: "vs-dark",
    inherit: true,
    rules: [
        { token: "content-splitter", foreground: "ff0000", fontStyle: "bold", background: "ee0000" },
        { token: "important-keyword", foreground: "ff0000" },
        { token: "be-verb", foreground: "6666EE", background: "00ff00" },
        { token: "keyword", foreground: "00BB88" },
    ],
    colors: {
        "editor.foreground": "#ffffff",
        "editor.background": "#000000",
    },
};