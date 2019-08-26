const classname = function(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default classname