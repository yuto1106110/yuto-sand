self.__uv$config = {
    prefix: '/templates/tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/templates/uv/handler.js',
    bundle: '/templates/uv/bundle.js',
    config: '/templates/uv/config.js',
    sw: '/templates/uv/sw.js',
};
