source "https://rubygems.org"

# Fija las versiones exactas que usa GitHub Pages, para que la vista previa
# local sea idéntica al despliegue.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Dependencias necesarias en Ruby 3.x
gem "webrick", "~> 1.8"
gem "csv"
gem "base64"
gem "bigdecimal"

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
