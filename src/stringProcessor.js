function maskEmail(email) {
  if (!email.includes('@')) throw new Error();
  const [user, domain] = email.split('@');
  if (user.length <= 1) return email;
  const maskedUser = user[0] + '*'.repeat(user.length - 2) + user[user.length - 1];
  return `${maskedUser}@${domain}`;
}

function reverseWords(sentence) {
  if (!sentence.trim()) return "";
  return sentence.trim().split(/\s+/).reverse().join(' ');
}

function extractHashtags(text) {
  const matches = text.match(/#\w+/g);
  return matches ? matches : [];
}

module.exports = { maskEmail, reverseWords, extractHashtags };