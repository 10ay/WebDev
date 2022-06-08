function max(iterable, key) {
    var maximum = 0;
    for (var i in iterable) {
      var max = key(i);
      if (max >= maximum) {
        maximum = max;
      }
    }
    return maximum;
  }
  

  const reverser = max(iterable, Math.min);
  