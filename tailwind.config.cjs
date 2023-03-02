/** @type {import('tailwindcss').Config} */
module.exports = {
    jit: true,
    content: ["public/**/*.{html,svelte,js,md}"],
    theme: {
        extend: {
            colors: {
                // mio-black
                "primary": "#12111A",
                "primary-hover": "#272632",
                // mio-tie-red
                "secondary": "#D9132B"
            }
        },
    },
    plugins: [],
}
