npm run export
cp -R   __sapper__/export/* docs/
git add docs/
git commit -am "publish site"
git push

