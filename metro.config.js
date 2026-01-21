const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add this to handle the internal Lucide extension issues
config.resolver.sourceExts.push('js', 'json', 'ts', 'tsx');
config.resolver.assetExts.push('glb', 'gltf', 'png', 'jpg');

module.exports = config;