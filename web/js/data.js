// data.js — single source of truth for all shortcuts

const CATEGORIES = [
  { id: 'navigation',   icon: '🧭', en: 'Subtitle Navigation',  zh: '字幕导航' },
  { id: 'punctuation',  icon: '✏️',  en: 'Punctuation',          zh: '标点符号' },
  { id: 'transforms',   icon: '🔄', en: 'Text Transforms',       zh: '文本转换' },
  { id: 'blocks',       icon: '📦', en: 'Block Operations',      zh: '字幕块操作' },
  { id: 'video',        icon: '🎬', en: 'Video Control',         zh: '视频控制' },
];

// key: { ctrl, shift, alt, code }
// code: event.code string, or null for modifier-only combos
// For display: keys[] array of human-readable key names

const SHORTCUTS = [
  // ── Navigation ──────────────────────────────────────────────────────────────
  {
    id: 'nav_next',
    category: 'navigation',
    keys: { ctrl: false, shift: true, alt: false, code: 'Period' },
    display: ['Shift', '>'],
    label: { en: 'Jump to next subtitle', zh: '跳到下一条字幕' },
    tip: {
      en: 'Your primary movement key. Keeps your hands on the keyboard — no mouse needed to advance.',
      zh: '主要移动键，双手无需离开键盘即可向前切换字幕。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'nav_prev',
    category: 'navigation',
    keys: { ctrl: false, shift: true, alt: false, code: 'Comma' },
    display: ['Shift', '<'],
    label: { en: 'Jump to previous subtitle', zh: '跳到上一条字幕' },
    tip: {
      en: 'Use this when you notice an error in the previous line and need to go back quickly.',
      zh: '发现前一行有错误时，快速回跳修改。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'nav_scroll_down',
    category: 'navigation',
    keys: { ctrl: true, shift: false, alt: false, code: 'ArrowDown' },
    display: ['Ctrl', '↓'],
    label: { en: 'Scroll subtitle list down (hold)', zh: '向下滚动字幕列表（按住）' },
    tip: {
      en: 'Hold to scroll continuously. Release and the cursor auto-jumps to the nearest visible subtitle.',
      zh: '按住持续滚动，松开后光标自动跳到最近的可见字幕。'
    },
    difficulty: 'intermediate',
  },
  {
    id: 'nav_scroll_up',
    category: 'navigation',
    keys: { ctrl: true, shift: false, alt: false, code: 'ArrowUp' },
    display: ['Ctrl', '↑'],
    label: { en: 'Scroll subtitle list up (hold)', zh: '向上滚动字幕列表（按住）' },
    tip: {
      en: 'Pair with Ctrl+↓ to scan through a long subtitle list without touching the mouse.',
      zh: '与 Ctrl+↓ 配合，无需鼠标即可浏览长字幕列表。'
    },
    difficulty: 'intermediate',
  },
  {
    id: 'nav_fast_down',
    category: 'navigation',
    keys: { ctrl: true, shift: false, alt: true, code: 'ArrowDown' },
    display: ['Ctrl', 'Alt', '↓'],
    label: { en: 'Fast scroll down 2× speed', zh: '向下快速滚动（2倍速）' },
    tip: {
      en: 'Hold Alt while already holding Ctrl+↓ to double the scroll speed. Great for long files.',
      zh: '在按住 Ctrl+↓ 的同时按住 Alt，滚动速度翻倍，适合长文件。'
    },
    difficulty: 'intermediate',
  },
  {
    id: 'nav_fast_up',
    category: 'navigation',
    keys: { ctrl: true, shift: false, alt: true, code: 'ArrowUp' },
    display: ['Ctrl', 'Alt', '↑'],
    label: { en: 'Fast scroll up 2× speed', zh: '向上快速滚动（2倍速）' },
    tip: {
      en: 'Same as fast scroll down but upward. Use to jump back to the top of a long subtitle file quickly.',
      zh: '与快速向下滚动相同，向上滚动。可快速跳回长字幕文件的顶部。'
    },
    difficulty: 'intermediate',
  },

  // ── Punctuation ─────────────────────────────────────────────────────────────
  {
    id: 'punct_replace',
    category: 'punctuation',
    keys: { ctrl: false, shift: false, alt: false, code: '_PUNCT_' }, // special
    display: ['.', ',', '?', '!', '/'],
    label: { en: 'Auto-replace end punctuation', zh: '自动替换末尾标点' },
    tip: {
      en: 'Only fires when the cursor is after existing end punctuation. Press the new punctuation key to swap it instantly.',
      zh: '仅在光标位于末尾标点符号之后时生效。直接按新标点键即可替换。'
    },
    difficulty: 'beginner',
    isSpecial: true,
  },
  {
    id: 'punct_exclaim',
    category: 'punctuation',
    keys: { ctrl: false, shift: true, alt: false, code: 'Quote' },
    display: ['Shift', '"'],
    label: { en: 'Replace / append "!"', zh: '替换末尾标点为 !' },
    tip: {
      en: 'If end punctuation exists, replaces it with !. Otherwise appends ! at the cursor position.',
      zh: '若末尾有标点则替换为 !，否则在光标处追加 !。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'punct_ellipsis',
    category: 'punctuation',
    keys: { ctrl: false, shift: false, alt: false, code: 'Semicolon' },
    display: [';'],
    label: { en: 'Replace / append "..."', zh: '替换末尾标点为 ...' },
    tip: {
      en: 'Single key for ellipsis — much faster than typing three dots. Replaces existing end punctuation if present.',
      zh: '单键输入省略号，比手动输入三个点快得多。如有末尾标点则直接替换。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'punct_comma_repeat',
    category: 'punctuation',
    keys: { ctrl: true, shift: false, alt: false, code: 'Comma' },
    display: ['Ctrl', ','],
    label: { en: 'Add commas between repeated words', zh: '在重复词之间添加逗号' },
    tip: {
      en: 'e.g. "iya iya iya." → "iya, iya, iya." Handles up to 6-character repeated words automatically.',
      zh: '例如 "iya iya iya." → "iya, iya, iya."，自动处理最多6个字符的重复词。'
    },
    difficulty: 'intermediate',
  },

  // ── Text Transforms ──────────────────────────────────────────────────────────
  {
    id: 'tx_toggle_case',
    category: 'transforms',
    keys: { ctrl: false, shift: true, alt: false, code: 'Semicolon' },
    display: ['Shift', ':'],
    label: { en: 'Toggle first character case', zh: '切换首字母大小写' },
    tip: {
      en: 'Instantly flip the first letter between upper and lower case. No need to move the cursor to the start.',
      zh: '立即切换首字母大小写，无需将光标移到行首。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'tx_aku',
    category: 'transforms',
    keys: { ctrl: false, shift: true, alt: false, code: 'BracketLeft' },
    display: ['Shift', '{'],
    label: { en: 'Replace " aku" → "ku"', zh: '将 " aku" 替换为 "ku"' },
    tip: {
      en: 'Indonesian pronoun contraction. e.g. "aku suka" → "kusuka". Use for informal/conversational speech.',
      zh: '印尼语代词缩写。例如 "aku suka" → "kusuka"，用于非正式/口语对话。'
    },
    difficulty: 'intermediate',
  },
  {
    id: 'tx_kamu',
    category: 'transforms',
    keys: { ctrl: false, shift: true, alt: false, code: 'BracketRight' },
    display: ['Shift', '}'],
    label: { en: 'Replace " kamu" → "mu"', zh: '将 " kamu" 替换为 "mu"' },
    tip: {
      en: 'Indonesian pronoun contraction for "you". e.g. "milik kamu" → "milikmu".',
      zh: '印尼语第二人称代词缩写。例如 "milik kamu" → "milikmu"。'
    },
    difficulty: 'intermediate',
  },
  {
    id: 'tx_dia',
    category: 'transforms',
    keys: { ctrl: false, shift: true, alt: false, code: 'Backslash' },
    display: ['Shift', '|'],
    label: { en: 'Replace " dia" → "nya"', zh: '将 " dia" 替换为 "nya"' },
    tip: {
      en: 'Indonesian pronoun contraction for "he/she/it". e.g. "rumah dia" → "rumahnya".',
      zh: '印尼语第三人称代词缩写。例如 "rumah dia" → "rumahnya"。'
    },
    difficulty: 'intermediate',
  },
  {
    id: 'tx_hahaha',
    category: 'transforms',
    keys: { ctrl: false, shift: false, alt: true, code: 'Backslash' },
    display: ['Alt', '\\'],
    label: { en: 'Replace entire line with "Hahaha."', zh: '替换整行为 "Hahaha."' },
    tip: {
      en: 'One-key replacement for laughter. Much faster than clearing the line and typing manually.',
      zh: '一键替换为笑声文本，比手动清除再输入快得多。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'tx_clear',
    category: 'transforms',
    keys: { ctrl: false, shift: false, alt: true, code: 'Backspace' },
    display: ['Alt', 'Backspace'],
    label: { en: 'Clear entire line', zh: '清空整行' },
    tip: {
      en: 'Clears the entire textarea content in one keystroke. Faster than Ctrl+A then Delete.',
      zh: '一键清空整个文本区域的内容，比 Ctrl+A 再 Delete 更快。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'tx_numbers',
    category: 'transforms',
    keys: { ctrl: true, shift: true, alt: true, code: null },
    display: ['Ctrl', 'Shift', 'Alt'],
    label: { en: 'Convert Indonesian number words to digits', zh: '将印尼语数字词转为数字' },
    tip: {
      en: 'e.g. "dua puluh tiga" → "23", "setengah empat" → "3.30". Handles fractions, decimals, percentages.',
      zh: '例如 "dua puluh tiga" → "23"，"setengah empat" → "3.30"。支持分数、小数、百分比。'
    },
    difficulty: 'advanced',
    isModifierOnly: true,
  },

  // ── Block Operations ─────────────────────────────────────────────────────────
  {
    id: 'block_distribute',
    category: 'blocks',
    keys: { ctrl: true, shift: false, alt: false, code: 'Backslash' },
    display: ['Ctrl', '\\'],
    label: { en: 'Distribute text to next block (keep timestamps)', zh: '将文本分配到下一块（保留时间轴）' },
    tip: {
      en: 'Splits text at the cursor position and pushes the second half into the next subtitle block without changing any timestamps.',
      zh: '在光标处拆分文本，将后半部分推入下一字幕块，不改变任何时间戳。'
    },
    difficulty: 'advanced',
  },
  {
    id: 'block_split',
    category: 'blocks',
    keys: { ctrl: true, shift: false, alt: false, code: 'BracketLeft' },
    display: ['Ctrl', '['],
    label: { en: 'Split subtitle block at cursor (halve time)', zh: '在光标处拆分字幕块（时间平分）' },
    tip: {
      en: 'Creates a new subtitle block at the cursor position, splitting the duration equally between the two halves.',
      zh: '在光标处创建新字幕块，原时间段被平分到两个块。'
    },
    difficulty: 'advanced',
  },
  {
    id: 'block_merge',
    category: 'blocks',
    keys: { ctrl: true, shift: false, alt: false, code: 'BracketRight' },
    display: ['Ctrl', ']'],
    label: { en: 'Merge with next block (join text with space)', zh: '与下一块合并（空格连接文本）' },
    tip: {
      en: 'Combines the current and next block. The end time becomes the next block\'s end time. Text is joined with a space.',
      zh: '合并当前块和下一块。结束时间取下一块的结束时间，文本用空格连接。'
    },
    difficulty: 'advanced',
  },
  {
    id: 'block_delete',
    category: 'blocks',
    keys: { ctrl: true, shift: false, alt: false, code: 'Delete' },
    display: ['Ctrl', 'Del'],
    label: { en: 'Delete current subtitle block', zh: '删除当前字幕块' },
    tip: {
      en: 'Removes the entire subtitle block (text + timestamps). Use carefully — there is no undo shortcut.',
      zh: '删除整个字幕块（文本+时间戳）。请谨慎使用，没有撤销快捷键。'
    },
    difficulty: 'advanced',
  },

  // ── Video Control ────────────────────────────────────────────────────────────
  {
    id: 'vid_play_segment',
    category: 'video',
    keys: { ctrl: false, shift: true, alt: false, code: 'Enter' },
    display: ['Shift', 'Enter'],
    label: { en: 'Play current subtitle segment (auto-pause)', zh: '播放当前字幕片段（自动暂停）' },
    tip: {
      en: 'Plays only the current subtitle\'s video segment, then auto-pauses. Essential for verifying sync without rewinding manually.',
      zh: '仅播放当前字幕的视频片段，然后自动暂停。是验证同步性的核心操作，无需手动倒带。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'vid_playpause',
    category: 'video',
    keys: { ctrl: false, shift: true, alt: false, code: 'Space' },
    display: ['Shift', 'Space'],
    label: { en: 'Play/pause; on pause focus active subtitle', zh: '播放/暂停；暂停时跳转焦点到当前字幕' },
    tip: {
      en: 'When you pause, the cursor automatically jumps to the subtitle that matches the current video time.',
      zh: '暂停时，光标自动跳到与当前视频时间匹配的字幕处。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'vid_save',
    category: 'video',
    keys: { ctrl: true, shift: false, alt: false, code: 'Enter' },
    display: ['Ctrl', 'Enter'],
    label: { en: 'Save subtitle', zh: '保存字幕' },
    tip: {
      en: 'Save early, save often. Make this a habit — use it after every few edits.',
      zh: '养成习惯，每编辑几条就保存一次。'
    },
    difficulty: 'beginner',
  },
  {
    id: 'vid_submit',
    category: 'video',
    keys: { ctrl: true, shift: true, alt: false, code: 'Enter' },
    display: ['Ctrl', 'Shift', 'Enter'],
    label: { en: 'Submit and jump to first subtitle', zh: '提交并跳转到第一条字幕' },
    tip: {
      en: 'Submits the subtitle file and moves focus back to subtitle #1 for review from the top.',
      zh: '提交字幕文件并将焦点移回第一条字幕，方便从头审阅。'
    },
    difficulty: 'intermediate',
  },
];

// Key detection helper — returns true if event matches a shortcut's keys object
function matchesShortcut(event, keys) {
  if (keys.code === null) {
    // modifier-only: all three must be held, trigger on any keydown that isn't a modifier itself
    const modKeys = new Set(['Control', 'Shift', 'Alt', 'Meta']);
    return keys.ctrl && keys.shift && keys.alt &&
           event.ctrlKey && event.shiftKey && event.altKey &&
           !modKeys.has(event.key);
  }
  if (event.code !== keys.code) return false;
  if (!!event.ctrlKey  !== keys.ctrl)  return false;
  if (!!event.shiftKey !== keys.shift) return false;
  if (!!event.altKey   !== keys.alt)   return false;
  return true;
}

// Format display keys for rendering
function formatDisplayKeys(display) {
  return display.map(k => `<kbd>${k}</kbd>`).join('<span class="plus">+</span>');
}
