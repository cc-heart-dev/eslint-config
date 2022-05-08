class RandomizedSet {
  constructor(private set: Set<number> = new Set()) {}

  insert(val: number): boolean {
    if (this.set.has(val)) {
      return false
    }
    this.set.add(val)
    return true
  }

  remove(val: number): boolean {
    if (this.set.has(val)) {
      this.set.delete(val)
      return true
    }
    return false
  }

  getRandom(): number {
    const radom = Number.parseInt(String(Math.random() * this.set.size))
    let i = 0
    let entries: IterableIterator<number> = this.set.values()

    while (i <= radom) {
      if (i === radom) {
        break
      }
      entries.next()
      i++
    }
    return entries.next().value
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 