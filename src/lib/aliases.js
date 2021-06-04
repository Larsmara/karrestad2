const aliases = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@constants': `${prefix}/constants`,
  '@containers': `${prefix}/containers`,
  '@context': `${prefix}/context`,
  '@fixtures': `${prefix}/fixtures`,
  '@helpers': `${prefix}/helpers`,
  '@hooks': `${prefix}/hooks`,
  '@pages': `${prefix}/pages`,
  '@services': `${prefix}/services`,
  '@lib': `${prefix}/lib`
});

module.exports = aliases;
