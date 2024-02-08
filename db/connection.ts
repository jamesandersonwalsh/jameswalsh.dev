interface DbCredentials {
  url: string
  authToken: string | undefined
}

export default function getDbCredentials(): DbCredentials {
  return {
    url: getDatabaseURL(),
    authToken: getDatabaseAuthToken(),
  }
}

function getDatabaseURL(): string {
  const { DATABASE_URL } = process.env

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL not found in environment')
  }

  return DATABASE_URL
}

function getDatabaseAuthToken(): string | undefined {
  const { DATABASE_AUTH_TOKEN, VERCEL_ENV } = process.env

  const isProductionOrPreview = !!VERCEL_ENV && ['preview', 'production'].includes(VERCEL_ENV)

  if (isProductionOrPreview && !DATABASE_AUTH_TOKEN) {
    throw new Error('DATABASE_AUTH_TOKEN not found in environment')
  }

  return DATABASE_AUTH_TOKEN
}
