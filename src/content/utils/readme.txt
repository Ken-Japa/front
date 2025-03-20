0. Lista de posts
```
npm run blog-summary posts
 ```
 Criar uma lista de posts com o (id)(slug)(data) e os posts relacionados
1. Ver todos os posts e seus detalhes 
```
npm run blog-summary all
 ```
Creates a detailed summary of all blog posts, including titles, dates, categories, tags, topics, descriptions, and related posts.


2. Procurar posts
```
npm run blog-summary search <term>
 ```
Searches through all posts for the given term in titles, descriptions, tags, and categories.
Example: npm run blog-summary search investimentos


3. Filtrar por categoria
```
npm run blog-summary category <category>
 ```
Shows all posts in a specific category.
Example: npm run blog-summary category economia


4. Filtro por tag
```bash
npm run blog-summary tag <tag>
 ```
Shows all posts with a specific tag.
Example: npm run blog-summary tag "educação financeira"

All summaries will be saved as markdown files in the src/content/utils/summaries directory with the format: blog-summary-[type]-[date].md
