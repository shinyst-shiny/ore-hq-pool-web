import packageJson from 'package.json'

export const environment = {
  production: true,
  testEnvironment: (window as any)['env']['testEnvironment'],
  version: packageJson.version,
  api: {
    basePath: (window as any)['env']['apiUrl']
  },
  sentry: {
    tracesSampleRate: 0.5,
    captureConsole: ['error'],
    dns: ''
  },
  keycloakConfig: {
    config: {
      url: (window as any)['env']['keycloakUrl'],
      realm: 'quake',
      clientId: 'quake'
    },
    initOptions: {
      onLoad: 'login-required'
    },
    bearerExcludedUrls: ['/assets']
  }
}
