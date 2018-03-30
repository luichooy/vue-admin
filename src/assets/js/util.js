let util = {};

util.title = function (title) {
  title = title || 'vue-admin';
  window.document.title = title;
};


util.setCurrentPath = function (vm, name) {
  let currentPathArr = [];

  vm.$store.state.routers.forEach(router => {
    router.children.forEach(child => {
      if (child.name === name) {
        if (router.name === 'otherRouter') {
          if (name === 'home') {
            currentPathArr = [{
              path: '/home',
              name: 'home',
              title: '首页'
            }];
          } else {
            currentPathArr = [{
              path: '/home',
              name: 'home',
              title: '首页'
            },
            {
              path: router.path + '/' + child.path,
              name: child.name,
              title: child.title
            }
            ];
          }
        } else {
          let index = router.children[0];

          currentPathArr = [{
            path: '/home',
            name: 'home',
            title: '首页'
          },
          {
            path: router.path + '/index',
            name: index.name,
            title: index.title
          }
          ];

          if (child.name.indexOf('_index') < 0) {
            currentPathArr.push({
              path: router.path + '/' + child.path,
              name: child.name,
              title: child.title
            });
          }
        }
      }
    })
  });

  // console.log(currentPathArr);
  vm.$store.commit('setCurrentPath', currentPathArr);
  // vm.$store.dispatch('setCurrentPath', currentPathArr);
}

export default util;
