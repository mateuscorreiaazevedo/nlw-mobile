import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/a0595cf44e8e6f381966',
}

export const useAuth = () => {
  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: 'a0595cf44e8e6f381966',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'your.app',
      }),
    },
    discovery,
  )

  return { response, signInWithGithub }
}
