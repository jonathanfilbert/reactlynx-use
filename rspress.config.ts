import * as path from 'path';
import * as fs from 'fs';
import { defineConfig } from 'rspress/config';

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

export default defineConfig({
  root: 'docs',
  title: 'ReactLynx Use',
  description: 'A React-style hooks library designed specifically for ReactLynx',
  lang: 'en',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/lynx-community/reactlynx-use' },
    ],
    nav: [
      {
        text: 'Guide',
        link: '/events/',
        activeMatch: '^/(en|zh)/(events|lifecycles|mts|side-effects|state)/',
      },
      {
        text: 'API',
        link: '/api/README',
        activeMatch: '^/api/',
      },
    ],
    sidebar: {
      '/api/': getApiSidebar(),
      '/en/': [
        {
          text: 'Events',
          items: [
            '/en/events/',
            '/en/events/useEventListener',
            '/en/events/useExposureForNode',
            '/en/events/useExposureForPage',
            '/en/events/useStayTime',
          ],
        },
        {
          text: 'Lifecycles',
          items: [
            '/en/lifecycles/',
            '/en/lifecycles/useEffectOnce',
            '/en/lifecycles/useLifecycles',
            '/en/lifecycles/useMountedState',
            '/en/lifecycles/useUnmount',
            '/en/lifecycles/useUnmountPromise',
            '/en/lifecycles/useUpdateEffect',
          ],
        },
        {
          text: 'MTS',
          items: [
            '/en/mts/',
            '/en/mts/useMainThreadImperativeHandle',
            '/en/mts/usePointerEvent',
            '/en/mts/useTapLock',
            '/en/mts/useTouchEmulation',
            '/en/mts/useVelocity',
          ],
        },
        {
          text: 'Side Effects',
          items: [
            '/en/side-effects/',
            '/en/side-effects/useDebounce',
            '/en/side-effects/useError',
            '/en/side-effects/useThrottle',
            '/en/side-effects/useThrottleFn',
          ],
        },
        {
          text: 'State',
          items: [
            '/en/state/',
            '/en/state/createMemo',
            '/en/state/useBoolean',
            '/en/state/useCounter',
            '/en/state/useDefault',
            '/en/state/useImmer',
            '/en/state/useLatest',
            '/en/state/useMap',
            '/en/state/useNumber',
            '/en/state/usePrevious',
            '/en/state/useQueue',
            '/en/state/useSet',
            '/en/state/useSetState',
            '/en/state/useToggle',
            '/en/state/useUniqueId',
          ],
        },
      ],
      '/zh/': [
        {
          text: '事件',
          items: [
            '/zh/events/',
            '/zh/events/useExposureForNode',
            '/zh/events/useExposureForPage',
            '/zh/events/useStayTime',
          ],
        },
        {
          text: '生命周期',
          items: [
            '/zh/lifecycles/',
            '/zh/lifecycles/useEffectOnce',
            '/zh/lifecycles/useEventListener',
            '/zh/lifecycles/useLifecycles',
            '/zh/lifecycles/useMountedState',
            '/zh/lifecycles/useUnmount',
            '/zh/lifecycles/useUnmountPromise',
            '/zh/lifecycles/useUpdateEffect',
          ],
        },
        {
          text: '多线程',
          items: [
            '/zh/mts/',
            '/zh/mts/useMainThreadImperativeHandle',
            '/zh/mts/usePointerEvent',
            '/zh/mts/useTapLock',
            '/zh/mts/useTouchEmulation',
            '/zh/mts/useVelocity',
          ],
        },
        {
          text: '副作用',
          items: [
            '/zh/side-effects/',
            '/zh/side-effects/useDebounce',
            '/zh/side-effects/useError',
            '/zh/side-effects/useThrottle',
            '/zh/side-effects/useThrottleFn',
          ],
        },
        {
          text: '状态',
          items: [
            '/zh/state/',
            '/zh/state/createMemo',
            '/zh/state/useBoolean',
            '/zh/state/useCounter',
            '/zh/state/useDefault',
            '/zh/state/useImmer',
            '/zh/state/useLatest',
            '/zh/state/useMap',
            '/zh/state/useNumber',
            '/zh/state/usePrevious',
            '/zh/state/useQueue',
            '/zh/state/useSet',
            '/zh/state/useSetState',
            '/zh/state/useToggle',
            '/zh/state/useUniqueId',
          ],
        },
      ],
    },
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
