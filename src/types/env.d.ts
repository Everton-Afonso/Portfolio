/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_GITHUB_URL?: string
  readonly VITE_LINKEDIN_URL?: string
  /** Optional profile photo URL. Empty renders an initials placeholder. */
  readonly VITE_PROFILE_IMAGE?: string
  /** Optional location shown in the profile sidebar. Hidden when empty. */
  readonly VITE_PROFILE_LOCATION?: string
  /** Optional availability text shown in the profile sidebar. Hidden when empty. */
  readonly VITE_PROFILE_AVAILABILITY?: string
  /** Set to the string "true" to show the availability indicator. */
  readonly VITE_PROFILE_AVAILABLE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
