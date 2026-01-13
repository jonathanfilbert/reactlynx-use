import * as fs from 'node:fs';
import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

function getLocaleSidebar(lang: 'en' | 'zh', routePrefix: string) {
  const localeDir = path.join(__dirname, 'docs', lang);
  if (!fs.existsSync(localeDir)) {
    return [];
  }

  const categoryDirs = fs
    .readdirSync(localeDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => !name.startsWith('.'))
    .sort();

  const items = [];

  items.push({
    text: lang === 'en' ? 'Overview' : '概览',
    link: `${routePrefix}/overview`,
  });

  for (const categoryDir of categoryDirs) {
    const categoryPath = path.join(localeDir, categoryDir);
    const files = fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name)
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .sort((a, b) => {
        if (a.toLowerCase() === 'readme.md') return -1;
        if (b.toLowerCase() === 'readme.md') return 1;
        return a.localeCompare(b);
      });

    const categoryItems = files.map((file) => {
      if (file.toLowerCase() === 'readme.md') {
        return `${routePrefix}/${categoryDir}/README`;
      }
      return `${routePrefix}/${categoryDir}/${file.replace(/\.mdx?$/, '')}`;
    });

    if (categoryItems.length === 0) {
      continue;
    }

    const categoryText =
      lang === 'en'
        ? categoryDir
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ')
        : categoryDir;

    items.push({
      text: categoryText,
      items: categoryItems,
      collapsible: true,
      collapsed: categoryDir !== 'events',
    });
  }

  return items;
}

function getApiSidebar() {
  const apiDir = path.join(__dirname, 'docs/api');
  if (!fs.existsSync(apiDir)) {
    return [];
  }

  const items = [];

  // Add main entry
  items.push({
    text: 'Overview',
    link: '/api/README',
  });

  // Add directories
  const dirs = ['functions', 'interfaces', 'type-aliases', 'variables'];

  dirs.forEach(dir => {
    const dirPath = path.join(apiDir, dir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath)
        .filter(file => file.endsWith('.md'))
        .map(file => `/api/${dir}/${file.replace('.md', '')}`);

      if (files.length > 0) {
        items.push({
          text: dir.charAt(0).toUpperCase() + dir.slice(1),
          items: files,
          collapsible: true,
          collapsed: true,
        });
      }
    }
  });

  return items;
}

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'));

export default defineConfig({
  root: 'docs',
  title: `ReactLynxUse v${packageJson.version}`,
  description: 'A React-style hooks library designed specifically for ReactLynx',
  lang: 'en',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/lynx-community/reactlynx-use' },
    ],
    locales: [
      {
        lang: 'en',
        label: 'English',
        description: 'English Docs',
        nav: [
          {
            text: 'Guide',
            link: '/overview',
            activeMatch: '^/(overview|guide|events|lifecycles|mts|side-effects|state)/',
          },
          {
            text: 'API',
            link: '/api/README',
            activeMatch: '^/api/',
          },
        ],
        sidebar: {
          '/api': getApiSidebar(),
          '/': getLocaleSidebar('en', ''),
        },
      },
      {
        lang: 'zh',
        label: '简体中文',
        description: '中文文档',
        nav: [
          {
            text: '指南',
            link: '/zh/overview',
            activeMatch: '^/zh/(overview|guide|events|lifecycles|mts|side-effects|state)/',
          },
          {
            text: 'API',
            link: '/zh/api/README',
            activeMatch: '^/zh/api/',
          },
        ],
        sidebar: {
          '/zh/api': getApiSidebar(),
          '/zh': getLocaleSidebar('zh', '/zh'),
        },
      },
    ],
    outline: true,
  },
  locales: [
    {
      lang: 'en',
      label: 'English',
      description: 'English Docs',
    },
    {
      lang: 'zh',
      label: '简体中文',
      description: '中文文档',
    },
  ],
});
