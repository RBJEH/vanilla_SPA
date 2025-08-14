function updateElement(parent, oldNode, newNode) {
  if (!oldNode && !newNode) {
    return;
  }

  if (!oldNode) {
    parent.appendChild(newNode.cloneNode(true));
  } else if (!newNode) {
    parent.removeChild(oldNode);
  } else if (oldNode.isEqualNode(newNode)) {
    return;
  } else if (oldNode.nodeType === Node.TEXT_NODE && newNode.nodeType === Node.TEXT_NODE) {
    oldNode.textContent = newNode.textContent;
  } else if (oldNode.nodeName !== newNode.nodeName) {
    parent.replaceChild(newNode.cloneNode(true), oldNode);
  } else {
    const oldChildren = oldNode.childNodes;
    const newChildren = newNode.childNodes;
    let max = Math.max(oldChildren.length, newChildren.length);
    for (let i = 0; i < max; i++) {
      updateElement(oldNode, oldChildren[i], newChildren[i]);
    }
  }
}

export function patch(selector, newHTML) {
  const container = document.querySelector(selector);
  if (!container) {
    return;
  }

  const newNode = container.cloneNode(false);
  newNode.innerHTML = newHTML;

  updateElement(container.parentNode, container, newNode);
}
