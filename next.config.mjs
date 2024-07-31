/** @type {import('next').NextConfig} */

const nextConfig = {
    //incremental允许您对特定路由采用 PPR
    experimental:{
        ppr: 'incremental'
    }
};

export default nextConfig;
