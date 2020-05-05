module.exports = function (api) {

    api.cache(true);

    const presets = [];

    const plugins = [
        [
            'babel-plugin-module-resolver', {
                alias: {
                    atoms: './src/components/atoms',
                    molecules: './src/components/molecules',
                    organisms: './src/components/organisms',
                    pages: './src/components/pages',
                    templates: './src/components/templates',
                    components: './src/components',
                    library: './src/library'
                }
            }
        ]
    ];

    return {
        presets,
        plugins
    };

};
