const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    [
        '@babel/transform-runtime',
        {
            regenerator: true
        }
    ]
];
// if (process.env.NODE_ENV === 'development') {
//     plugins.push('react-refresh/babel');
// }

module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins
};
