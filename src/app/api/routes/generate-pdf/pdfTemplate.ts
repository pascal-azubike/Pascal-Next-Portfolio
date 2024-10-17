export const pdfTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Post</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
    <style>
        .ql-editor {
            padding: 0;
        }
        .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }
        .ql-editor p {
            margin-bottom: 1em;
        }
        a {
            color: #3b82f6;
            text-decoration: none;
            transition: color 0.2s ease-in-out;
        }
        a:hover {
            color: #2563eb;
        }
        a:active {
            color: #1d4ed8;
        }
    </style>
</head>
<body class="bg-zinc-900 text-white">
    <!-- Navbar -->
    <nav class="bg-zinc-900 max-w-5xl mx-auto py-4 px-6 flex items-center justify-between">
        <div class="flex items-center space-x-4 cursor-pointer">
            <img id="author-image" alt="Author" class="rounded-full w-9 h-9" src="" />
            <a class="text-white hover:text-gray-300 active:text-gray-400 transition-colors duration-200 font-semibold" href="/" id="author-name"></a>
        </div>
        <div class="hidden md:flex space-x-6">
            <a href="/about"><span class="text-white hover:text-gray-300 active:text-gray-400 transition-colors duration-200">About</span></a>
            <a href="/projects"><span class="text-white hover:text-gray-300 active:text-gray-400 transition-colors duration-200">Projects</span></a>
            <a href="/blogs"><span class="text-white hover:text-gray-300 active:text-gray-400 transition-colors duration-200">Blogs</span></a>
        </div>
        <div class="hidden md:block">
            <a class="bg-gradient-to-br from-zinc-700 to-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-br hover:from-zinc-600 hover:to-zinc-700 active:from-zinc-800 active:to-zinc-900 hover:shadow-lg hover:shadow-zinc-700/50 transition-all duration-300" href="/path/to/your/resume.pdf">Download CV</a>
        </div>
    </nav>

    <div class="container mx-auto px-4 py-8">
        <header class="mb-8">
            <h1 id="article-title" class="text-3xl md:text-4xl font-bold mb-4"></h1>
            <p id="article-description" class="text-gray-400 text-lg mb-4"></p>
        </header>
        
        <main>
            <div id="article-image" class="mb-8 relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">
                <!-- Image will be inserted here -->
            </div>
            
            <div id="article-content" class="prose prose-invert max-w-none">
                <!-- Quill content will be inserted here -->
            </div>
        </main>
        
        <!-- Footer -->
        <footer class="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8 mt-40">
            <div class="flex flex-col justify-center items-center py-10 relative">
                <a class="flex items-center mb-4 hover:opacity-80 active:opacity-70 transition-opacity duration-200" href="/">
                    <img id="footer-logo" alt="Logo" class="rounded-full h-8 w-8 mr-2" src="" />
                    <h2 class="text-xl font-bold" id="footer-author-name"></h2>
                </a>
                <div class="flex items-center flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                    <a class="text-zinc-100 hover:text-gray-300 active:text-gray-400 text-sm relative transition-colors duration-200" href="/about"><span class="relative z-10 px-2 py-2 inline-block">About</span></a>
                    <a class="text-zinc-100 hover:text-gray-300 active:text-gray-400 text-sm relative transition-colors duration-200" href="/projects"><span class="relative z-10 px-2 py-2 inline-block">Projects</span></a>
                    <a class="text-zinc-100 hover:text-gray-300 active:text-gray-400 text-sm relative transition-colors duration-200" href="/contributions"><span class="relative z-10 px-2 py-2 inline-block">Contributions</span></a>
                    <a class="text-zinc-100 hover:text-gray-300 active:text-gray-400 text-sm relative transition-colors duration-200" href="/blogs"><span class="relative z-10 px-2 py-2 inline-block">Blogs</span></a>
                    <a class="text-zinc-100 hover:text-gray-300 active:text-gray-400 text-sm relative transition-colors duration-200" href="/events"><span class="relative z-10 px-2 py-2 inline-block">Events</span></a>
                </div>
                <p class="text-zinc-200 text-sm font-light text-center max-w-fit mx-auto mt-8 border-t border-zinc-800 pt-4">
                    © 2024 Devpro Portfolio Template. All rights reserved.
                </p>
                <div class="flex flex-row justify-center space-x-2 mt-2">
                    <a href="#" class="hover:text-gray-400 active:text-gray-500 text-zinc-500 text-sm relative transition-colors duration-200">
                        <div class="relative z-10 px-2 py-2 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </div>
                    </a>
                    <a href="#" class="hover:text-gray-400 active:text-gray-500 text-zinc-500 text-sm relative transition-colors duration-200">
                        <div class="relative z-10 px-2 py-2 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                    </a>
                    <a href="#" class="hover:text-gray-400 active:text-gray-500 text-zinc-500 text-sm relative transition-colors duration-200">
                        <div class="relative z-10 px-2 py-2 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('pre code').forEach((el) => {
                hljs.highlightElement(el);
            });
        });
    </script>
</body>
</html>`;
