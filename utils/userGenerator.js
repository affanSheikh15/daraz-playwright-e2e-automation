function randomUser(prefix = 'auto') {
  const t = Date.now().toString().slice(-6);
  return `${prefix}${t}`;
}

module.exports = { randomUser };
