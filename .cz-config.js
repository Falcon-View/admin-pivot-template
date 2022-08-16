module.exports = {
  // type类型
  types: [
    {
      value: '🏠 init',
      name: 'init:         初始化项目',
    },
    {
      value: '✨ feat',
      name: 'feat:         新增特性、功能',
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
      name: 'test:         添加、修改测试用例',
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
  // scope 类型
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['ui', 'UI 组件调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    }
  }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // allowCustomScopes: true,

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

  // 交互提示信息
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n请选择提交的类型：',
    scope: '\n请选择一个 scope 类型（可选）：',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope 类型：\n',
    subject: '请简要描述提交（必填）：\n',
    body: '请输入详细变更描述（可选）。使用 "|" 换行：\n',
    breaking: '请列举非兼容性重大的变更（可选）：\n',
    footer: '请选择要关闭的issue（可选）：\n',
    confirmCommit: '确认要使用以上信息提交？（y/n）：',
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],

  // 跳过步骤
  // skipQuestion: ['body', 'footer'],

  // 默认长度
  subjectLimit: 100,
  breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
