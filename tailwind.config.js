module.exports = {
  purge: {
    enabled: true,
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}