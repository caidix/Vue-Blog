exports
function filterSideBar(sidebar) {
  return sidebar.reduce((prev, next) => {
    if (next.meta.disabled) {
      return prev;
    }
    let params = {};
    if (next.children && next.children.length > 0) {
      params.children = filterSiderBar(next.children)
    }
    if (next.name) {
      params.name = next.name;
    }
    params.title = next.meta.title;
    params.icon = next.meta.icon || '';
    prev.push(params)
  }, [])
}