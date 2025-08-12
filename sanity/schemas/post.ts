import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: '記事',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '抜粋',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'メイン画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: '本文',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'カテゴリー',
      type: 'reference',
      to: { type: 'category' },
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'noteUrl',
      title: 'note記事URL',
      type: 'url',
      description: 'note記事のURLを入力してください',
    }),
    defineField({
      name: 'isExternal',
      title: '外部記事',
      type: 'boolean',
      description: 'noteなど外部サイトの記事の場合はチェック',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO設定',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'メタタイトル',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'メタディスクリプション',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt',
    },
  },
})