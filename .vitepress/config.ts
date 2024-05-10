import path from 'path';
import { writeFileSync } from 'fs';
import { Feed } from 'feed';
import { defineConfig, createContentLoader, type SiteConfig } from 'vitepress';
import { imagetools } from 'vite-imagetools';
import formatPageContentForRSS from './theme/utils/formatPageContentForRSS';

const hostName: string = 'https://ungsinhdongten.net';
const siteTitle = 'Nhà Ứng sinh Dòng Tên Việt Nam';
const siteDescription = 'Nhà Ứng sinh Dòng Tên website';
const siteCopyright = 'Copyright © 2024-present Nhà Ứng sinh Dòng Tên Việt Nam';

// This is the only directory we care about including in our RSS feed for now
const blogDir = 'chiase';
const formattedPagesForRSS: Record<string, string> = {};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: siteTitle,
    description: siteDescription,
    cleanUrls: true,
    vite: { plugins: [ imagetools() ] },
    appearance: false,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Dòng Tên', link: '/dongten' },
            { text: 'Nhà Ứng Sinh', link: '/nhaungsinh' },
            { text: 'Ban huấn huyện', link: '/bhl' },
            { text: 'Chia sẻ', link: '/chiase' },
            { text: 'Tĩnh tâm định hướng', link: '/ttdh' },
            { text: 'Liên hệ', link: '/about' }
        ],
        outline: false,
        aside: false,
        logo: 'images/ungsinh/logo.jpeg',
        socialLinks: [
            { icon: 'facebook', link: 'https://www.facebook.com/nhaungsinhdongten/' },
            { icon: 'youtube', link: 'https://www.youtube.com/@sjcandidate' },

        ],
        footer: {
            // message: 'All views expressed are my own',
            copyright: siteCopyright
        }
    },

    transformHtml(_code, _id, { content, pageData } ) {
        const { filePath } = pageData;
        const dirname = path.dirname( filePath );
        const basename = path.basename( filePath, '.md' );

        if ( dirname === blogDir ) {
            const html = formatPageContentForRSS( content, hostName );
            if ( html ) {
                formattedPagesForRSS[ `/${dirname}/${basename}` ] = html;
            }
        }
    },

    buildEnd: async ( config ) => {
        const feed = new Feed( {
            title: siteTitle,
            description: siteDescription,
            id: hostName,
            link: hostName,
            copyright: siteCopyright,
            language: 'en',
        } );

        const posts = await createContentLoader( `/${blogDir}/*.md`, {
            render: true,
            includeSrc: true,
            transform ( rawData ) {
                return rawData.sort( ( a, b ) => {
                    return +new Date( b.frontmatter.date ).getTime() - +new Date( a.frontmatter.date ).getTime()
                } );
            }
        } ).load();

        for ( const { url, excerpt, frontmatter, html } of posts ) {
            const improvedHtml = formattedPagesForRSS[ url ];

            feed.addItem( {
                title: frontmatter.title,
                id: `${hostName}${url}`,
                link: `${hostName}${url}`,
                description: excerpt,
                content: improvedHtml || html,
                author: [
                    {
                        name: 'Minh-Khoi Le-Nguyen',
                        email: 'mkhoi1998@gmail.com',
                        // link: ''
                    }
                ],
                date: frontmatter.date
            } );
        }

        writeFileSync( path.join( config.outDir, 'feed.rss' ), feed.rss2() );
    }
});
