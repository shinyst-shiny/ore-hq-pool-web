// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import packageJson from 'package.json'

export const environment = {
  production: false,
  testEnvironment: true,
  version: packageJson.version,
  api: {
    basePath: 'https://sdc-qas.calzedonia.com'
  },
  sentry: {
    tracesSampleRate: 1.0,
    captureConsole: ['error', 'warn'],
    dns: ''
  },
  keycloakConfig: {
    config: {
      url: '/auth',
      realm: 'quake',
      clientId: 'quake'
    },
    initOptions: {
      onLoad: 'login-required'
    },
    bearerExcludedUrls: ['/assets']
  }
}
