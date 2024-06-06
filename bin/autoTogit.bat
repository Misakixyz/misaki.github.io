// 推送到github-pages
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/Misakixyz/Misakixyz.github.io.git master:gh-pages

