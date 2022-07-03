module.exports = {
  types: [
    {
      value: '🏠 init',
      name: 'init:         初始化项目',
    },
    {
      value: '✨ feat',
      name: 'feat:         新特性、新功能',
    },
    {
      value: '🌓 update',
      name: 'update:       更新原有功能',
    },
    {
      value: '🐛 fix',
      name: 'fix:          修复某功能bug',
    },
    {
      value: '📚 docs',
      name: 'docs:         仅文档新增 or 修改',
    },
    {
      value: '💎 style',
      name: 'style:        代码格式修改，非 CSS 样式修改',
    },
    {
      value: '📦 refactor',
      name: 'refactor:     重构(非新增功能、bug修改)',
    },
    {
      value: '🚀 perf',
      name: 'perf:         优化性能、体验',
    },
    {
      value: '🚨 test',
      name: 'test:         测试用例修改',
    },
    {
      value: '♻️ chore',
      name: 'chore:        构建过程或辅助工具变动',
    },
    {
      value: '🗑 revert',
      name: 'revent:       代码版本回滚',
    },
    {
      value: '🛠 build',
      name: 'build:        项目编译、发布',
    },
    {
      value: '⚙️ ci',
      name: 'ci:           项目持续集成修改',
    },
    {
      value: '💣 optimize',
      name: 'optimize:     构建工具优化 or 运行时功能',
    },
  ],
  // 步骤
  messages: {
    type: '请选择提交的类型：',
    customScope: '请输入修改的范围（可选）：',
    subject: '请简要描述提交（必填）：',
    body: '请输入详细描述（可选）：',
    footer: '请选择要关闭的issue（可选）：',
    confirmCommit: '确认要使用以上信息提交？（y/n）：',
  },

  // 跳过步骤
  skip: ['body', 'footer'],

  // 默认长度
  subjectLimit: 72,
}
