import 'app/styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);
