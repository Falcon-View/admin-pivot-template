/**
 * rule由key和配置数组组成
 * 如：'key:[0, 'always', 72]'
 * 数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，
 *       第二位为是否应用，可选always|never，
 *       第三位该rule的值
 *
 * 提交信息可自定义规范
 * init: 项目初始化
 * feat：新功能（feature）
 * fix：修补bug
 * docs：文档（documentation）
 * style：不影响代码运行的样式(空格、格式、分号)
 * refactor：重构（即不是新增功能，也不是修改bug的代码变动）
 * perf: 性能优化
 * test：增加测试
 * chore: 构建过程或辅助工具变动
 * revert：回滚找回删除提交
 * build: 项目打包
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init',
        'feat',
        'update',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
        'ci',
        'optimize',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-empty': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
