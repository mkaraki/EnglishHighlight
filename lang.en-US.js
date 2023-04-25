const lang_en_US = {
    ignoreCase: true,
    prepositions: [
        'about',
        'aboard',
        'above',
        'across',
        'after',
        'against',
        'along',
        'alongside',
        'amid',
        'among',
        'anti',
        'around',
        'as',
        'at',
        'bar',
        'before',
        'behind',
        'below',
        'beneath',
        'beside',
        'besides',
        'between',
        'beyond',
        'but',
        'by',
        'considering',
        'despite',
        'down',
        'during',
        'except',
        'for',
        'from',
        'in',
        'inside',
        'into',
        'less',
        'like',
        'minus',
        'near',
        'notwithstanding',
        'of',
        'off',
        'on',
        'onto',
        'opposite',
        'out',
        'outside',
        'over',
        'pace',
        'past',
        'pending',
        'per',
        'plus',
        're',
        'regarding',
        'round',
        'save',
        'saving',
        'since',
        'than',
        'through',
        'throughout',
        'till',
        'to',
        'touching',
        'toward',
        'under',
        'underneath',
        'unlike',
        'until',
        'up',
        'versus',
        'via',
        'vice',
        'with',
        'within',
        'without',
    ],
    fanboys_conjunctions: [
        'for',
        'and',
        'nor',
        'but',
        'or',
        'yet',
        'so',
    ],
    be_verb: [
        'am',
        'is',
        'are',
        'was',
        'were'
    ],
    tokenizer: {
        root: [
            [/[a-z][\w$]*/, {
                cases: {
                    '@fanboys_conjunctions': 'important-keyword',
                    '@prepositions': 'keyword',
                    '@be_verb': 'be-verb',
                    '@default': 'identifier'
                }
            }],
            [/\./, "content-splitter"],
        ],
    },
};

const langHover_en_US = {
    provideHover: function (model, position) {
        const searchWordObject = model.getWordAtPosition(position);
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWordObject.word}`;
        return fetch(url).then(d => d.json()).then(d => {
            let content = [];

            if (d.length > 0) {
                d.forEach(def => {
                    content.push({ value: `**${def['word']}** ${def['phonetic']}` });
                    def['meanings'].forEach(e => {
                        e['definitions'].forEach(ed => {
                            content.push({ value: `(${e['partOfSpeech']}) ${ed['definition']}` });
                        });
                    });

                    content.push({ value: `*License: [${def['license']['name']}](${def['license']['url']}), Sources: ${def['sourceUrls'].join(' ')}*` });
                })
            } else {
                content.push({ value: "No data found" });
            };

            console.log(content);

            return {
                range: new monaco.Range(
                    position.lineNumber,
                    searchWordObject.startColumn,
                    position.lineNumber,
                    searchWordObject.endColumn,
                ),
                contents: content
            };
        });
    }
};