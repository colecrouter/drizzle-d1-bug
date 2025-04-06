# Drizzle D1 Bug

## Reproduction

- Install dependencies with `npm install`
- Run `npx wrangler d1 execute iirc --file schema.sql` to create the database & data
- Run `node index.js` and observe the output

## Expected output

```plaintext
[
  {
    achievements_stats: {
      app_id: 2195250,
      data: [Array],
      updated_at: 2023-10-25T10:40:00.000Z
    },
    achievements_meta: { app_id: 'english', lang: undefined }
  }
]
```

## Actual output

```plaintext
[
  {
    achievements_stats: {
      app_id: 2195250,
      data: [Array],
      updated_at: 2023-10-25T10:40:00.000Z
    },
    achievements_meta: { app_id: 2195250, lang: 'english' }
  }
]
```
