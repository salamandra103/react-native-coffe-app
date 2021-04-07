module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
        assetExts: ['png', 'jpg', 'jpeg'],
        sourceExts: ['js', 'jsx', 'ts', 'tsx', 'svg'],
    },
};
