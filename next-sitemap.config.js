/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://birgulhanimkizogrenciyurdukartal.com.tr',
  generateRobotsTxt: false, // robots.txt dosyası zaten mevcut
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/_next/*', '/static/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/hakkimizda'),
    await config.transform(config, '/odalarimiz'),
    await config.transform(config, '/sosyal-alanlar'),
    await config.transform(config, '/calisma-alanlari'),
    await config.transform(config, '/yeme-icme'),
    await config.transform(config, '/guvenlik'),
    await config.transform(config, '/iletisim'),
    await config.transform(config, '/gedik-universitesi'),
    await config.transform(config, '/okan-universitesi'),
    await config.transform(config, '/piri-reis-universitesi'),
    await config.transform(config, '/marmara-universitesi'),
    await config.transform(config, '/medeniyet-universitesi'),
    await config.transform(config, '/maltepe-universitesi'),
    await config.transform(config, '/uskudar-universitesi'),
    await config.transform(config, '/acibadem-universitesi'),
    await config.transform(config, '/hakkimizda'),
    await config.transform(config, '/yurtlarimiz'),
  ],
}