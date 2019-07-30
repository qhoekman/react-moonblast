function getScroll(w: Window | null, top?: boolean) {
  if (w) {
    let ret = top ? w.pageYOffset : w.pageXOffset;
    const method = top ? 'scrollTop' : 'scrollLeft';
    if (typeof ret !== 'number') {
      const d = w.document;
      // ie6,7,8 standard mode
      ret = d.documentElement[method];
      if (typeof ret !== 'number') {
        // quirks mode
        ret = d.body[method];
      }
    }

    return ret;
  }
}

function getClientPosition(elem: Element) {
  let x;
  let y;
  const doc = elem.ownerDocument;
  if (doc) {
    const body = doc.body;
    const docElem = doc && doc.documentElement;
    if (docElem) {
      const box = elem.getBoundingClientRect();
      x = box.left;
      y = box.top;
      x -= docElem.clientLeft || body.clientLeft || 0;
      y -= docElem.clientTop || body.clientTop || 0;

      return {
        left: x,
        top: y
      };
    }
  }
}
export function getOffsetLeft(el: Element) {
  const pos = getClientPosition(el);
  const doc = el.ownerDocument;
  if (doc && pos) {
    const w = doc.defaultView;
    const scroll = getScroll(w);
    if (scroll) {
      pos.left += scroll;
    }

    return pos.left;
  }
}
