module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 120],
        'subject-case': [0],
        'type-enum': [
            2,
            'always',
            ['docs', 'chore', 'feat', 'release', 'fix', 'merge', 'perf', 'refactor', 'revert', 'style', 'test', 'ci']
        ],
        'scope-empty': [0]
    }
};