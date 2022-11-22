/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SENDINBLUE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
