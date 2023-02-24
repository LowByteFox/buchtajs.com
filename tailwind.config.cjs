/** @type {import('tailwindcss').Config} */
module.exports = {
    jit: true,
    content: ["public/**/*.{html,svelte,js,md}"],
    theme: {
        extend: {
            colors: {
                "cblack": "#1b1c1f",
                "cblack-hover": "#262a31",
                "cblue": "#1e5cf4"
            }
        },
    },
    plugins: [],
}
