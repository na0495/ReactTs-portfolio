export function convertToHours(seconds) {
  if (seconds >= 63072000) return `${Math.floor(seconds / 31536000)} years ago`
  if (seconds >= 31536000) return `${Math.floor(seconds / 31536000)} year ago`
  if (seconds >= 5184000) return `${Math.floor(seconds / 2592000)} months ago`
  if (seconds >= 2592000) return `${Math.floor(seconds / 2592000)} month ago`
  if (seconds >= 1209600) return `${Math.floor(seconds / 604800)} weeks ago`
  if (seconds >= 604800) return `${Math.floor(seconds / 604800)} week ago`
  if (seconds >= 172800) return `${Math.floor(seconds / 86400)} days ago`
  if (seconds >= 86400) return `${Math.floor(seconds / 86400)} day ago`
  if (seconds >= 7200) return `${Math.floor(seconds / 3600)} hours ago`
  if (seconds >= 3600) return `${Math.floor(seconds / 3600)} hour ago`
  if (seconds >= 120) return `${Math.floor(seconds / 60)} minutes ago`
  if (seconds >= 60) return `${Math.floor(seconds / 60)} minute ago`
  if (seconds < 60) return `${Math.floor(seconds)} seconds ago`
}
